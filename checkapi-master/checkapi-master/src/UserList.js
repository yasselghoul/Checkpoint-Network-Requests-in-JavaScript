import React, { useState , useEffect } from 'react';
import axios from 'axios'

 function UserList () {
     const [posts,setPosts]= useState([])

     useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>{
         console.log(res)
         setPosts(res.data)
     })
     .catch(err=>{
         console.log(err)
     })
    },[])
  
  return (
    <div >
  <ul style={{padding:"5px",listStyle:"none"}}>
  <li style={{background:"#cabed4",margin:"5px"}}>
      {
    posts.map(post=><li style={{paddingBottom:"10px", border:'solid'}} key={post.id}><p style={{background:'black',color:'white'}}>name:</p>{post.name}
    <br/> <p>email:</p>{post.email}
    <br/><p>adress:</p>
    {post.address.street}</li>)
      }
  </li>
     </ul>
    </div>
  )
}
export default UserList
