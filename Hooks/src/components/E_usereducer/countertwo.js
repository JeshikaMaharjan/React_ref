// complex state and action (i.e state object and action object)
import React, { useReducer } from 'react'

const initialState = {
	firstCounter: 0,
	secondCounter: 10 // state object banayo vane property add garna sajilo hunxa. in this case duita counters banauna easy vayoo.
}
const reducer = (state, action) => {
	switch (action.type) { //here, action is entire object and we are accessing type only
		case 'increment': //for first counter
			return { ...state, firstCounter: state.firstCounter + action.value }
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value }
		case 'increment2': // for second counter
			return { ...state, secondCounter: state.secondCounter + action.value }
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value }
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterTwo() {
	const [count, dispatch] = useReducer(reducer, initialState)
    //count refers to entire state object  

	return (
		<div>
			<div>First Counter = {count.firstCounter}</div> {/* we only need firstname so dot operator  */}
			<button onClick={() => dispatch({ type: 'increment', value: 1 })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: 'increment', value: 5 })}>
				Increment 5
			</button>
			<button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
				Decrement 5
			</button>
			<button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>

			<div>Secound Counter = {count.secondCounter}</div>
			<div>
				<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
					Increment
				</button>
				<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
					Decrement
				</button>
			</div>
		</div>
	)
}

export default CounterTwo