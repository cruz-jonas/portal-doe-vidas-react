import './App.css';
import QuestionComponent from './component/QuestionComponent';
import doacaoIcone from './assets/health.png'
import { Container, Row, Col, Navbar, Image, NavDropdown } from 'react-bootstrap';
import AboutModalComponent from './component/AboutModalComponent';
import { useState } from 'react'
import BrainDeathModalComponent from './component/BrainDeathModalComponent';
import OrganDonationModalComponent from './component/OrganDonationModalComponent';
import DonationIsAmazingModalComponent from './component/DonationIsAmazingModalComponent';

function App() {

  const [aboutModalShow, setAboutModalShow] = useState(false);
  const [brainDeathModalShow, setBrainDeathModalShow] = useState(false);
  const [organDonationModalShow, setOrganDonationModalShow] = useState(false);
  const [donationIsAmazingModalShow, setDonationIsAmazingModalShow] = useState(false);

  return (
    <Container>
      <Navbar className="navbarStyles">
        <Row>
          <Col className="col-11 col-md-auto">
            <Image
              className="navbar-brand iconStyles"
              src={doacaoIcone} />
          </Col>
          <Col className="col-11 col-md-auto aboutSite">
            <Navbar.Brand className="navbar-brand navFontSize" onClick={() => setAboutModalShow(true)}>Sobre esta aplicação</Navbar.Brand>
          </Col>
          <Col className="col-11 col-md-auto aboutSite aboutSite-information">
            <NavDropdown
              className="navFontSize"
              title="Mais informações"
              menuVariant="dark"
            >
              <NavDropdown.Item onClick={() => setBrainDeathModalShow(true)}>Morte Encefálica</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setOrganDonationModalShow(true)}>Doação de Órgãos e Tecidos</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setDonationIsAmazingModalShow(true)}>Doar é Legal</NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
      </Navbar>
      <QuestionComponent />
      <AboutModalComponent
        show={aboutModalShow}
        onHide={() => setAboutModalShow(false)} />
      <BrainDeathModalComponent
        show={brainDeathModalShow}
        onHide={() => setBrainDeathModalShow(false)} />
      <OrganDonationModalComponent
        show={organDonationModalShow}
        onHide={() => setOrganDonationModalShow(false)} />
      <DonationIsAmazingModalComponent
        show={donationIsAmazingModalShow}
        onHide={() => setDonationIsAmazingModalShow(false)} />
    </Container>

  );
}

export default App;
