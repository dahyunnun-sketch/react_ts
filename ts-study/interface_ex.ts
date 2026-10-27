// 객체 정의
interface Mamber{
    name: string, // 필수 속성
    age?: number  // 선택 속성
}

// 객체 생성
const member1: Mamber = {
    name: '이강',
    age: 21
}
const member2: Mamber = {
    name: '이환'
}

// const member3: Member = {age: 33}

// 출력
console.log(`이름: ${member1.name}, 나이: ${member1.age}`);
console.log(`이름: ${member2.name}`);
