import React, { useState } from "react";
import HeaderFaq from "./HeaderFaq";
import "../Faq/Faq.css";

import FaqForm from "./FaqForm";

export default function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Je ne comprend pas le montant total de ma course. Pouvez-vous m\u2019expliquer ?',
      answer: 'Les tarifs du taxi sont réglementés. Le montant de votre course est ainsi composé de plusieurs éléments. Tout d\u2019abord, on commence par le tarif de prise en charge (2,10€), on y ajoute le tarif kilométrique qui lui varie, du lundi au samedi et de 7h à 19h on ajoutera 1,92€/km, on ajoutera 2,48€/km si on est en tarif de nuit, c\u2019est à dire de 19h à 7h ou le dimanche et jours fériés. On ajoutera à ça le tarif d\u2019heure d\u2019attente qui est de 29,60€ lorsqu\u2019il aura besoin d\u2019être rajouté.',
      open: true
    },
    {
      question: 'Comment obtenir ma facture ?',
      answer: 'Demandez simplement à votre chauffeur, il vous fournira la facture du trajet.',
      open: false
    },
    {
      question: 'Respect et sécurité à bord',
      answer: 'Respect et sécurité de mes passagers est une de mes priorités. Je mets tout en oeuvre pour les garantir au quotidien. Aussi je ne tolère aucun comportement inapproprié à bord (comportement agressif, insultant, dangereux, déplacé ou intrusif, propos à caractère discriminatoire...).',
      open: false
    },
    {
      question: 'Objets trouvés',
      answer: 'Si vous pensez avoir perdu un objet dans mon taxi, contactez moi directement, soit par téléphone au 06 89 66 27 75 ou bien par le formulaire de contact du site en me fournissant une description de l\u2019objet.',
      open: false
    },
    {
      question: 'Comment me contacter ?',
      answer: 'Par téléphone au 06 89 66 27 75 ou bien par le formulaire de contact que vous pourrez retrouver dans la partie Contact du site.',
      open: false
    },
    {
      question: 'Comment évaluer ma course ?',
      answer: 'Directement sur ma page d\u2019information Google. Vous pouvez y laisser votre avis, je serais ravis de le lire.',
      open: false
    },
    
    
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
      <HeaderFaq />
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FaqForm faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
