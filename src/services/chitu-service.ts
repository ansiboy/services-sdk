import { errors } from "../errors";
import { Callbacks } from "./chitu-extends";

export interface ServiceConstructor<T> {
    new(): T
}

export type AjaxOptions = { data?: any, headers?: { [key: string]: string }, method?: string };

export class Service {

    error = Callbacks<Service, Error>();

    static settings = {
        ajaxTimeout: 30,
    }

    ajax<T>(url: string, options?: AjaxOptions): Promise<T | null> {
        // options = options || {} as any
        if (options === undefined)
            options = {}

        let data = options.data;
        let method = options.method;
        let headers = options.headers || {};
        let body: string | URLSearchParams

        if (data != null) {
            let is_json = ((headers['content-type'] || '') as string).indexOf('json') >= 0;
            if (is_json) {
                body = JSON.stringify(data);
            }
            else {
                body = new URLSearchParams();
                for (let key in data) {
                    body.append(key, data[key])
                }
            }
        }

        // return callAjax<T>(url, { headers: headers as any, body, method }, this, this.error);
        return new Promise<T>((reslove, reject) => {
            let options = { headers: headers, body, method }
            let timeId: number;
            if (options == null) throw errors.unexpectedNullValue('options')
            if (method == 'get') {
                timeId = setTimeout(() => {
                    let err = new Error(); //new AjaxError(options.method);
                    err.name = 'timeout';
                    err.message = '网络连接超时';
                    reject(err);
                    this.error.fire(this, err);
                    clearTimeout(timeId);

                }, Service.settings.ajaxTimeout * 1000)
            }

            ajax<T>(url, options)
                .then(data => {
                    reslove(data);
                    if (timeId)
                        clearTimeout(timeId);
                })
                .catch(err => {
                    reject(err);
                    this.error.fire(this, err);

                    if (timeId)
                        clearTimeout(timeId);
                });

        })
    }

    /**
     * 创建服务
     * @param type 服务类型
     */
    createService<T extends Service>(type?: ServiceConstructor<T>): T {
        type = type || Service as any as ServiceConstructor<T>
        let service = new type();
        service.error.add((sender, error) => {
            this.error.fire(service, error)
        })
        return service;
    }

}

async function ajax<T>(url: string, options: RequestInit): Promise<T> {
    let response = await fetch(url, options);

    let responseText = response.text();
    let p: Promise<string>;
    if (typeof responseText == 'string') {
        p = new Promise<string>((reslove, reject) => {
            reslove(responseText);
        })
    }
    else {
        p = responseText as Promise<string>;
    }

    let text = await responseText;
    let textObject;
    let isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;
    if (isJSONContextType) {
        textObject = text ? JSON.parse(text) : null;
    }
    else {
        textObject = text;
    }

    if (response.status >= 300) {
        let err: Error & { method?: string | undefined } = new Error();
        err.method = options.method;
        err.name = `${response.status}`;
        err.message = isJSONContextType ? (textObject.Message || textObject.message) : textObject;
        err.message = err.message || response.statusText;

        throw err
    }

    return textObject;
}