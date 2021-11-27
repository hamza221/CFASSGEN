import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Spinner from '../components/Spinner'
import uuid from 'react-uuid'
export default function Browse() 
{  const [posts,setposts] =useState()
    useEffect(()=>{
    axios.get("https://assignment.hamzamahjoubi221.workers.dev/posts").then(res=>{setposts((res.data))

}).catch(err=>{
        console.error(err)
    })
    

},[])


if (
    posts === undefined 
  ) {
   
    return <Spinner></Spinner>;
  }else{

    return (
        <div className="d-flex flex-wrap align-items-center justify-content-center  mb-4 flex-column">
            {posts.map((elem)=>{
                return  <Card  key ={uuid()} content ={elem}></Card>
            })}
        </div>
    )
}
}



