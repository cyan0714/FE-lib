$(function () {
    load();
    $("#search").on("keydown", function (event) {
        if (event.keyCode === 13) {
            var local = getDate();
            local.push({ title: $(this).val(), done: false });
            saveDate(local);
            load();
        }
    });

    //读取本地存储的数据
    function getDate() {
        var date = localStorage.getItem("todolist");
        if (date !== null) {
            return JSON.parse(date);
        } else {
            return [];
        }
    }
    //存储本地存储的数据
    function saveDate(date) {
        localStorage.setItem("todolist", JSON.stringify(date));
    }
    //加载渲染
    function load() {
        var date = getDate();
        // console.log(date);
        $("ol,ul").empty();
        var doingcount = 0;
        var donecount = 0;
        $.each(date, function (i, n) {
            if (n.done) {
                $("ul").prepend(
                    "<li><input type='checkbox'checked='checked'><p>" +
                        n.title +
                        "</p><a href='javascript:;' id=" +
                        i +
                        ">-</a></li>"
                );
                donecount++;
            } else {
                $("ol").prepend(
                    "<li><input type='checkbox'><p>" +
                        n.title +
                        "</p><a href='javascript:;' id=" +
                        i +
                        ">-</a></li>"
                );
                doingcount++;
            }
        });
        $("#doingcount").text(doingcount);
        $("#donecount").text(donecount);
    }
    //删除模块
    $("ol").on("click", "a", function () {
        //为什么 li 不行，要 ol
        var date = getDate();
        var index = $(this).attr("id");
        date.splice(index, 1);
        saveDate(date);
        load();
    });
    //切换模块
    $("ol,ul").on("click", "input", function () {
        var date = getDate();
        var index = $(this).siblings("a").attr("id");
        date[index].done = $(this).prop("checked");
        saveDate(date);
        load();
    });
});
