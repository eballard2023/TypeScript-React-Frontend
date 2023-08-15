import React from 'react';
import { useNavigate } from 'react-router-dom';
import happyelijah from "./happyelijah.png";

function HomePage() {
    const navigate = useNavigate();

    const goToAboutMe = () => {
        navigate('/about-me');
    } 

    return (
        <div className="container justify-content-center">
            <div className = "row">
            <a>
                <img src = {happyelijah} alt = "happyboy" onClick={goToAboutMe}/>
            </a>
            
            </div>
            
        </div>
    );
}

export default HomePage;
