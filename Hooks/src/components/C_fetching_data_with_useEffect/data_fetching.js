import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	// const [post, setPosts] = useState([]) //for fetchig all posts  (list)
	const [post, setPost] = useState({}) //for fetching single post (array)
	const [id, setId] = useState(1)// initialize value of id to 1
	const [idFromButtonClick, setIdFromButtonClick] = useState(1) //idFromButtonClick is the only state which changes on every button click
    // eslai initialize to 1 (this state is required for trigger effect tala ko)

	useEffect(() => {
		axios
			// .get(https://jsonplaceholder.typicode.com/posts)
			.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res => {
                console.log(res)
                setPost(res.data) //response aako data lai post ma store gareko
			})
			.catch(err => {
				console.log(err)
			})
	}, [idFromButtonClick]) //idFromButtonClick dependency hoo
    //trigger effect on button click

	const handleClick = () => {
		setIdFromButtonClick(id) 
        // yo controlled component ko id hoo. handleclick is using setter function 
	}

	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value)} /> {/* controlled component */}
			<button type="button" onClick={handleClick}>Fetch Post</button>
			<div>{post.title}</div> {/* render single post */}
			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */} {/* render all posts */}
		</div>
	)
}

export default DataFetching