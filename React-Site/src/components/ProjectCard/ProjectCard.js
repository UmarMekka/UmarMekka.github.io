import React from "react";
import {useRef, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';

import 'bootstrap/dist/css/bootstrap.min.css'
import './ProjectCard.css'

const ProjectCard = (props) => {
    const heroImageStyling = {
        width: "100%"
    }
    const myRef = useRef();
    const [myElementIsVisible, setMyElementIsVisible] = useState()
    
    useEffect(()=>{
      const observer = new IntersectionObserver((entries)=>{
        const entry = entries[0];
        setMyElementIsVisible(entry.isIntersecting)
      })
      observer.observe(myRef.current)
    }, [])
    return (
        <div ref={myRef} className={myElementIsVisible ? "projectCard hideCard" : "projectCard"}><img style={heroImageStyling} alt="HeroImage" 
        src={props.image}></img>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <Badge bg="primary">
        Research
      </Badge>
      <Badge bg="primary">
        UX Design
      </Badge>
      <Badge bg="primary">
        Figma
      </Badge>
      <Badge bg="primary">
        Adobe Illustrator
      </Badge>
      <br></br>
        <a href={props.link}><Button>Investigate</Button></a>
        </div>
    )
}

export default ProjectCard