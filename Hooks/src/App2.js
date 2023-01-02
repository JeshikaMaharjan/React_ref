import React, { useReducer } from 'react'
import './App.css'
import CounterOne from './components/E_usereducer/counterone'
import CounterTwo from './components/E_usereducer/countertwo'
import CounterThree from './components/E_usereducer/counterthree'
import ComponentA from './components/E_usereducer/componentA'
import ComponentB from './components/E_usereducer/componentB'
import ComponentC from './components/E_usereducer/componentC'

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
			return state
	}
}

export const CountContext = React.createContext() //creating context



function Apptwo() {
	const [count, dispatch] = useReducer(reducer, initialState)
	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}>
                {/* Context ma values pathako */}
			<div className="App">
				{/* <CounterOne /> */}
				{/* <CounterTwo /> */}
				{/* <CounterThree /> */}
                {/* -----------same portion(uncomment at same time)--------- */}
				{count}
				<ComponentA />
				<ComponentB />
				<ComponentC />
             {/* By doing so we are maintaining the state(count) at App2.js and sharing that 
                state with different components (A,D,F) nested at different levels. Ava yo components ko counter le ni state ko value change garna milxa. 
             */}
                {/* -----------same portion--------- */}				
			</div>
		</CountContext.Provider>
	)
    // 
}

export default Apptwo