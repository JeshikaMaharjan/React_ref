// useEffect with incorect dependency
import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    const interval = setInterval(tick, 1000) //call tick method every second
    return () => {
      clearInterval(interval)
    }
	}, [count]) //esma empty list pathayo vane hamro expectation jasto kaam hudaina
    // dependencies ramrari check garera pathaunu parxa
    return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter