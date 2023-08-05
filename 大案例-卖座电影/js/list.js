

let current = 0 //当前页码
var isLoading = false //是否正在加载和请求，防止多次请求
var total=0 //总条数

getlist()//获取数据

async function getlist() {
    current++
    var res=await fetch(`http://localhost:3000/goods?_page=${current}&_limit=5`)
    total=res.headers.get("X-Total-Count")
    console.log(res.headers.get("X-Total-Count"))//后台接口数据总条数
    var list = await res.json()
    console.log(list)
    renderHtml(list)
}


//渲染列表
function renderHtml(arr) {
    for (let i = 0; i < arr.length; i++) {
        var oli = document.createElement("li")
        oli.innerHTML = 
        `<li>
        <img src="http://localhost:3000${arr[i].proter}" alt="">
        <h3>${arr[i].title}</h3>
        </li>`

        oli.onclick=()=>{
            location.href="detail.html?id="+arr[i].id
        }

        list.appendChild(oli)
    }
}

//监听滚动
window.onscroll = function () {

    // console.log(list.children.length)
    if(list.children.length===Number.parseInt(total)){
        return
    }

    var listHeight = list.offsetHeight //获取这个元素的高度
    var listTop = list.offsetTop  //获取这个元素的偏移量
    // listHeight+listTop   //整个页面的高度 或者就是可滚动的高度
    console.log(listHeight, listTop)

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop//滚动的距离

    var windowHeight = document.documentElement.clientHeight //可视窗口的高度


    if (isLoading) {
        return
    }
    if ((listHeight + listTop) - Math.round(scrollTop + windowHeight) < 50) {
        console.log("快要到底了")
        isLoading = true

        //getlist 加载下一页数据
        getlist().then(res=>{
            isLoading = false//每次请求完，改状态
        })

    }

}
