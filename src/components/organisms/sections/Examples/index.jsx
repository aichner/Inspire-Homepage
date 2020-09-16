//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBIcon,
} from "mdbreact";

//> CSS
import "./examples.scss";

//> Images
import kelagIMG from "../.././../../assets/content/trusted/kelag.png";
import kelagbigbandIMG from "../.././../../assets/content/trusted/kelagbigband.png";
import pharmaziegasseIMG from "../.././../../assets/content/trusted/pharmaziegasse.png";
import pharmaziegasseEx from "../.././../../assets/content/examples/pharmaziegasse.png";
import charmEx from "../.././../../assets/content/examples/charm.png";
import bluelupiIMG from "../.././../../assets/content/trusted/bluelupi.png";
import bluelupiEx from "../.././../../assets/content/examples/kaffeerudel.png";
import erlebnishotelIMG from "../.././../../assets/content/trusted/erlebnishotel.png";
import rauchIMG from "../.././../../assets/content/trusted/rauch.png";
import gasserPartnerIMG from "../../../../assets/content/trusted/gasser+partner.png";
import snekIMG from "../../../../assets/content/trusted/snek.png";
import psvIMG from "../../../../assets/content/trusted/psv.png";
import e4yIMG from "../../../../assets/content/trusted/e4y.png";
import sithcultIMG from "../../../../assets/content/trusted/sithcult.png";
import sithcultEx from "../../../../assets/content/examples/sithcult.png";
import healthtraceIMG from "../../../../assets/content/trusted/healthtrace.png";
import healthtraceEx from "../../../../assets/content/examples/healthtrace.jpg";
import runeIMG from "../../../../assets/content/trusted/rune.png";
import runeEx from "../../../../assets/content/examples/rune.jpg";
//#endregion

//#region > Config
//> Data
const data = [
  {
    title: "Charm",
    url: "https://www.pharmaziegasse.at",
    openSource: "https://github.com/pharmaziegasse/charm-webapp",
    type: "web",
    logo: pharmaziegasseIMG,
    head: charmEx,
    description:
      "Customer-Relationship-Management tool. Anamnesebogen erfassung, Anamnese PDF Generierung, Usermanagement, CMS",
    technologies: [
      "react",
      "javascript",
      "css",
      "sass",
      "html",
      "graphql",
      "python",
      "docker",
    ],
  },
  {
    title: "Personenregistrierung",
    url: "https://www.healthtrace.at",
    openSource: null,
    type: "web",
    logo: healthtraceIMG,
    head: healthtraceEx,
    description:
      "COVID-19 digitales Gästeregistrierungstool mit Usermanagement, QR Code Generierung, PDF Generierung",
    technologies: [
      "react",
      "javascript",
      "css",
      "sass",
      "html",
      "firebase",
      "graphql",
      "nodejs",
      "python",
      "docker",
    ],
  },
  {
    title: "PHARMAZIEGASSE®",
    url: "https://www.pharmaziegasse.at",
    openSource: "https://github.com/pharmaziegasse/unique-homepage",
    type: "web",
    logo: pharmaziegasseIMG,
    head: pharmaziegasseEx,
    description: "Website mit CMS + User Registrierung",
    technologies: [
      "react",
      "javascript",
      "css",
      "html",
      "graphql",
      "python",
      "docker",
    ],
  },
  {
    title: "Kaffeerudel",
    url: "https://www.kaffeerudel.at",
    openSource: "https://github.com/blue-lupi/kaffeerudel",
    type: "web",
    logo: bluelupiIMG,
    head: bluelupiEx,
    description: "Website / Webshop mit Userprofilen und CMS",
    technologies: [
      "react",
      "javascript",
      "css",
      "sass",
      "html",
      "firebase",
      "graphql",
      "nodejs",
      "python",
      "docker",
    ],
  },
  {
    title: "Holobook",
    url: "https://www.sithcult.com",
    openSource: "https://github.com/SithCult/Holobook",
    type: "web",
    logo: sithcultIMG,
    head: sithcultEx,
    description: "Open Source Soziales Netzwerk",
    technologies: [
      "react",
      "javascript",
      "css",
      "sass",
      "html",
      "firebase",
      "nodejs",
    ],
  },
  {
    title: "Sonnenarm",
    url: "https://www.sonnenarm.at",
    openSource: "https://github.com/aichner/sonnenarm-homepage",
    type: "web",
    logo: runeIMG,
    head: runeEx,
    description: "Digitale Kunstgalerie",
    technologies: ["react", "javascript", "css", "sass", "html"],
  },
];
//#endregion

//#region > Components
class References extends React.PureComponent {
  printTechnologies = (technologies) => {
    return technologies.map((tech) => {
      return (
        <img
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${tech}/${tech}.png`}
          alt={tech}
        />
      );
    });
  };

  render() {
    const web = data.filter((item) => item.type === "web");

    return (
      <div id="examples">
        <MDBContainer className="py-5 text-center text-dark">
          <h2 className="gidole h1-responsive font-weight-bold">
            Unsere Web Projekte
          </h2>
          <p className="lead">Webseiten, Webshops, Webapps, Webservices</p>
          <MDBCarousel
            activeItem={1}
            length={2}
            slide={true}
            showControls={true}
            showIndicators={true}
            multiItem
          >
            <MDBCarouselInner>
              <MDBRow>
                {[0, 1].map((item, i) => {
                  const web =
                    data.length > 3 ? data.splice(item, item + 3) : data;

                  return (
                    <MDBCarouselItem itemId={i + 1}>
                      {web.map((project, p) => {
                        console.log("RTN");
                        return (
                          <MDBCol md="4" key={i + "-" + p}>
                            <MDBCard className="mb-2">
                              <MDBCardImage
                                className="img-fluid"
                                src={project.head}
                              />
                              <MDBCardBody>
                                <MDBCardTitle className="mb-1">
                                  {project.title}
                                </MDBCardTitle>
                                <span className="d-block mb-2">
                                  <img
                                    src={project.logo}
                                    alt={project.title}
                                    className="img-fluid brand"
                                  />
                                </span>
                                <MDBCardText className="mb-0">
                                  {project.description}
                                </MDBCardText>
                                {project.technologies &&
                                  project.technologies.length > 0 && (
                                    <div className="py-3 techs">
                                      <p className="text-muted small mb-1">
                                        Verwendete Technologien
                                      </p>
                                      {this.printTechnologies(
                                        project.technologies
                                      )}
                                    </div>
                                  )}
                                {project.openSource && (
                                  <MDBBtn
                                    social="git"
                                    href={project.openSource}
                                    target="_blank"
                                  >
                                    <MDBIcon fab icon="github" />
                                    Source code
                                  </MDBBtn>
                                )}
                                <MDBBtn
                                  social="blue"
                                  href={project.url}
                                  target="_blank"
                                >
                                  <MDBIcon far icon="eye" />
                                  Live
                                </MDBBtn>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>
                        );
                      })}
                    </MDBCarouselItem>
                  );
                })}
              </MDBRow>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default References;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
