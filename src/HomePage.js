import React from "react"
import './FrontPage.css';
import {Link} from "react-router-dom"

function HomePage(){
    const style = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '40px'
    }
    return(
        <div className="home-page" >
            <div className="home-contener" >
                <img src="https://wainnakel.com/images/logo.png" />
                <button className="home-btn" > <Link style={style} to='/option'>اقترح</Link></button>
                
                
            </div>
        </div>
        
    )
}


export default HomePage;