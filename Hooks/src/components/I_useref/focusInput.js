// Expected outome: Input field ma focus garaune 
import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null) //create ref variable and initialize it to null
	useEffect(() => {
        //focus the input element
		inputRef.current.focus() //current React kai ho
        //React will set the ref's current property to the corresponding DOM node(input)
        //Yo garexi ava inputRef.current ma .focus garera focus garna milxa.
	}, [])
	return (
		<div>
			<input ref={inputRef} type="text" /> {/* attach the ref variable to input field */}
            {console.log(inputRef)}
        </div>
	)
}

export default FocusInput