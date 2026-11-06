"use strict";
// match(정규표현식) 함수 사용 - 표현식 테스트
// 문자열이 처음부터 패턴이 맞는지 검사
const m = "korea".match(/^[a-z]+/);
console.log(m?.[0]);
