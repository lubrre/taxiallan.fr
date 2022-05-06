import React from 'react'


import ContactForm from './Contact/ContactForm'
import Intro from './Home/Intro'
import ServicesIntro from './Home/ServicesIntro'

import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <Intro />
        <ServicesIntro />
        <ContactForm />
    </div>
  )
}
