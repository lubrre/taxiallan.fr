import React from "react";

import "../Car/Cars.css";
import "../Allan/Allan.css";

function Allan() {
  return (
    <div className="allan">
      <h1 className="allan_title">VOTRE TAXI</h1>
      <div className="allan_container">
        <div className="container_detail">
          <h3 className="container_title">Qui suis-je ? </h3>
          <p className="allan_p">
            Allan Kariba, 24 ans, Le métier de Taxi m'a était transmit par mes
            parents tout deux Taxis à leur compte.
          </p>
        </div>
        <div className="allan_img"></div>
      </div>
      <p className="allan_p2">
        Anciennement ambulancier de 2017 à 2020 j'ai fais pendant 3 ans
        l'expérience du transport sanitaires pour ensuite décider de me lancer à
        mon compte en tant que Taxi courant 2021.
      </p>

      <div className="icon_allan">
        <div className="icon_allan_detail">
          <div className="security"></div>
          <h4 className="icon_title">Securité</h4>
          <p className="icon_text">
            Votre chauffeur de taxi vous assure un service de transport
            sécurisé, sur-mesure et dans les meilleures conditions.
          </p>
        </div>

        <div className="icon_allan_detail">
          <div className="quality"></div>
          <h4 className="icon_title">Qualité</h4>
          <p className="icon_text">
            Votre taxi vous garantit un service haut de gamme et adapté à vos
            transports.
          </p>
        </div>

        <div className="icon_allan_detail">
          <div className="engagement"></div>
          <h4 className="icon_title">Engagement</h4>
          <p className="icon_text">
            Nous mettons en oeuvre toute notre expérience et tout notre savoir
            faire afin de vous satisfaire lors de vos déplacements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Allan;
