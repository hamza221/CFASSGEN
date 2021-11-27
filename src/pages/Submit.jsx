import axios from 'axios';
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Submit() {
    const [title,setTitle]= useState("");
    const [user,setUser]= useState("");
    const [content,setContent]= useState("");
    const [image,setImage]= useState("");
    const handleSubmit=(e)=>{
      
        e.preventDefault();

        let obj={}
        obj.Title=title;
        obj.user=user; 
        obj.content=content; 
        if(image.trim().length>1){obj.picture=image};
        
        axios.post("https://assignment.hamzamahjoubi221.workers.dev/posts", {
            ...obj
          }).then(()=>{
            setContent("")
            setImage("")
            setTitle("")
            setUser()
            toast.success('Post Added Succesfully', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });}).catch(err=>{
            toast.error(' please try later', {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          
        })
              }
      
  
    return (
        <>
<form className="col-6 mb-5  " onSubmit={handleSubmit}>
  <div className="form-group">
    <label>Title <span style={{color:"red"}}>*</span></label>
    <input type="text" className="form-control" id="Title" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)} }required/>
  </div>
  <div className="form-group">
  <label >User <span style={{color:"red"}}>*</span></label>
    <input type="text" className="form-control" id="User" placeholder="User" value={user} onChange={(e)=>{setUser(e.target.value)} } required/>
  </div>
  <div className="form-group">
    <label >Content <span style={{color:"red"}}>*</span></label>
    <textarea className="form-control" id="Content" value={content} onChange={(e)=>{setContent(e.target.value)} } rows="6" required></textarea>
  </div>
  <div className="form-group">
    <label >Image</label>
    <input  type="text" className="form-control" value={image} onChange={(e)=>{setImage(e.target.value)} } id="Image" />
  </div>
  <button type="submit" value="Submit" className="btn btn-primary mt-3"> Submit</button>
  
</form>

<ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>


</> )}