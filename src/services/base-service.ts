import { Callback1, Callbacks } from "../extends";

interface ServiceError extends Error {
    method?: string
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
        textObject = JSON.parse(text);
    }
    else {
        textObject = text;
    }

    if (response.status >= 300) {
        let err: ServiceError = new Error();
        err.method = options.method;
        err.name = `${response.status}`;
        err.message = isJSONContextType ? (textObject.Message || textObject.message) : textObject;
        err.message = err.message || response.statusText;

        throw err
    }

    return textObject;
}

function callAjax<T>(
    url: string, options: RequestInit,
    service: Service, error: Callback1<Service, Error>
) {
    return new Promise<T>((reslove, reject) => {
        let timeId: number;
        if (options.method == 'get') {
            timeId = setTimeout(() => {
                let err = new Error(); //new AjaxError(options.method);
                err.name = 'timeout';
                err.message = '网络连接超时';
                reject(err);
                error.fire(service, err);
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
                error.fire(service, err);

                if (timeId)
                    clearTimeout(timeId);
            });

    })
}

export interface ServiceConstructor<T> {
    new(): T
}

export type AjaxOptions = { data?: any, headers?: { [key: string]: string }, method?: string };

export class Service {

    error = Callbacks<Service, Error>();

    static settings = {
        ajaxTimeout: 30,
    }

    async ajax<T>(url: string, options?: AjaxOptions): Promise<T | null> {
        // options = options || {} as any
        if (options === undefined)
            options = {}

        let data = options.data;
        let method = options.method;
        let headers = options.headers || {};
        let body: any

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

        let r = await callAjax<T>(url, { headers: headers as any, body, method }, this, this.error);
        if (r == null)
            return null

        let obj = r as any
        if (obj.code && obj.message) {
            throw new Error(obj.message)
        }

        return r
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