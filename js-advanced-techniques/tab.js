var that;

class Tab {

    constructor() {
        //获取元素
        that = this;
        this.box = document.querySelector('.box');
        this.lis = document.querySelectorAll('li');
        this.sections = document.querySelectorAll('section');
        this.add = document.querySelector('.add_nav');
        this.ul = document.querySelector('.nav_left');
        this.content = document.querySelector('.content');
        this.init();
    }
    init() {
            //初始化让相关元素绑定事件
            this.updateNode(); //将新添加的元素获取过来
            this.add.onclick = this.addTab;
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
                // console.log(this.index);
                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;
            }
        }
        //1.切换功能
    toggleTab() {
        //this.clearClass  不能使用，因为这里的 this 指向的是 lis 中的某个 li，但是 li 中没有这个方法，所以要用 that
        that.clearClass();
        this.className = 'liactive'; //从第 22 行可知这里的 this 指向的是 lis 中的某个 li
        that.sections[this.index].className = 'sectionactive'; //这里用 that 而不用 this 的原因是因为 li 中没有 sectons,只有实例化对象里的 this 才有，所以在外部设置了 that 这个变量，并且让他等于 实例化对象的 this
    }
    updateNode() {
        this.lis = document.querySelectorAll('li');
        this.sections = document.querySelectorAll('section');
        this.remove = document.querySelectorAll('.close_nav');
        this.spans = document.querySelectorAll('.nav_left li span:first-child')
    }
    clearClass() {
            for (var i = 0; i < this.lis.length; i++) { //这里的 this 指向的是 toggleTab 里 that.clearClass 中的 that,而 that 又等于实例化对象的 this ，所以是正确的
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        //2.添加功能
    addTab() {
            //创建li 和 section 元素
            that.clearClass(); //先将其他 lis 和 sections 中的 className 删除
            var random = Math.random();
            //创建 li 元素
            var li = '<li class="liactive"> 新模块 <span class="close_nav">x</span></li>';
            //把 li 这个元素放到对应父元素里面，相当于 appendChild
            that.ul.insertAdjacentHTML('beforeend', li);
            var section = '<section class="sectionactive">模块内容' + random + '</section>';
            that.content.insertAdjacentHTML('beforeend', section);
            that.init(); //创建好 li 和 section 元素后再初始化一次
        }
        //3.删除功能
    removeTab(e) {
            e.stopPropagation(); //阻止冒泡事件 防止触发 li 的切换点击事件
            var index = this.parentNode.index; //this 指向的是 remove[i]
            // console.log(index);
            that.lis[index].remove(); //remove() 方法可以直接删除指定的元素
            that.sections[index].remove();
            that.init();

            
            //如果删除的不是选定状态的li 的时候，原来的选定状态li保持不变
            if (document.querySelector('.liactive')) return;


            //当删除了选中状态的这个 li 时，让他的前一个 li 处于选定状态
            index--;
            // that.lis[index].click();
            //手动调用点击事件，不需要鼠标触发
            that.lis[index] && that.lis[index].click();


            //如果删除的是选中状态的这个 li，并且这个 li 的 index 为 0,，让他的后一个 li 处于选定状态
            //?
        }
        // 4.修改功能
    editTab() {
        var str = this.innerHTML;
        //双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // alert(11);
        this.innerHTML = '<input type="text"/>';

        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function() {
                this.parentNode.innerHTML = this.value;
            }
            //按下回车也可以把文本框里面的值给span
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                //手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur();
            }
        }

    }
}
var tab = new Tab;