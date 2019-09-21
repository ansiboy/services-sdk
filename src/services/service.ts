import { Service as ChiTuSerivce, AjaxOptions, ValueStore } from 'maishu-chitu-service'

export interface LoginInfo {
    token: string,
    userId: string,
}

export class Service extends ChiTuSerivce {
    async ajax<T>(url: string, options?: AjaxOptions): Promise<T | null> {
        options = options || {}
        options.headers = options.headers || {}
        // if (Service.loginInfo.value)
        //     options.headers['token'] = Service.loginInfo.value.token

        // if (Service.applicationId)
        //     options.headers['application-id'] = typeof Service.applicationId == 'function' ? Service.applicationId() : Service.applicationId

        let data = await super.ajax<T>(url, options)
        if (data == null) {
            return null
        }

        let obj = data as any
        if (obj.code && obj.message) {
            throw new Error(obj.message)
        }

        if (obj != null && obj['DataItems'] != null && obj['TotalRowCount'] != null) {
            let d: any = {};
            let keys = Object.keys(data);
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                let k = (key as string)[0].toLowerCase() + (key as string).substr(1);
                d[k] = obj[key];
            }

            data = d;
        }

        this.travelJSON(data);
        return data;
    }

    /**
     * 遍历 JSON 对象各个字段，将日期字符串转换为 Date 对象
     * @param obj 要转换的 JSON 对象
     */
    private travelJSON(obj: any) {

        if (typeof obj === 'string' && this.isDateString(obj)) {
            return new Date(obj);
        }
        else if (typeof obj === 'string') {
            return obj;
        }
        var stack = new Array();
        stack.push(obj);
        while (stack.length > 0) {
            var item = stack.pop();
            for (var key in item) {
                var value = item[key];
                if (value == null)
                    continue;

                if (value instanceof Array) {
                    for (var i = 0; i < value.length; i++) {
                        stack.push(value[i]);
                    }
                    continue;
                }
                if (typeof value == 'object') {
                    stack.push(value);
                    continue;
                }
                if (typeof value == 'string' && this.isDateString(value)) {
                    item[key] = new Date(value);
                }
            }
        }
        return obj;
    }

    private isDateString(text: string): boolean {
        const datePattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
        const datePattern1 = /\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}/;
        return text.match(datePattern) != null || text.match(datePattern1) != null
    }
}
