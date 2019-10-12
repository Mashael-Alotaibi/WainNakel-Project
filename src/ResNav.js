import React from "react"
import './App.css';


function ResNav(props) {
    return (  
        <div className="ResNav" >
            {props.isLoading ? 
            <div class="loader"></div>
            :
            <div>
            <h1><a className="restrant-name" href={props.link} target="_blank" >{props.name}</a></h1 >
            <p>{props.cat}</p>
            <p>{props.rating} /10</p> </div>
            }     
        </div>   
    )
}


export default ResNav;