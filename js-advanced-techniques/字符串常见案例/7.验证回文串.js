/**
 *
 * @param {Array} str
 */
function ischar(char) {
    return (
        (char >= "0" && char <= "9") || (char >= "a" && char <= "z") || (char >= "A" && char <= "Z")
    );
}
function isPalindrome(str) {
    if (str.length === 0) {
        return true;
    }
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (!ischar(str[left].toLowerCase())) {
            left++;
        } else if (!ischar(str[right].toLowerCase())) {
            right--;
        } else if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
}
console.log(isPalindrome("bana1naB"));
console.log(isPalindrome("bananaB"));
console.log(isPalindrome("b an an aB"));
