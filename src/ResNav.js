import React from "react"
import './App.css';


function ResNav(props) {
    return (
            
        <div className="ResNav" >
                <h1><a href={props.link} target="_blank" >{props.name}</a></h1 >
                <p>{props.cat}</p>
                <p>{props.rating} /10</p>
        </div>   
    )
}


export default ResNav;