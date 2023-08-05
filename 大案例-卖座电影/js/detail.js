//从列表页面拿id参数

// 1.截取字符串
console.log(location.href.split("=")[0])
var id=new URL(location.href).searchParams.get("id")
console.log(id)


class Detail{
    constructor(id){
        this.id=id
        this.init()
        this.renderHTML()
    }


   async init(){
        //获取数据
        var info= await this.getlist()
        console.log(info)

        //渲染页面
        this.renderHTML(info)
    }

    async getlist(){
       var res=await fetch(`http://localhost:3000/goods/${this.id}`)
       var data=await res.json()
       return data
    }

    renderHTML(info){
        var {title,price,feature,desc} = info //把需要的字段解构出来
        var oh1=document.querySelector("h1")
        var ofeature=document.querySelector(".feature")
        var oprice=document.querySelector(".price")
        var olist=document.querySelector(".list")

        oh1.innerHTML=title
        ofeature.innerHTML=feature
        oprice.innerHTML=`价格 <span style="color:red">￥${price}</span>`

        olist.innerHTML=desc.map(item=>`
            <li>
                <img src="${item}"/>
            </li>
        `).join("")
    }
}

new Detail(id)
