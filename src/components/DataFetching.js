import React, { useState, useEffect } from 'react'
import axios from 'axios'


function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(error => {
            console.log(error)
        }) 
    }, [])

    return (
        <div> {posts.map(post => {
            return <li key={post.id}>{post.title}</li>
        })}</div>
    )
}

export default DataFetching