function A1(){
    console.log("A1 布局")
}

function A2(){
    console.log("A2 布局")
}

//和b.js重名函数
function test(){
    console.log("A1 test")
}

//公共函数 需要私密
function my_common(){
    console.log("公共函数，私密函数")
}

//依赖方法A
function A_YILAI(){
    console.log("依赖方法A")
}

export {A1,A2,test,A_YILAI}