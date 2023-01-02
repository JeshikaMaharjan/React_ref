import {useState} from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const reset = () => { //reset function
    setValue('')
  }
  const bind = { //bond is object
    value, //implies value:value
    onChange: e => {
      setValue(e.target.value)
    }
  }
  return [value, bind, reset]
}

export default useInput