import './App.css';
import QuestionComponent from './component/QuestionComponent';
import doacaoIcone from './assets/health.png'
import { Container, Row, Col, Navbar, Image } from 'react-bootstrap';
import AboutModalComponent from './component/AboutModalComponent';
import { useState } from 'react'

function App() {

  const [modalShow, setModalShow] = useState(false);

  const addChoice = (e) => {
    console.log(e)
  }

  return (
    <Container>
      <Navbar className="navbarStyles">
        <Row>
          <Col>
            <Image
              className="navbar-brand iconStyles"
              src={doacaoIcone} />
          </Col>
          <Col className="aboutSite">
            <Navbar.Brand className="navbar-brand" onClick={() => setModalShow(true)}>Sobre este site</Navbar.Brand>
          </Col>
        </Row>
      </Navbar>
      <QuestionComponent addChoice={addChoice} />
      <AboutModalComponent
        show={modalShow} 
        onHide={() => setModalShow(false)}/>
    </Container>

  );
}

export default App;
