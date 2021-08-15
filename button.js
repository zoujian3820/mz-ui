/*
 * @Author: mrzou
 * @Date: 2021-08-14 18:42:17
 * @LastEditors: mrzou
 * @LastEditTime: 2021-08-14 19:29:57
 * @Description: file content
 */
const MButton = {
    install(app) {
        app.component('m-button', {
            template: `
                <button class="m-button">hi</button>
            `
        })
    }
}