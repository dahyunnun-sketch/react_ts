
// 유니언(Union) 타입 - 여러 타입 중 하나를 선택
type MemberRole = "user" | "admin"

// 객체 정의
type User = {
    id: number,
    name: string, // 필수 속성
    age?: number  // 선택 속성
    role: MemberRole  // 필수
}

// 객체 생성
const user1: User = {id:1, name: "우여웅", role: "admin"}

// 출력
console.log(`회원1 - ID: ${user1.id}, 이름: ${user1.name}
                , 권한: ${user1.role}`);

// 객체 생성2
const user2: User = {id:2, name: "이다현", role: "user"}
console.log(`회원2 - ID: ${user2.id}, 이름: ${user2.name}
                , 권한: ${user2.role}`);
