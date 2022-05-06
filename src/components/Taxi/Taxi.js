import React from "react";

import Allan from '../Allan/Allan'
import Cars from '../Car/Cars'
import Faq from '../Faq/Faq'


import '../Taxi/Taxi.css'

function Taxi(){
    return(
        <div className="taxi">
            <Allan />
            <Cars />
            <Faq />
        </div>
    )
}

export default Taxi;