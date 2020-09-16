//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router bindings
import { withRouter, Link } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBSmoothScroll,
} from "mdbreact";

//> Images
// InspireMedia Logo
import { ReactComponent as Logo } from "../../../assets/logo.svg";

//> Style
import "./navbar.scss";
//#endregion

//#region > Components
class Navbar extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collapseID) => () => {
    window.scrollTo(0, 0);

    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { location } = this.props;
    const { collapseID } = this.state;

    return (
      <div>
        <MDBNavbar color="white" light expand="md" fixed="top" scrolling>
          <MDBContainer>
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <Logo />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <MDBCollapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav right className="d-flex align-items-center">
                <MDBNavItem>
                  {location.pathname === "/" ? (
                    <MDBSmoothScroll to="hero" active>
                      <strong>Home</strong>
                    </MDBSmoothScroll>
                  ) : (
                    <MDBNavLink
                      exact
                      to="/"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      <strong>Home</strong>
                    </MDBNavLink>
                  )}
                </MDBNavItem>
                <MDBNavItem>
                  {location.pathname === "/" ? (
                    <MDBSmoothScroll to="services" active>
                      <strong>Leistungen</strong>
                    </MDBSmoothScroll>
                  ) : (
                    <MDBNavLink
                      exact
                      to="/"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      <strong>Leistungen</strong>
                    </MDBNavLink>
                  )}
                </MDBNavItem>
                <MDBNavItem>
                  {location.pathname === "/" ? (
                    <MDBSmoothScroll to="references" active>
                      <strong>Referenzen</strong>
                    </MDBSmoothScroll>
                  ) : (
                    <MDBNavLink
                      exact
                      to="/"
                      onClick={this.closeCollapse("mainNavbarCollapse")}
                    >
                      <strong>Referenzen</strong>
                    </MDBNavLink>
                  )}
                </MDBNavItem>
                <MDBNavItem>
                  <a
                    href="mailto:info@inspiremedia.at"
                    className="text-dark px-2"
                  >
                    <strong>Kontakt</strong>
                  </a>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {collapseID && overlay}
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default withRouter(Navbar);
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
