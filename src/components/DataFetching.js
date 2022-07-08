import React, { useState, useEffect } from 'react'
import axios from 'axios'


function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleSubmit = () => {
        setIdFromButtonClick(id)
    }

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(error => {
            console.log(error)
        }) 
    }, [idFromButtonClick])

    return (
        <div>
        <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}}></input>
        <button onClick={() => handleSubmit()}>Fetch Post</button>
        {post.title}
        </div>
        // <div> {posts.map(post => {
        //     return <li key={post.id}>{post.title}</li>
        // })}</div>
    )
}

export default DataFetching