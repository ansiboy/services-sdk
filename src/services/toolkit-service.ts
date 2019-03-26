import { Service } from "./service";
import { settings } from "../settings";
import { errors } from "../errors";

export class ToolkitService extends Service {
    constructor() {
        super()
    }

    private url(path: string) {
        if (!path) throw new Error('Argument path cannt be null or empty.')

        if (!settings.toolServiceUrl)
            throw errors.serviceUrlCanntNull('imageService')

        return `${settings.toolServiceUrl}/${path}`;
    }

    uniqueNumber() {
        let url = this.url('unique-number')
        return this.getByJson<string>(url)
    }
}