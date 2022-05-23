import React, { useState } from "react";
import HeaderFaq from "./HeaderFaq";
import "../Faq/Faq.css";

import FaqForm from "./FaqForm";

export default function Faq() {
  const [faqs, setfaqs] = useState([
    {
      question: 'Je ne comprend pas le montant total de ma course. Pouvez-vous m\u2019expliquer ?',
      answer: 'Les tarifs du taxi sont réglementés. Le montant de votre course est ainsi composé de plusieurs éléments:',
      answer2: '-Le tarif de prise en charge (2,10€)',
      answer3: '-Le tarif kilométrique  (1.98€/km) du  lundi au samedi de 7h à 19h (2.56€/km) de 19h à 7h ainsi que les dimanche et jours fériés.',
      answer4: '-L\u2019heure d\u2019attente (31,60€)',
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