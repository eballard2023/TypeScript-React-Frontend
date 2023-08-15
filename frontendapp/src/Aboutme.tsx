import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import yosemite from "./yosemite.jpg";

const About: React.FC = () => {
    const [data, setData] = useState<any>([]);
    /*Setting data to null, will set with json values */


    useEffect(() => {
        fetch("http://localhost:5001/awesome/applicant")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(result => {
            console.log('Received data:', result);  // Logging the received JSON
            setData(result);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error.message);
        });
    }, []);
    return (

        <div className="container-fluid purple self-center justify-between">
            

      
        <h1 className="display-1 py-3">About Me</h1>
        <div className="row">
          <div className="col-lg-6 col-md-12 py-4">
            <img src={yosemite} alt="me at yosemite" className="img-fluid"/>
          </div>
          <div className="col-lg-6 col-md-12">
            <p className="lead text-base">
             
                {data.story}
            </p>
            
          </div>
        </div>
        
        </div>

    );
    
};



export default About;
