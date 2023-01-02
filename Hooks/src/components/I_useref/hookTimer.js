import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef()

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(timer => timer + 1)
//     }, 1000)
//     return () => {
//       clearInterval(interval)
//     }
//   }, []) // esari garyo vane useEffect hook vitra matra clearinterval garna milxa. 
//         //   tala button click garera clearinterval garna mildaina. 
//         // that is why useref chahinxa

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      clearInterval(interValRef.current)
    }
  }, [])
  return (
    <div>
      HookTimer - {timer} -
      {/* <button onClick={() => clearInterval(interval)}>Clear Timer</button> */}{/* eta clearinterval garna mildaina  */}
      <button onClick={() => clearInterval(interValRef.current)}>Clear Timer</button>
    </div>
  )
}

export default HookTimer