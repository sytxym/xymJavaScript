import { A_YILAI } from "./a.js"
import { B_YILAI } from "./b.js"





function C() {
    A_YILAI()
    B_YILAI()
    console.log("C1 布局")
}

// export {
//     C
// }

//一个函数导出可以写成
export default C