window.addEventListener("load", function () {
    first();
    function first() {
        //1.获取元素
        var arrow_l = document.querySelector(".arrow_l");
        var arrow_r = document.querySelector(".arrow_r");
        var focus = document.querySelector(".focus");
        var focusWidth = focus.offsetWidth;

        //2.鼠标经过 focus 就显示隐藏左右按钮
        focus.addEventListener("mouseenter", function () {
            arrow_l.style.display = "block";
            arrow_r.style.display = "block";
            clearInterval(timer);
            timer = null;
        });
        focus.addEventListener("mouseleave", function () {
            arrow_l.style.display = "none";
            arrow_r.style.display = "none";
            timer = setInterval(function () {
                arrow_r.click();
            }, 2000);
        });

        //3.动态生成小圆圈
        var turn = document.querySelector(".turn");
        var circle = document.querySelector(".circle");
        // console.log(turn.children.length);
        for (var i = 0; i < turn.children.length; i++) {
            //创建一个 li
            var li = document.createElement("li");
            //将 li 加入类名为 circle 这个 ul中
            circle.appendChild(li);
            //给 li 设置一个属性
            li.setAttribute("index", i);
            //4.小圆圈的排他思想
            li.addEventListener("click", function () {
                for (var i = 0; i < circle.children.length; i++) {
                    circle.children[i].className = "";
                }
                this.className = "current";
                // 5.点击小圆圈，移动图片 移动的是名为 turn 的 ul

                var index = this.getAttribute("index");
                // 当点击了某个 li ，就要把这个 li 的 index 给 num
                num = index;
                // 当点击了某个 li ，就要把这个 li 的 index 给 grow
                grow = index;
                animate(turn, -index * focusWidth);
            });
        }
        // 把 circle 的第一个孩子 li 命名为 current
        circle.children[0].className = "current";
        //6.为了让图片张数和小圆点个数相同，不要在index.HTML添加复制的图片，而是在循环生成小圆点外克隆第一张图片，然后将其放在 turn 的后面
        var first = turn.children[0].cloneNode(true);
        turn.appendChild(first);
        //7.点击左右箭头事件
        var num = 0;
        // grow 控制小圆圈的个数
        var grow = 0;
        //节流阀
        var flag = true;
        arrow_r.addEventListener("click", function () {
            if (flag) {
                flag = false;
                if (num == turn.children.length - 1) {
                    turn.style.left = 0;
                    num = 0;
                }
                num++;
                animate(turn, -num * focusWidth, function () {
                    flag = true;
                });
                //8 点击右侧按钮，小圆圈跟着一起变化，可以再声明一个变量控制小圆圈的播放
                grow++;
                if (grow == circle.children.length) {
                    grow = 0;
                }
                circleChange();
            }
        });
        arrow_l.addEventListener("click", function () {
            if (flag) {
                flag = false;
                if (num == 0) {
                    turn.style.left = -(turn.children.length - 1) * focusWidth + "px";
                    num = turn.children.length - 1;
                }
                num--;
                animate(turn, -num * focusWidth, function () {
                    flag = true;
                });
                //8 点击右侧按钮，小圆圈跟着一起变化，可以再声明一个变量控制小圆圈的播放
                grow--;
                if (grow < 0) {
                    grow = circle.children.length - 1;
                }
                circleChange();
            }
        });

        function circleChange() {
            //先清除其余小圆圈的 current 类名
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = "";
            }
            //留下当前的小圆圈的 current 类名
            circle.children[grow].className = "current";
        }
        //9 自动轮播
        var timer = setInterval(function () {
            arrow_r.click();
        }, 5000);
    }

    var recomTop = $(".recom_hd").offset().top;
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= recomTop) {
            $(".elevator_nav").fadeIn();
        } else {
            $(".elevator_nav").fadeOut();
        }
    }
    var flag = true;
    $(window).scroll(function () {
        toggleTool();
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    $(".elevator_nav li").eq(i).addClass("current").siblings().removeClass();
                }
            });
        }
    });
    $(".elevator_nav li").click(function () {
        flag = false;
        var li_index = $(this).index();
        var distance = $(".floor .w").eq($(this).index()).offset().top;
        $("body,html")
            .stop()
            .animate(
                {
                    scrollTop: distance,
                },
                function () {
                    flag = true;
                }
            );
        $(this).addClass("current").siblings().removeClass();
    });
});
