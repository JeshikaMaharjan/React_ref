// useState and useEffect for data fetching
// here, different states are initialized for loading,error and post
import React, {useState, useEffect} from 'react'
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true) //flag to indicate data fetching happening in background 
  const [error, setError] = useState('') //to show errormessage 
  const [post, setPost] = useState({}) // to store post after successful data fetching

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => {
        //succesful data fetch paxi change loading to false, 
        // store the fetched data in post and store empty msg in errormsg
        setLoading(false) 
        setPost(response.data)
        setError('')
      })
      .catch(error => {
        setLoading(false)
        setPost({})
        setError('Something went wrong!')
      })
  }, []) //empty list as dependency to call the API only once 

  return (
    <div>
      {loading ? 'Loading' : post.title} {/* if loading show msg 'Loading' else show post.title   */}
      {error ? error : null}
    </div>
  )
}

export default DataFetchingOne