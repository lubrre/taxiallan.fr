import React from "react";

import "./Services.css";

function Services() {
  return (
    <div className="services_container">
      <div className="services">
        <h1 className="h1_services">LES SERVICES</h1>
        <h2 className="h2_services">
          Que ce soit pour un transport médical ou bien un transport privé. Ne
          cherchez plus, <br></br>Taxi Allan est la solution.
        </h2>
        <p className="p_taxi">Votre taxi conventionné</p>

        <div>
          <div className="services_medical"></div>
          <h4 className="h4_services">
            Votre taxi pour vos rendez-vous médical 7j/7
          </h4>
          <p className="p_services">
            Vous avez prochainement besoin d'un taxi pour un rendez-vous médical
            dans un hôpital, une clinique ou bien une visite chez un spécialiste
            ?
          </p>
          <p className="p_services">
            Taxi Allan vous propose sa voiture pour vous conduire à votre
            rendez-vous et et que vous puissiez voyager assis confortablement.
            Que ce soit un rendez-vous médical ponctuel ou que vous soyez amené
            à avoir des rendez-vous médicaux plus régulièrement, c'est important
            de se faire conduire en toute confiance.
          </p>
          <p className="p_services">
            Mon taxi est conventionné et agréé par la sécurité sociale. Vous ne
            faites pas l'avance des frais : je m'occupe de tous les papiers à
            partir de votre carte vitale et du bon de transport.
          </p>
        </div>

        <div>
          <div>
            <div className="services_private"></div>
          </div>

          <h4 className="h4_services">
            Votre taxi pour arriver à l’aéroport ou la gare de votre choix sans
            aucune encombre
          </h4>
          <p className="p_services">
            Un voyage de prévu ? Que ce soit professionel ou personnel réserver
            votre Taxi Allan afin d’arriver à l’heure souhaiter à l’aéroport, la
            gare de votre choix ou encore un trajet privé, parce que l’important
            pour un voyage réussi c’est d’arriver à l’heure vous pouvez faire
            confiance à votre chauffeur.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Services;
