//custom hook for counter
import { useState } from 'react'

function useCounter(initialCount = 0, value) { // here, initialCount ma value auxa(argument pass from component) vane tyo use hunxa or else by default 0 use hunxa.
	const [count, setCount] = useState(initialCount)

	const increment = () => {
		setCount(prevCount => prevCount + value)
	}

	const decrement = () => {
		setCount(prevCount => prevCount - value)
	}

	const reset = () => {
		setCount(initialCount)
	}
	return [count, increment, decrement, reset] //array of variables and methods return gareko
}

export default useCounter