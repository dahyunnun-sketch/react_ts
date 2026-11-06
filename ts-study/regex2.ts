

// 1. 휴대폰 번호 검사 (010-1234-5678 형식)
const phoneRegex = /^010-\d{3,4}-\d{4}$/;
console.log("1. 휴대폰 번호 검사");
console.log(phoneRegex.test("010-1234-5678")); // true
console.log(phoneRegex.test("02-123-4567")); // false

// 2. 아이디 검사 (영문 소문자 또는 숫자, 4~12자)
const userIdRegex = /^$/




// 4. 이메일 검사
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("4. 이메일 검사");
console.log(emailRegex.test("hong@naver.com")); // true
console.log(emailRegex.test("hong@naver")); // false