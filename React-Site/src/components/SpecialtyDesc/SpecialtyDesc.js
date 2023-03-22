import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroImage from './Hero-Demo.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const SpecialtyDesc = () => {
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
            <h2>Turning User Experiences Into Stories</h2>
            <p>I'm a multimedia professional specializing in UX Design and Strategic Marketing, with 8 years of corporate design and marketing experience under my belt and an additional 3 years of freelance graphic design. I have a fascination with telling stories through multimedia, a passion that has led me to my most recent endeavors in UX design and indie game development.
            </p>
            </Col>
      </Row>
      </Container>
      </div>
    )
}

export default SpecialtyDesc