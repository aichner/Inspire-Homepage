//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
//import { Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

//> CSS
import "./services.scss";

//> Data for dynamically creating the services
import data from "./serviceList.js";
//#endregion

//#region > Components
class Services extends React.PureComponent {
  render() {
    return (
      <section id="services">
        <MDBContainer className="py-5 text-center">
          <h2 className="gidole h1-responsive font-weight-bold">
            Unsere Leistungen für Dich
          </h2>
          {this.props.info && (
            <p className="lead">
              Wie wir auch Dich mit <strong>{this.props.info.company}</strong>{" "}
              weiterbringen.
            </p>
          )}
          <p className="lead">Web | Video | Marketing</p>
          <MDBRow className="mt-5">
            {data.services.map((service, i) => {
              return (
                <MDBCol md="4" key={i}>
                  <img
                    src={service.img}
                    className="img-fluid"
                    alt={service.title}
                  />
                  <div className="pl-3 pr-3">
                    <h4 className="font-weight-bold mt-3">{service.title}</h4>
                    <p className="lead">{service.lead}</p>
                    <p>{service.text}</p>
                    <MDBBtn color="blue">Anfragen</MDBBtn>
                  </div>
                </MDBCol>
              );
            })}
            <MDBCol md="12"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}
//#endregion

//#region > Exports
export default Services;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
