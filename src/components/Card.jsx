import React from 'react'

export default function Card(props) {
    console.log(props.content)
    if(props.content.picture){
    return (
        <div className="card mb-4 col-5" >
  <img src={props.content.picture} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{props.content.Title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.content.user}</h6>
  
    <p className="card-text">{props.content.content}</p>
    
  </div>
</div>
    )}

    else{

        return (<div className="card mb-4 col-5">
        <div className="card-body">
          <h5 className="card-title">{props.content.Title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.content.user}</h6>
          <p className="card-text">{props.content.content}</p>
   
        </div>
      </div>)
    
}}
