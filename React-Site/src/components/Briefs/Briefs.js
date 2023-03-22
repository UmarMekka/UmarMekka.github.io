import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroImage from './Hero-Briefs.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const BriefsDesc = () => {
    const heroImageStyling = {
        width: "70%",
        padding:"35px 0"
    }

    return (
        <div className="header-section">
        <Container>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className={"text-center"} md={5}>
            <img style={heroImageStyling} alt="HeroImage" src={heroImage}></img>
        </Col>
        <Col md={7}>
            <h1>Writing Design Briefs</h1>
            <p>I'm a multimedia professional specializing in UX Design and Strategic Marketing, with 8 years of corporate design and marketing experience under my belt and an additional 3 years of freelance graphic design. I have a fascination with telling stories through multimedia, a passion that has led me to my most recent endeavors in UX design and indie game development.
            </p>
            </Col>
      </Row>
      <Row>
        <h2 className="guntz-phase">Repeat Prototype and Phase</h2>

        <h2 className="guntz-indent">Iterations</h2>
        <h3>Practice Makes Perfect</h3>
        <p>The UX process never ends. Even after updates are made to the app using themes from the test phase and project is pushed to development, it's important to keep up with how users feel about the final product.</p>
        </Row>
      </Container>
      </div>
    )
}

export default BriefsDesc