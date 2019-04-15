import { Service } from "./service";
import { errors } from "../errors";

/** 图片服务，实现图片的上传，获取 */
export class ImageService extends Service {

    static baseUrl: string

    protected url(path: string) {
        if (!ImageService.baseUrl)
            throw errors.serviceUrlCanntNull('imageService')

        return `${ImageService.baseUrl}/${path}`;
    }

    /** 获取图片的 URL
     * @param id 图片的 ID
     * @param width 图片的宽度，如果不指定则为实际图片的宽度
     * @param height 图片的高度，如果不指定则为实际图片的高度
     */
    imageSource(id: string, width?: number, height?: number) {
        if (!id) throw errors.argumentNull('id')

        let isBase64 = id.startsWith('data:image')
        if (isBase64) {
            return id;
        }
        let url = this.url('image')
        url = `${url}?id=${id}`;
        if (width != null)
            url = url + `&width=${width}`

        if (height != null)
            url = url + `&height=${height}`

        return url
    }

    private getImageSize(imageBase64: string) {
        if (!imageBase64) throw errors.argumentNull('imageBase64')
        return new Promise<{ width: number, height: number }>((resolve, reject) => {
            var i = new Image();
            i.onload = function () {
                resolve({ width: i.width, height: i.height })
            };

            i.src = imageBase64;
        })
    }

    /**
     * 对图片进行缩放
     * @param imageBase64 图片 base64 格式数据
     * @param width 目标图片的宽度
     * @param height 目标图片的高度
     */
    async resize(imageBase64: string, width: number, height: number): Promise<string> {

        if (!imageBase64) throw errors.argumentNull('imageBase64')
        if (!width) throw errors.argumentNull('width')
        if (!height) throw errors.argumentNull('height')

        var canvas = document.createElement('canvas') //.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        canvas.width = width
        canvas.height = height

        return await new Promise<string>((resolve, reject) => {
            var img = new Image()
            img.src = imageBase64
            img.onload = function () {
                // width = img.width
                // height = img.height
                if (ctx == null)
                    throw 'get canvas context fail'

                ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
                resolve(canvas.toDataURL())
            }
        })
    }

    /**
     * 上传图片
     * @param imageBase64 图片的 base64 数据
     */
    async upload(imageBase64: string) {
        if (!imageBase64) throw errors.argumentNull('imageBase64')

        let url = this.url('upload')

        let imageSize = await this.getImageSize(imageBase64)
        let maxWidth = 800
        let maxHeight = 800
        if (imageSize.width > maxWidth) {// || imageSize.height > maxHeight
            let height = imageSize.height / imageSize.width * maxWidth
            imageBase64 = await this.resize(imageBase64, maxWidth, height)
        }
        else if (imageSize.height > maxHeight) {
            let width = imageSize.width / imageSize.height * maxHeight
            imageBase64 = await this.resize(imageBase64, width, maxHeight)
        }

        return this.postByJson<{ id: string }>(url, { image: imageBase64 })
    }

    /**
     * 
     * @param id 删除图片
     */
    async remove(id: string) {
        if (!id) throw errors.argumentNull('id')

        let url = this.url("remove")
        return this.postByJson(url, { id })
    }
}