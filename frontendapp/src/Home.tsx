import { useNavigate } from 'react-router-dom';
import happyelijah from "./happyelijah.png";
import "./index.css";

function HomePage() {
    const navigate = useNavigate();

    const goToAboutMe = () => {
        navigate('/about-me');
    } 

    return (
        <div className="container mt-5">
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <h3 className="text-primary gradient-text">Click on the image below to learn more about me!</h3>
                </div>
                <div className="col-12 mt-4">
                    <a role="button" style={{cursor: 'pointer'}}>
                        <img src={happyelijah} alt="happyboy" className="img-fluid hover-shadow photo" onClick={goToAboutMe} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
