// 객체 정의(Props)

// type GreetProps = {
//     name: string,
//     age: number
// }
interface GreetProps{
    name: string,
    age: number
    doClick: () => void
}

const Greet2 = ({name, age, doClick}: GreetProps) => {
    
    return(
        <div>
            <h2>이름: {name}</h2>
            <h2>나이: {age}</h2>
            <button onClick={doClick}>클릭</button>
        </div>
    )
}

export default Greet2;