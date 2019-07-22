import { Service } from "./service";
import { DataSourceSelectArguments, DataSourceSelectResult } from "../models";
/** 图片服务，实现图片的上传，获取 */
export declare class ImageService extends Service {
    static baseUrl: string;
    protected url(path: string): string;
    /** 获取图片的 URL
     * @param id 图片的 ID
     * @param width 图片的宽度，如果不指定则为实际图片的宽度
     * @param height 图片的高度，如果不指定则为实际图片的高度
     */
    imageSource(id: string, width?: number, height?: number): string;
    private generateImageBase64;
    private getImageSize;
    /**
     * 对图片进行缩放
     * @param imageBase64 图片 base64 格式数据
     * @param width 目标图片的宽度
     * @param height 目标图片的高度
     */
    resize(imageBase64: string, width: number, height: number): Promise<string>;
    list(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<{
        id: string;
        with: number;
        height: number;
    }>>;
    /**
     * 上传图片
     * @param imageBase64 图片的 base64 数据
     */
    upload(imageBase64: string): Promise<{
        id: string;
    }>;
    /**
     *
     * @param id 删除图片
     */
    remove(id: string): Promise<{}>;
}
export declare type CanvasDraw = (ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) => void;
export declare type DrawOption = {
    fontSize?: number;
    bgColor?: string;
    textColor?: string;
};
