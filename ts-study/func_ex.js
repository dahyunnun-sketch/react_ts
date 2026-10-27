"use strict";
// 이름 있는 함수
// function sub(x: number, y: number){
//     return x - y;
// }
// 화살표 함수
// (매개변수 : 자료형) : return 자료형(return없으면 void)
const sub = (x, y) => {
    return x - y;
};
const result = sub(5, 10); // 변환값을 저장
console.log(result);
// 변환 자료형이 없는 함수 : void
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("Dahyun");
