//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router DOM bindings
import { Link, withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBSwitch,
  MDBBadge,
  MDBSmoothScroll,
} from "mdbreact";

//> Images
// Logo
import { ReactComponent as Logo } from "../../../assets/logo.svg";

//> CSS
import "./footer.scss";

//> Dynamic texts
// Slogans
const slogans = [
  "Wählen Sie den Weg zum Erfolg!",
  "Erhöhen Sie Ihren Bekanntheitsgrad!",
  "Jetzt Beratungsgespräch vereinbaren!",
  "Lassen Sie sich von uns beraten!",
  "Worauf warten Sie noch?",
  "Der Erfolg wartet!",
];

class Footer extends React.PureComponent {
  state = {
    slogan: "",
    darkMode: false,
    clicks: 0,
    heart: false,
  };

  // Update parent state (Root Component)
  handleSwitchChange = () => {
    this.setState(
      {
        darkMode: !this.state.darkMode,
      },
      () => this.props.handler()
    );
  };

  componentDidMount() {
    this.setState({ darkMode: this.props.darkMode ? true : false }, () =>
      this.getSlogan()
    );
  }

  componentWillReceiveProps = () => {
    // Hide eggs again when changing the page
    this.setState({
      clicks: 0,
      heart: false,
    });
  };

  // Get a random slogan and save to state
  getSlogan = () => {
    this.setState({
      slogan: slogans[Math.floor(Math.random() * slogans.length)],
    });
  };

  render() {
    const { location } = this.props;

    return (
      <MDBFooter
        color={this.props.darkMode ? "agency-dark" : "white text-dark"}
      >
        <MDBRow className="social">
          <MDBCol md="12" className="text-center">
            <h4>Verbinde Dich mit uns!</h4>
          </MDBCol>
          <MDBCol md="12" className="text-center social-buttons">
            <MDBBtn
              tag="a"
              floating
              social="git"
              href="https://github.com/aichner"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MDBIcon fab icon="github fa-lg" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              floating
              social="ins"
              href="https://www.instagram.com/aichnerchristian/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              floating
              social="fb"
              href="https://www.facebook.com/inspiremediagmbh"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MDBIcon fab icon="facebook-f fa-lg" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              floating
              social="li"
              href="https://www.linkedin.com/company/19205978"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              floating
              social="wa"
              href="https://api.whatsapp.com/send?phone=4368120502754&
              text=Hey%2C%20ich%20bin%20an%20einem%20Angebot%20eurer%20Agentur%20interessiert."
              rel="noopener noreferrer"
              target="_blank"
            >
              <MDBIcon fab icon="whatsapp" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              floating
              social="email"
              href="mailto:office@inspiremedia.at"
            >
              <MDBIcon far icon="envelope" />
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBContainer className="text-center text-md-left pt-5">
          <MDBRow>
            <MDBCol md="2">
              <Logo id="logo" />
              <p className="mt-3">Hochwertige und individuelle Lösungen</p>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Rechtliches</h5>
              <hr className="blue mb-4 mt-0 d-inline-block" />
              <ul>
                <Link to="/about">
                  <li className="list-unstyled">
                    <MDBIcon far icon="file-alt" />
                    Impressum
                  </li>
                </Link>
                <Link to="/privacy">
                  <li className="list-unstyled">
                    <MDBIcon icon="balance-scale" />
                    Datenschutzerklärung
                  </li>
                </Link>
              </ul>
            </MDBCol>
            <MDBCol md="3">
              <h5 className="title">Nützliche Links</h5>
              <hr className="blue mb-4 mt-0 d-inline-block" />
              <ul>
                <a
                  href="https://github.com/aichner/React-MDB-Firebase-Template/blob/master/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="list-unstyled">
                    <MDBIcon icon="code" />
                    Code quality
                  </li>
                </a>
                <a
                  href="https://www.buymeacoffee.com/M4SVRWQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className="list-unstyled">
                    <MDBIcon icon="coffee" />
                    Einen Kaffee spendieren
                  </li>
                </a>
                {/*<Link to="/branding">
                  <li className="list-unstyled">
                    <MDBIcon icon="palette" />
                    Presse / Branding
                  </li>
                </Link>*/}
              </ul>
            </MDBCol>
            <MDBCol md="4">
              <h5 className="title">Kontakt</h5>
              <hr className="blue mb-4 mt-0 d-inline-block" />
              <ul>
                <a href="mailto:office@inspiremedia.at">
                  <li className="list-unstyled">
                    <MDBIcon far icon="envelope" />
                    office@inspiremedia.at
                  </li>
                </a>
                <a href="tel:004368120502754">
                  <li className="list-unstyled">
                    <MDBIcon icon="phone" />
                    +43 681 205027 54
                  </li>
                </a>
              </ul>
              <p>
                Emailwerkstraße 29
                <br />
                A-9523 Villach-Landskron
              </p>
              <p>
                <strong>Termin nach Vereinbarung!</strong>
                <br />
                MO-SO 08:00 - 18:00
              </p>
            </MDBCol>
            <MDBCol md="12" className="text-center my-5">
              <h4>{this.state.slogan}</h4>
              <MDBBtn
                size="lg"
                color="blue"
                href="mailto:office@inspiremedia.at"
                className="text-white"
              >
                Kontakt
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: InspireMedia GmbH
            <div>
              <small className="text-muted">
                Stable release
                <span className="pl-2 pr-2">·</span>
                <span>Version v{process.env.REACT_APP_VERSION}</span>
                <span className="pl-2 pr-2">·</span>
                <a
                  href="https://github.com/aichner/Inspire-Homepage"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MDBIcon fab icon="github" className="pr-2" />
                  View on GitHub
                </a>
                <span className="pl-2 pr-2">·</span>
                <a
                  href="https://github.com/aichner/Inspire-Homepage/issues/new?template=bug_report.md"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MDBIcon icon="bug" className="pr-2" />
                  Report bug
                </a>
              </small>
            </div>
            <p className="my-2 font-weight-bold gidole">
              Made with <MDBIcon icon="heart" className="text-danger" /> by us.
            </p>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default withRouter(Footer);

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 InspireMedia GmbH
 */
