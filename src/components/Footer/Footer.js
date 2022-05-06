import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer_fix'>
            <div className='footer'>
                <div className='footer_detail'>
                    <Link to="/contact" className="detail_link">CONTACT</Link>
                    {/* <Link to="/mentionslegales" className="detail_link">MENTIONS LÉGALES</Link> */}
                </div>

                <div className='footer_info'>
                    <p className='info_address'>ALLAN KARIBA <br></br> Quartier Pierre Plate <br></br> 84860 Nans Les Pins</p>
                    <p className='info_email'>kariba.allan@hotmail.fr</p>
                    <p className='info_phone'>06 89 66 27 75</p>
                </div>
            </div>
        </div>
    )
}
