import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


import '../Home/Intro.css'

export default function Intro() {
    return (
        <div className='int'>
            <div className='intro_container'>
                <div className='btn_title_intro'>
                    <h1 className='title_intro'>VOTRE TAXI</h1>
                    <Link to="/taxi"> <button className='more_button_intro' type='button'> EN SAVOIR PLUS</button></Link>
                </div>
                <div className="img_intro"></div>    
            </div>
            
            <FontAwesomeIcon icon={faChevronDown} className='icon_intro' />
        </div>
    )
}
