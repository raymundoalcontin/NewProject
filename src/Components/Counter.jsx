import {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    return(
        <>
        <div>Current count: {count}</div>
        <button  className ="bg-gray-200 border-2 "onClick = {() =>setCount(count+1)} >Add 1</button>
        </>
    )   
}

export default Counter