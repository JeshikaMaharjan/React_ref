import React, { useState } from "react";

function HookCounterTwo(){
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i<5; i++){
            setCount(prevCount => prevCount + 1) //use this
            // setCount(count + 1) //instead of this
            // agadi ko state use garera new state banaunu xa vaye always pass a function
            // and pass previous state as argument 
        }
    }
    return(
        <div>
            Count : {count}
            <button onClick={()=>setCount(initialCount)}>RESET</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>INCREMENT</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>DECREMENT</button>
            <button onClick={incrementFive}>INCREMENT BY 5</button>
        </div>
    )
}
export default HookCounterTwo