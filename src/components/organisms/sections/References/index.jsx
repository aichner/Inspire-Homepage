//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//> CSS
import "./references.scss";

//> Images
import kelagIMG from "../.././../../assets/content/trusted/kelag.png";
import kelagbigbandIMG from "../.././../../assets/content/trusted/kelagbigband.png";
import pharmaziegasseIMG from "../.././../../assets/content/trusted/pharmaziegasse.png";
import bluelupiIMG from "../.././../../assets/content/trusted/bluelupi.png";
import erlebnishotelIMG from "../.././../../assets/content/trusted/erlebnishotel.png";
import rauchIMG from "../.././../../assets/content/trusted/rauch.png";
import gasserPartnerIMG from "../../../../assets/content/trusted/gasser+partner.png";
import snekIMG from "../../../../assets/content/trusted/snek.png";
import psvIMG from "../../../../assets/content/trusted/psv.png";
import e4yIMG from "../../../../assets/content/trusted/e4y.png";
import sithcultIMG from "../../../../assets/content/trusted/sithcult.png";
import healthtraceIMG from "../../../../assets/content/trusted/healthtrace.png";
import topImmoIMG from "../../../../assets/content/trusted/topimmo.png";
import spardaIMG from "../../../../assets/content/trusted/sparda.png";

//> Data
const data = [
  {
    src: pharmaziegasseIMG,
    alt: "Pharmaziegasse Logo",
    url: "https://www.pharmaziegasse.at/",
  },
  { src: snekIMG, alt: "SNEK", url: "https://snek.at/" },
  { src: gasserPartnerIMG, alt: "Gasser+Partner" },
  { src: kelagbigbandIMG, alt: "KELAG BigBand" },
  { src: e4yIMG, alt: "Emotions 4 You" },
  { src: erlebnishotelIMG, alt: "Erlebnishotel Mölltal" },
  { src: psvIMG, alt: "Polizeisportverein" },
  { src: rauchIMG, alt: "Andreas Rauch" },
  { src: kelagIMG, alt: "KELAG" },
  { src: bluelupiIMG, alt: "Blue Lupi", url: "https://www.kaffeerudel.at/" },
  { src: sithcultIMG, alt: "SithCult", url: "https://sithcult.com/" },
  {
    src: healthtraceIMG,
    alt: "HealthTrace",
    url: "https://www.healthtrace.at/",
  },
  { src: topImmoIMG, alt: "Top Immo", url: "https://www.top-immo.org/" },
  {
    src: spardaIMG,
    alt: "Sparda Plus Versicherungen",
    url: "https://www.spardaplus.at/",
  },
];

class References extends React.PureComponent {
  render() {
    return (
      <div id="references">
        <MDBContainer className="py-5 text-center text-dark">
          <h2 className="gidole h1-responsive font-weight-bold">
            Viele Firmen profitieren von unseren Services
          </h2>
          <p className="lead">
            Wir bieten Dir <strong>hochwertige</strong>, auf Deine Vision
            zugeschnittene Lösungen in sämtlichen Bereichen des Marketings.
          </p>
          <MDBRow className="flex-center">
            {data.map((item, i) => {
              return (
                <MDBCol xs="6" sm="6" md="3" lg="2" className="p-3" key={i}>
                  {item.url ? (
                    <a href={item.url} target="_blank">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="img-fluid"
                      />
                    </a>
                  ) : (
                    <img src={item.src} alt={item.alt} className="img-fluid" />
                  )}
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default References;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
