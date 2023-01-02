// simple state and simple action
import React, { useReducer } from 'react'

// define initialState and reducer [which is then passed to useReducer as argument]
const initialState = 0
const reducer = (state, action) => { 
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state //current state without any changes
	}
}

function CounterOne() {
	const [count, dispatch] = useReducer(reducer, initialState)
    // useReducer returns current state and dispatch. 
    // current state is stored in count. 
    // dispatch allows us to execute code corresponding to a particular action. 

	return (
    <div>
      <div>Count = {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button> 
      {/* on dispatching increment reducer function le increment wala case run garxa */}
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
		</div>
	)
}

export default CounterOne