import { settings } from '../settings';
import { Service as ChiTuSerivce, AjaxOptions } from './chitu-service'
import { ValueStore } from './chitu-extends';

export interface LoginInfo {
    token: string,
    userId: string,
}

export class Service extends ChiTuSerivce {
    static readonly LoginInfoStorageName = 'app-login-info'
    static loginInfo = new ValueStore<LoginInfo | null>(Service.getStorageLoginInfo())

    constructor() {
        super();
    }

    private static getStorageLoginInfo(): LoginInfo | null {
        let loginInfoSerialString = this.getCookie(Service.LoginInfoStorageName)
        if (!loginInfoSerialString)
            return null

        try {
            let loginInfo = JSON.parse(loginInfoSerialString)
            return loginInfo
        }
        catch (e) {
            console.error(e)
            console.log(loginInfoSerialString)
            return null
        }
    }

    protected static setStorageLoginInfo(value: LoginInfo | null) {
        if (value == null) {
            this.removeCookie(Service.LoginInfoStorageName)
            return
        }

        this.setCookie(Service.LoginInfoStorageName, JSON.stringify(value), 1000)
    }

    private static setCookie(name: string, value: string, days: number) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    private static getCookie(name: string) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    private static removeCookie(name: string) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }

    async ajax<T>(url: string, options?: AjaxOptions): Promise<T | null> {
        options = options || {}
        options.headers = options.headers || {}
        if (Service.loginInfo.value)
            options.headers['token'] = Service.loginInfo.value.token

        if (settings.applicationId)
            options.headers['application-id'] = typeof settings.applicationId == 'function' ? settings.applicationId() : settings.applicationId

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

    public getByJson<T>(url: string, data?: any) {
        if (data && Object.getOwnPropertyNames(data).length > 0)
            url = `${url}?${JSON.stringify(data)}`;

        let headers = { "content-type": 'application/json' };
        return this.ajax<T>(url, { headers, method: 'get' })
    }

    protected putByJson<T>(url: string, data?: any) {
        let headers = { "content-type": 'application/json' };
        return this.ajax<T>(url, { headers, data, method: 'put' });
    }

    protected postByJson<T>(url: string, data?: any) {
        let headers = { "content-type": 'application/json' };
        return this.ajax<T>(url, { headers, data, method: 'post' });
    }

    protected deleteByJson<T>(url: string, data: any) {
        let headers = { "content-type": 'application/json' };
        return this.ajax<T>(url, { headers, data, method: 'delete' });
    }


    protected get<T>(url: string, data?: any) {
        data = data || {};
        let params = "";
        for (let key in data) {
            if (data[key] == null)
                continue

            params = params ? `${params}&${key}=${data[key]}` : `${key}=${data[key]}`;
        }

        if (params) {
            url = `${url}?${params}`;
        }

        return this.ajax<T>(url, { method: 'get' })
    }

    protected put<T>(url: string, data?: any) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax<T>(url, { headers, data, method: 'put' });
    }

    protected post<T>(url: string, data?: any) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax<T>(url, { headers, data, method: 'post', });
    }

    protected delete<T>(url: string, data: any) {
        let headers = { "content-type": 'application/x-www-form-urlencoded' };
        return this.ajax<T>(url, { headers, data, method: 'delete' });
    }
}
