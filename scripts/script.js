'use strict';



function palindrome(num, count = 0) {

    let str = num.toString();
    let strReverse = str.split("").reverse().join("");

    if (str === strReverse) {
        return {
            result: num,
            steps: count,
        };
    }
    return palindrome(num + +strReverse, ++count);
}
console.log(palindrome(549));