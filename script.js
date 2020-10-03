let num = +prompt('Введите максимальное количество ступенек');
let str1 = prompt('Введите символ');
let str2 = prompt('Введите конечный символ');
let x = ""
for (let i = 0; i < num; i++) {
    if (i == 0) {
        console.log(str2);
    } else {
        x = x + str1;
        console.log(x + str2);
    }
}