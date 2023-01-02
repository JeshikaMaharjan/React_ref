// Expected outcome : counterOne click garda ali delay paxi increment hune but countertwo click garda no delay. 
import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++ //only slowing down rate at which we compute whether ciunter is odd or even
    return counterOne % 2 === 0 // odd/even check
  }, [counterOne]) //counterOne ko value change vayo vane matra even odd check gane function run garaune or else cached value from previous render naii return garne 
//   This cached value or the value returned by function upon run is stored in isEven variable.

	return (
		<div> 
			<div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
			</div>
			<div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter
