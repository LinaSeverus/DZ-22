'use strict';



function palindrome(num, count = 0) {

    let str = num.toString();                           //преобразуем переданное число num в строку
    let strReverse = str.split("").reverse().join("");  //Переворачиваем строку str. Через split - разбиваем строку на массив.
    //Через reverse переворачиваем и join - снова объединяем в строку

    if (str === strReverse) {                           //Если полученное число(строка) === перевернутому записываем в объект и выходим
        return {
            result: num,
            steps: count,
        };
    }
    return palindrome(num + +strReverse, ++count);      // Если не равно, то преобразуем strReverse в число и запускаем рекурсию со счетчиком + 1
}
console.log(palindrome(549));