import React from "react"
import './HomePage.css';
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
                <Link style={style} to='/option'><button className="home-btn">اقترح</button></Link>
            </div>
        </div>  
    )
}


export default HomePage;