import React from 'react'
import useCounter from '../J_hooks/useCounter'

function CounterOne() {
	const [count, increment, decrement, reset] = useCounter(0, 1) 
    //useCounter le return gareko array lai destructuring gareko

	return (
		<div>
			<h2>Count = {count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default CounterOne