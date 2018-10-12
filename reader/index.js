/**
 *****************************************
 * Created by lifx
 * Created on 2018-10-12 09:53:17
 *****************************************
 */
'use strict';


/**
 *****************************************
 * 文件处理
 *****************************************
 */
export default class File {

    /* 初始化数据 */
    constructor(file) {
        this.$file = file;
    }

    /* 生成【url】 */
    toUrl() {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();

            // 添加监听
            reader.onload = e => resolve(e.target.result);
            reader.onerror = reject;

            // 读取文件
            reader.readAsDataURL(this.$file);
        });
    }
}
