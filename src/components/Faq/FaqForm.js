import React from 'react'
import '../Faq/FaqForm.css'

function FaqForm ({faq, index, toggleFAQ}) {
  return (
    <div 
    className={"faq " + (faq.open ? 'open' : '')}
    key={index}
    onClick={ () => toggleFAQ(index)}
    >
        <div className='faq-question'>
            {faq.question}
        </div>
        <div className='faq-answer'>
            {faq.answer}<br></br><br></br>
            {faq.answer2}<br></br>
            {faq.answer3}<br></br>
            {faq.answer4}
        </div>
    </div>
  )
}

export default FaqForm