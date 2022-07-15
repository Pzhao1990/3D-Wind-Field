/*
 * @Author: P.Zhao
 * @Company: HT
 * @Date: 2022-07-06 15:56:57
 * @LastEditors: P.Zhao
 * @LastEditTime: 2022-07-12 14:18:26
 * @Description:
 * @FilePath: \3D-Wind-Field\Cesium-3D-Wind\app.js
 */
//prettier-ignore
demo = true
const mode = {
  debug: demo ? false : true
}
debugger
var panel = new Panel()
//prettier-ignore
var wind3D = new Wind3D(
    panel,
    mode
)
