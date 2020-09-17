//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router bindings
import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon,
  MDBSmoothScroll,
  MDBBadge,
} from "mdbreact";

//> Images
// Working svg
import { ReactComponent as Working } from "../../../../assets/content/hero/working.svg";
import { ReactComponent as Marketing } from "../../../../assets/content/hero/marketing.svg";

//> CSS
import "./hero.scss";
//#endregion

//#region > Components
class Hero extends React.Component {
  state = {
    valuesRadar: undefined,
  };

  render() {
    const { darkMode, googleAnalytics } = this.props;

    return (
      <section id="hero">
        <MDBContainer className="pt-5">
          <MDBView className="hero-view">
            <MDBRow className="flex-center d-flex d-sm-none pt-5 mt-3">
              <MDBCol md="6" className="text-center">
                <Marketing className="img-fluid w-75" />
                <h1 className="mt-3 font-weight-bold pb-4">
                  Deine Vision ist unser Auftrag
                </h1>
              </MDBCol>
            </MDBRow>
            <MDBRow className="flex-center d-none d-sm-flex desktop">
              <MDBCol md="6">
                <h1 className="font-weight-bold pb-4">
                  Deine Vision ist unser Auftrag
                </h1>
                <MDBSmoothScroll to="services">
                  <MDBBtn size="lg" color="blue">
                    Mehr erfahren
                    <MDBIcon icon="angle-down" className="pl-2" />
                  </MDBBtn>
                </MDBSmoothScroll>
              </MDBCol>
              <MDBCol md="6" className="py-5">
                <Working />
              </MDBCol>
            </MDBRow>
          </MDBView>
        </MDBContainer>
        <div className="top-mobile-bg d-block d-sm-none py-3 px-2 text-center">
          <p className="lead font-weight-bold mb-1">
            Jetzt <strong>Vorteile</strong> entdecken!
          </p>
          <p className="text-muted">
            Egal ob neue{" "}
            <strong>
              Webseite, Webshop, Leadkampagne, Social Network Marketing oder
              Videoproduktion
            </strong>
            , wir freuen uns auf eine tolle Zusammenarbeit.
          </p>
          <MDBSmoothScroll to="services">
            <MDBBtn size="lg" color="blue" className="btn-start">
              <MDBIcon icon="rocket" className="pr-2" />
              Leistungen entdecken
            </MDBBtn>
          </MDBSmoothScroll>
        </div>
        <MDBContainer
          fluid
          id="seperator"
          className="d-sm-block d-none text-dark"
        >
          <MDBContainer>
            <MDBRow className="h-100">
              <MDBCol md="3" className="p-0">
                <Marketing className="img-fluid w-75" />
              </MDBCol>
              <MDBCol md="7" className="p-0">
                <h3>
                  Jetzt <strong>Vorteile</strong> entdecken!
                </h3>
                <p className="lead">
                  Egal ob neue{" "}
                  <strong>
                    Webseite, Webshop, Leadkampagne, Social Network Marketing
                    oder Videoproduktion
                  </strong>
                  , wir freuen uns auf eine tolle Zusammenarbeit.
                </p>
                <MDBSmoothScroll to="services">
                  <MDBBtn size="lg" color="blue" className="btn-start">
                    <MDBIcon icon="rocket" className="pr-2" />
                    Leistungen entdecken
                  </MDBBtn>
                </MDBSmoothScroll>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </section>
    );
  }
}
//#endregion

//#region > Exports
export default Hero;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
