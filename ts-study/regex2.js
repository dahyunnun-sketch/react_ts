"use strict";
// 1. 휴대폰 번호 검사 (010-1234-5678 형식)
const phoneRegex = /^010-\d{3,4}-\d{4}$/;
console.log("1. 휴대폰 번호 검사");
console.log(phoneRegex.test("010-1234-5678")); // true
console.log(phoneRegex.test("02-123-4567")); // false
// 4. 이메일 검사
const emailRegex = /^  $/;
