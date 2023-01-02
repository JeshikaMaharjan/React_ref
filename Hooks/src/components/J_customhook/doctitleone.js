import React, {useState} from 'react'
import useDocumentTitle from '../J_hooks/useDocumentTitle';

function DocTitleOne() {
  const [count, setCount] = useState(0)
  useDocumentTitle(count) //calling custom hook and passing count as argument

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne