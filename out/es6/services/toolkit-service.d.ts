import { Service } from "./service";
export declare class ToolkitService extends Service {
    constructor();
    protected url(path: string): string;
    uniqueNumber(): Promise<string | null>;
}
