import {useState} from 'react'
function Counter2(){
    const [count2,setCount2] = useState(0);
    return(
        <>
        <div>Counter 2 value: {count2}</div>
        <button className="bg-gray-200 border-2" onClick={() => setCount2(count2+2)}>ADD 2</button>
        </>
    )
}

export default Counter2