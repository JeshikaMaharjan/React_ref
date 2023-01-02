//Run effects only once and cleanup code
import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	} //e (event) as argument liraxa 

	useEffect(() => {
		console.log('useFffect called')
        window.addEventListener('mousemove', logMousePosition)
        // mousemove event listen garera event handleri.e logMousePosition call garxa

        return () => { // this is the function returned by useEffect
        console.log('Component unmounting code')
        window.removeEventListener('mousemove', logMousePosition)
        } // cleanup code
	}, []) // etaa empty list as second argument pathako vaera useEffect ek choti matra initial render ma matra call hunxa.
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default HookMouse