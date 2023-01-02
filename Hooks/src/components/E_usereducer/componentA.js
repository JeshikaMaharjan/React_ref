import React, {useContext} from 'react'
import { CountContext } from '../../App2';

function ComponentA() {
  const countContext = useContext(CountContext) //CountContext declared in App2.js lai consume gareko
  // countContext is an object containing values countState and countDispatch so use dot operator
  return (
    <div>
      Component A {countContext.countState} 
      {/* Here countState gives value of count */}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA