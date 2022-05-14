import React from "react";
import emailjs from '@emailjs/browser';
import './ContactForm.css'

function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_diwrjt7', 'template_contact_lubrre', e.target, 'user_e9bqVmWPSURWMq0Sm8MNO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
}

  return (
    <div className='form'>
            <form onSubmit={sendEmail}>
                <div className='contact_form'>
                    <h2 className='contact_title_1'>BESOIN D'UN TAXI ?</h2>
                    <h2 className='contact_title_2'>CONTACTEZ MOI</h2>
                    <div className='contact_placeholder'>
                        <input type='text' className='form_control' placeholder='Votre nom' name='name'/>
                    </div>
                    <div className='contact_placeholder'>
                        <input type='text' className='form_control' placeholder='Objet de votre prise de contact' name='subject'/>
                    </div>
                    <div className='contact_placeholder'>
                        <input type='tel' className='form_control' placeholder='Votre numéro de téléphone' name='tel'/>
                    </div>
                    <div className='contact_placeholder'>
                        <textarea className='form_control_message' id='' placeholder='Votre message' name='message'></textarea>
                    </div>
                    <div className='contact_submit_button'>
                        <input type='submit' className='submit_button' value='ENVOYER'></input>
                    </div>
                </div>
            </form>
        </div>
  );
}

export default ContactForm;