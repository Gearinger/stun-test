/*
 * @Author: Gearinger 50980099+Gearinger@users.noreply.github.com
 * @Date: 2022-06-15 19:05:50
 * @LastEditors: Gearinger 50980099+Gearinger@users.noreply.github.com
 * @LastEditTime: 2022-06-16 08:29:55
 * @FilePath: \stun-test\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const stun = require('stun');

stun.request('localhost:3478').then(res=>{
    console.log(res);
    console.log('your ip', res.getXorAddress().address);
});
