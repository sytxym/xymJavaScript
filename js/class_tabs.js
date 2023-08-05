

class RenderTabs{
    constructor(select,type){
        var container = document.querySelector(select)
        this.oheaderItems = container.querySelectorAll(".header li")
        this.oboxItems = container.querySelectorAll(".box li")
        this.type=type
        // console.log(this.oheaderItems, this.oboxItems)
        
        this.change()
    }

    change() {
        for (let i = 0; i < this.oheaderItems.length; i++) {
    
            this.oheaderItems[i].addEventListener(this.type,()=> {
                var index = i
                console.log(index)
                //样式全部移除
                for (let j = 0; j < this.oheaderItems.length; j++) {
    
                    var item = this.oheaderItems[j]
                    item.classList.remove("active")
    
                    var boxItem =this.oboxItems[j]
                    boxItem.classList.remove("active")
                }
    
                //再添加选中激活样式
                this.oheaderItems[index].classList.add("active")
                this.oboxItems[index].classList.add("active")
    
            })
        }
    }
}

export default RenderTabs