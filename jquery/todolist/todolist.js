$(function () {
    load();
    $("input").on("keydown", function (event) {
        if (event.keyCode === 13) {
            var local = getDate();
            local.push({ title: $(this).val(), done: false });
            saveDate(local);
            load();
        }
    });

    function getDate() {
        var date = localStorage.getItem("todolist");
        if (date !== null) {
            return JSON.parse(date);
        } else {
            return [];
        }
    }
    function saveDate(date) {
        localStorage.setItem("todolist", JSON.stringify(date));
    }
    function load() {
        var doingcount = 0;
        var donecount = 0;
        var date = getDate();
        $("ol,ul").empty();
        $.each(date, function (i, n) {
            if (n.done) {
                $("ul").prepend(
                    "<li><input type='checkbox'checked='checked'>" +
                        n.title +
                        "<a href='javascript:;' id=" +
                        i +
                        ">-</a></li>"
                );
                donecount++;
            } else {
                $("ol").prepend(
                    "<li><input type='checkbox'>" +
                        n.title +
                        "<a href='javascript:;' id=" +
                        i +
                        ">-</a></li>"
                );
                doingcount++;
            }
            $("#doingcount").text(doingcount);
            $("#donecount").text(donecount);
        });
    }
    $("ol,ul").on("click", "a", function () {
        var date = getDate();
        var index = $(this).attr("id");
        date.splice(index, 1);
        saveDate(date);
        load();
    });
    $("ul,ol").on("click", "input", function () {
        var date = getDate();
        var index = $(this).siblings("a").attr("id");
        date[index].done = $(this).prop("checked");
        saveDate(date);
        load();
    });
});
