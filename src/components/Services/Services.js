import React from "react";

import "./Services.css";

function Services() {
  return (
    <div className="services_container">
      <div className="services">
        <h1 className="h1_services">LES SERVICES</h1>
        <h2 className="h2_services">
          Que ce soit pour un transport médical ou bien un transport privé. Ne
          cherchez plus, <br></br>Taxi Allan est là pour vous.
        </h2>
        {/* <p className="p_taxi">Votre taxi conventionné</p> */}

        <div>
          <div className="services_medical"></div>
          <h4 className="h4_services">
            Votre taxi pour vos rendez-vous médicaux 7j/7
          </h4>
          <div className="p_service">
            <p className="p_services">
              Vous avez prochainement besoin d'un taxi pour un rendez-vous médical...
            </p>
            <p className="p_services">
              Taxi Allan vous propose ses services de Taxi conventionné à bord
              d'un véhicule haut de gamme et récent pour votre meilleur confort.
              {/* Taxi Allan vous propose sa voiture pour vous conduire à votre
              rendez-vous et que vous puissiez voyager assis confortablement.
              Que ce soit un rendez-vous médical ponctuel ou que vous soyez
              amené à avoir des rendez-vous médicaux plus régulièrement, c'est
              important de se faire conduire en toute confiance. */}
            </p>
            {/* <p className="p_services">
              Mon taxi est conventionné et agréé par la sécurité sociale. Vous
              ne faites pas l'avance des frais : je m'occupe de tous les papiers
              à partir de votre carte vitale et du bon de transport.
            </p> */}
          </div>
        </div>

        <div>
          <div>
            <div className="services_private"></div>
          </div>

          <h4 className="h4_services">
            Votre taxi pour vos trajets professionnels, privés et touristiques
          </h4>
          <div className="p_service">
            <p className="p_services">
              Un voyage de prévu ? Que ce soit professionel ou privé réserver
              votre Taxi afin d’arriver à l’heure souhaitée à la gare ou
              l'aéroport de votre choix. Vous bénéficierez également de ce
              service à bord de ce même véhicule haut de gamme et récent.
              {/* Un voyage de prévu ? Que ce soit professionel ou personnel
              réserver votre Taxi Allan afin d’arriver à l’heure souhaité à
              l’aéroport, la gare de votre choix ou encore un trajet privé,
              parce que l’important pour un voyage réussi c’est d’arriver à
              l’heure vous pouvez faire confiance à votre chauffeur. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
