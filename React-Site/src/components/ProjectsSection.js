import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectCard from "./ProjectCard/ProjectCard";
import caseStudies from "./CaseStudies/CaseStudies";


const ProjectsSection = () => {
    

    return (
        <Container>
        <Row className="d-flex">
          <Col md={4}>
            <ProjectCard 
            title={caseStudies[0].title}
            image={caseStudies[0].image}
            desc={caseStudies[0].desc}
            link={caseStudies[0].link} />
          </Col>
          <Col md={4}>
            <ProjectCard 
            title={caseStudies[1].title}
            image={caseStudies[1].image}
            desc={caseStudies[1].desc} />
          </Col>
          <Col md={4}>
            <ProjectCard 
            title={caseStudies[2].title}
            image={caseStudies[2].image}
            desc={caseStudies[2].desc} />

          </Col>
        </Row>
        </Container>
    )
}
export default ProjectsSection