function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        //步长值写到定时器里
        //把步长值改为整数 不要出现小数的问题
        // var step=Math.ceil((target-obj.offsetLeft)/10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft + step + 'px';
        if (obj.offsetLeft == target) { //也可以改成大于等于，但是没必要
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }

    }, 15);
}