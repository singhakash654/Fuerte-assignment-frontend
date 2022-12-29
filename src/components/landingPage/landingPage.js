import React from 'react';
import { Link } from "react-router-dom";
import "./landingPage.css"

const LandingPage= () => {
    return( 
        <>
            <div className="main-container">
                <div className="container1">
                    <img src={require("../../images/lens-1418954@2x.png" )}alt="blank"/>
                    
                </div>
                <div className="container2">
                    <h2 className="text-container">Hello, Welcome All</h2>
                    <input type="email" placeholder='email..' className='input'/>
                    <input type="password" placeholder='Password..' className='input'/>
                    <Link to="/Header">
                        <button className='Enter-button'>
                            Enter
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default LandingPage;