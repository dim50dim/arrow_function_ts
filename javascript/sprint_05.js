"use strict";
const f01 = (a, b) => a * b;
document.querySelector('.b-1').addEventListener('click', () => {
    document.querySelector('.out-1').textContent = String(f01(3, 4));
});
const f02 = (str) => str.trim().toLowerCase();
document.querySelector('.b-2').addEventListener('click', () => {
    const result = f02('  Vladimir Harkonnen  ');
    document.querySelector('.out-2').textContent = result;
    console.log(result);
});
const f03 = (str) => {
    if (str)
        return str.trim().toLowerCase();
    return '';
};
document.querySelector('.b-3').addEventListener('click', () => {
    const result = f03(' Paul Atreides ');
    document.querySelector('.out-3').textContent = result;
    console.log(result);
    console.log(result.length);
});
const f04 = (num) => num % 2 === 0;
document.querySelector('.b-4').addEventListener('click', () => {
    document.querySelector('.out-4').textContent = String(f04(3));
});
const f05 = (num) => {
    let input = document.querySelector(num);
    return input.value;
};
document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').textContent = String(f05('.i-5'));
});
const f06 = () => {
    let input1 = document.querySelector('.i-61');
    let input2 = document.querySelector('.i-62');
    let str1 = input1.value;
    let str2 = input2.value;
    let maxString = str1.length >= str2.length ? str1 : str2;
    document.querySelector('.out-6').textContent = maxString;
};
document.querySelector('.b-6').addEventListener('click', f06);
const f07 = (email) => {
    if (email.includes('@'))
        return email.trim().toLowerCase();
    return false;
};
document.querySelector('.b-7').addEventListener('click', () => {
    document.querySelector('.out-7').textContent = String(f07(' glossuRaBBan@mail.ru '));
});
const f08 = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
document.querySelector('.b-8').addEventListener('click', () => {
    document.querySelector('.out-8').textContent = String(f08(100, 110));
});
const f09 = () => {
    const randomNum = () => Math.floor(Math.random() * 256);
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
};
document.querySelector('.b-9').addEventListener('click', () => {
    const color = f09();
    document.querySelector('.out-9').style.backgroundColor = color;
    document.querySelector('.out-9').textContent = color;
});
let angle = 0;
const f10 = () => {
    angle += 30;
    let out = document.querySelector('.out-10');
    out.style.transform = `rotate(${angle}deg)`;
};
document.querySelector('.b-10').addEventListener('click', f10);
//# sourceMappingURL=sprint_05.js.map