import React from "react"
import './FrontPage.css';
import {Link} from "react-router-dom"



function FrontPage(){
    const style = {
        color:'black',
        textDecoration: 'none'
    }
    return(
        <div className="FrontPage" >
            <h1>FrontPage</h1>
            
            <button  > <Link style={style} to='/optionpage'>Suggestion</Link></button>
            
            
            
        </div>
        
    )
}


export default FrontPage;