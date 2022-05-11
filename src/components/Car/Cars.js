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
                <h4 className='ads_number'>ADS 320 Marseille </h4>
            </div>

            <div className='flotte_car'>   
                <div className='michele'></div>
                <h3 className='title_name'>Taxi Michèle</h3>
                <h4 className='ads_number'>ADS 04 Nans Les Pins </h4>
            </div>

            <div className='flotte_car'>   
                <div className='charly'></div>
                <h3 className='title_name'>Taxi Charly</h3>
                <h4 className='ads_number'>ADS 605 Marseille </h4>
            </div>
        </div>
    </div>
  )
}

export default Cars