import React from "react"

import Navigation from "./Nav/Nav"
import HeroSection from "./HeroSection/HeroSection";
import SpecialtiesSection from "./SpecialtiesSection";
import ProjectsSection from "./ProjectsSection";
import SpecialtyDesc from "./SpecialtyDesc/SpecialtyDesc";
import BriefsDesc from "./Briefs/Briefs";
import Guntz from "./GuntzBurger/Guntz";

import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container>
        <Navigation />
        <Routes>
          <Route path='/' element={<><HeroSection/><SpecialtiesSection/></>} />
          <Route path='/ux' element={<><SpecialtyDesc/><ProjectsSection/></>} />
          <Route path='/briefs' element={<><BriefsDesc/></>} />
          <Route path='/ux/guntzburger' element={<><Guntz/></>} />
        </Routes>
    </Container>
  )
}

// makes app available to other files
export default App