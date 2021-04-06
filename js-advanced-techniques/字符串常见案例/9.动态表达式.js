var operators = {
    "+": {
        level: 1,
        compute: function (a, b) {
            return a + b;
        },
    },
    "-": {
        level: 1,
        compute: function (a, b) {
            return a - b;
        },
    },
    "*": {
        level: 2,
        compute: function (a, b) {
            return a * b;
        },
    },
    "/": {
        level: 2,
        compute: function (a, b) {
            return a / b;
        },
    },
    "%": {
        level: 2,
        compute: function (a, b) {
            return a % b;
        },
    },
};
/**
 * 四则运算扫描器
 * @param {String} s
 */
function Scanner(s) {
    this.s = s.replace(/\s/g, "");
    this.numberExp = /^\d+(\.\d+)?/;
    this.opExp = /^[\(\)\+\-\*\%\/]/;
}
/**
 * @param {String} s
 * @returns {Boolean}
 */
function compute(s) {}
