import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import heroImage from './Hero-Demo.png'


const HeroSection = () => {
    const heroImageStyling = {
        width: "70%",
        padding:"35px 0"
    }

    return (
        
        <Container>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className={"text-center"} md={5}>
            <img style={heroImageStyling} alt="HeroImage" src={heroImage}></img>
        </Col>
        <Col md={7}>
            <p className="greeting">Nice to meet you! My name is </p>
            <h1>Umar Mekkaoui</h1>
            <h2>UX Designer, Story Teller Extraordinaire</h2>
            <p>I'm a multimedia professional specializing in UX Design and Strategic Marketing, with 6 years of corporate design and marketing experience under my belt and an additional 3 years of freelance graphic design. I have a fascination with telling stories through multimedia, a passion that has led me to my most recent endeavors in UX design and indie game development. My past experiences have also included audio/video production, photography, and comission based illustration.
            </p>
            <Button>Contact Me</Button>
            </Col>
      </Row>
      </Container>
    )
}

export default HeroSection