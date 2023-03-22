import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectCard from "./ProjectCard/ProjectCard";
import specialties from "./Specialties/Specialties";



const SpecialtiesSection = () => {
  console.log(specialties)
    

    return (
        <Container>
        <Row className="d-flex">
          <Col md={4}>
            <ProjectCard 
              title={specialties[0].title} 
              image={specialties[0].image}
              desc={specialties[0].desc}
              link={specialties[0].link}/>
          </Col>
          <Col md={4}>
            <ProjectCard 
              title={specialties[1].title} 
              image={specialties[1].image}
              desc={specialties[1].desc}
              link={specialties[1].link}/>
          </Col>
          <Col md={4}>
            <ProjectCard 
              title={specialties[2].title}  
              image={specialties[2].image}
              desc={specialties[2].desc}
              link={specialties[2].link}/>

          </Col>
        </Row>
        </Container>
    )
}
export default SpecialtiesSection