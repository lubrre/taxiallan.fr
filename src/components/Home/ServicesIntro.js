import React from 'react'
import { Link } from 'react-router-dom';

import '../Home/ServicesIntro.css'


export default function Services() {
    return (
        <div className='services_container'>
            <div className='services_intro'>
            <h1 className='service_title'>LES SERVICES</h1>
            <div className='services_img'>
                <Link to="/services"><div className="service_medical"></div></Link>
                <Link to="/services"><div className="service_private"></div></Link>
            </div>
        </div>
        </div>
        
    )
}