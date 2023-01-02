// Hook based counter
import React ,{useState} from "react";

function HookCounter(){
    const [count, setCount] = useState(0)
    // Here useState takes 0(initial value of count) as argument and returns 
    // current value of state property(i.e count = 0)[basically count initialize gareko ho] 
    // and a method(setCount).
    return(
        <div>
            <button onClick={
                () => 
                    setCount(count + 1)
                }> Count {count}
            </button>
        </div>
    )
}
export default HookCounter