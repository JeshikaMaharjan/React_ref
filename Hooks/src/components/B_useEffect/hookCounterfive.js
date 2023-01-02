
import React ,{useState, useEffect} from "react";

function HookCounterFive(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `You clicked ${count} times `
    },[count])
    // here count is passed as second argument for conditional use of useEffect.
    // count ko value change vayo vane matra useEffect ko kaam garne.
    // change vaxaina vane title change garirakhnu pardaina 
   
    return(
        <div>
            <input type= 'text' value ={name} onChange = { e =>setName(e.target.value)}/>
            <button onClick={
                () => 
                    setCount(count + 1)
                }> Click {count} times
            </button>
        </div>
    )
}
export default HookCounterFive