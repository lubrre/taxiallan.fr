import React from 'react'

import '../Car/Cars.css'

function Cars() {
  return (
    <div className='cars'>  
        <h2 className='title_cars'>FLOTTE FAMILLIALE</h2>
        <div className='flotte'>
            <div className='flotte_car'>   
                <div className='mourad'></div>
                <h3 className='title_name'>Taxi Mourad</h3>
                <p className='phone_overlay'>ADS 320 Marseille</p>
            </div>

            <div className='flotte_car'>   
                <div className='michele'></div>
                <h3 className='title_name'>Taxi Michèle</h3>
                <p className='phone_overlay'>ADS 04 Nans Les Pins</p>
            </div>

            <div className='flotte_car'>   
                <div className='charly'></div>
                <h3 className='title_name'>Taxi Charly</h3>
                <p className='phone_overlay'>ADS 605 Marseille</p>
            </div>
        </div>
    </div>
  )
}

export default Cars