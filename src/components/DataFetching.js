import React, { useState, useEffect } from 'react'
import axios from 'axios'


function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(0)

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(error => {
            console.log(error)
        }) 
    }, [id])

    return (
        <div>
        <input type='text' onChange={(e)=>{setId(e.target.value)}}></input>
        {post.title}
        </div>
        // <div> {posts.map(post => {
        //     return <li key={post.id}>{post.title}</li>
        // })}</div>
    )
}

export default DataFetching