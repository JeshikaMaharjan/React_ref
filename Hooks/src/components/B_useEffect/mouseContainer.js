//useEffect cleanup code
import React, { useState } from 'react'
import HookMouse from './hookMouse'

function MouseContainer() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <HookMouse />} {/* if display variable is true render HookMouse component  */}
		</div>
        // esma display toggle hudaa component (HookMouse) unmount hunxa
        // component unmount vayee panii event listener mousemove chaii kaam vairakhxa and console ma output ni dekhinxa. (cleanup code rakhexaina vane)

	)
}

export default MouseContainer