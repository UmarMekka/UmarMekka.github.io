import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import heroImage from './GuntzBurger-Hero.png'
import imgEmpathy from './GuntzBurger-DesignProcess-Empathy.png'
import imgDefine from './GuntzBurger-DesignProcess-Define.png'
import imgIdeate from './GuntzBurger-DesignProcess-Ideate.png'
import imgPrototype from './GuntzBurger-DesignProcess-Prototype.png'
import imgTest from './GuntzBurger-DesignProcess-Test.png'
import imgCompAnalysis from './GuntzBurger-Competitive-Analysis.png'
import imgPersona1 from './GuntzBurger-Persona1.png'
import imgPersona2 from './GuntzBurger-Persona2.png'
import imgUserJourney from './GuntzBurger-UserJourney.png'
import imgIA from './GuntzBurger-IA.png'
import imgUserFlow from './GuntzBurger-UserFlow.png'
import imgMockUps from './GuntzBurger-MockUps.png'
import imgAffinity from './GuntzBurger-Affinity.jpg'

const Guntz = () => {
    const heroImageStyling = {
        width: "90%",
        // padding:"35px 0 35px 0"
    }

    return (
        
        <Container>
      <Row className="d-flex align-items-center justify-content-center guntz-hero">

        <Col lg={7} className="case-study-intro">
        <p className="greeting">UX Case Study For</p>
            <h1>Guntz Burger</h1>
            <h2 className="guntz-phase">Native App Case Study</h2>
            <p>This case study is for a hypothetical restaurant called Guntz Burger, a German restaurant in need of a mobile app. They are having issues with website activity not translating into conversions, and management is hoping a user friendly app will decrease drop off rates.
            </p>
            
                <p><b>Role:</b> UX Research, UX Design, and Visual Design</p>
                <p><b>Duration:</b> 12 Weeks</p>
                <p><b>Tools:</b> Figma, Miro, Adobe Illustrator, Google Sheets, Google Docs</p>
            
            </Col>
            <Col className={"text-center"} lg={5}>
            <img style={heroImageStyling} alt="HeroImage" src={heroImage}></img>
        </Col>
      </Row>
      <Row>
      <h2 className="guntz-phase">Design Process</h2>
      <h3>To Create A User Focused Application...</h3>
      <p>The Design Thinking process to empathize with our users and iterate designs until their needs were met.</p>
      <Col className="center-text">
      <img alt="design process" src={imgEmpathy} className="design-process-img"></img>
        <h4>Empathize</h4>
        <p>
            User Interviews<br/>
            Pain Points<br/>
            Competitive Analysis
        </p>
        </Col>
        <Col className="center-text">
        <img alt="design process" src={imgDefine} className="design-process-img"></img>
        <h4>Define</h4>
        <p>
            Problem Statement<br/>
            Empathy Maps<br/>
            Personas<br/>
            User Journey
        </p>
        </Col>
        <Col className="center-text">
        <img alt="design process" src={imgIdeate} className="design-process-img"></img>
        <h4>Ideate</h4>
        <p>
            Brainstorming<br/>
            Userflows<br/>
            Information Architecture
        </p>
        </Col>
        <Col className="center-text">
        <img alt="design process" src={imgPrototype} className="design-process-img"></img>
        <h4>Prototype</h4>
        <p>
            Mockups<br/>
            Lo-Fi Wireframes<br/>
            Hi-Fi Wireframes<br/>
            Prototyping
        </p>
        </Col>
        <Col className="center-text">
        <img alt="design process" src={imgTest} className="design-process-img"></img>
        <h4>Test</h4>
        <p>
            Usability Tests
        </p>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <h2 className="guntz-phase">Empathize Phase</h2>

        <h2 className="guntz-indent">Research & Interview Insights</h2>
      <h3>User Research</h3>
      <p>After interviewing several restaurant app users, the most common pain points fell into two categories, process and support. These pain points helped out greatly during the definiation phase when it came to creating personas and brainstorming features.</p>
      <h3>Pain Points</h3>
      <Col>
        <h4>Process</h4>
            <p>Lack of menu item customization features<br/>
            Difficulty browsing menus<br/>
            Inaccurate menu item images</p>
      </Col>
      <Col>
        <h4>Support</h4>
        <p> Lack of information regarding parking and the surrounding area<br/>
        Not enough details regarding menu items<br/>
        No way to filter by dietary restriction</p>
      </Col>
      <h2 className="guntz-indent">Competitive Analysis</h2>
      <h3>An Analysis Competitors Comparing Details And Features.</h3>
      <p>To create a Competitive Analysis, I researched 2 direct competitors (German restaurants in the Houston area), and 2 indirect competitors (an Austin German restaurant, and a Houston based Polish restaurant).</p>
      <img alt="design process" src={imgCompAnalysis} className="guntz-demo-img"></img>
      </Row>
      <hr></hr>
      <Row>
        <h2 className="guntz-phase">Define Phase</h2>

        <h2 className="guntz-indent">Situation & Goals</h2>
        <Col lg={6}>
        <h4>Problem</h4>
            <p>The overwhelming consensus amongst our site's users is that they often hesistant to choose our establishment due to difficulty getting questions.</p>
      </Col>
      <Col lg={6}>
        <h4>Solution</h4>
        <p> Since the biggest problem our customers face is finding answers to their questions, the proposed solution is to present answers at points of the user journey when the questions would initially arise, by adding information pages and pop ups.</p>
      </Col>
      <h2 className="guntz-indent">Personas</h2>
      <h3>Let's Meet Our Users</h3>
      <p>2 personas were made out of aggregate intervee data, to give our users a face.</p>
        <Col lg={6}>
        <img alt="design process" src={imgPersona1} className="guntz-demo-img"></img>
      
        </Col>
        <Col lg={6}>
        <img alt="design process" src={imgPersona2} className="guntz-demo-img"></img>
      
        </Col>
        <h2 className="guntz-indent">User Journey</h2>
      <h3>The Emotional Roller Coaster!</h3>
      <p>Mapping out the process our users might go through to better understand them.</p>
      <img alt="design process" src={imgUserJourney} className="guntz-demo-img"></img>
      
      </Row>
      <hr></hr>
      <Row>
        <h2 className="guntz-phase">Ideate Phase</h2>

        <h2 className="guntz-indent">Information Architecture</h2>
        <h3>What Do We Need?</h3>
        <p>Our information architecture helps provide developers an overhead preview of how the app will be laid out.</p>
        <img alt="design process" src={imgIA} className="guntz-demo-img-medium"></img>
        <h2 className="guntz-indent">User Flows</h2>
        <h3>How Are We Getting There?</h3>
        <p>Zooming in on the tasks in our user journey, we need to outline how our users will accomplish those tasks in our app.</p>
        <img alt="design process" src={imgUserFlow} className="guntz-demo-img-medium"></img>
        
        </Row>
        <hr></hr>
      <Row>
        <h2 className="guntz-phase">Prototype Phase</h2>

        <h2 className="guntz-indent">Information Architecture</h2>
        <h3>Wireframes/Mock Ups</h3>
        <p>After drafting low fidelity wireframes on paper, digital wireframes are drafted and used for initial usability studies. Notes from the initial usability study are organized in the test phase and taken into account when drafting the high fidelity mock ups.</p>
        <img alt="design process" src={imgMockUps} className="guntz-demo-img"></img>
        </Row>
        <hr></hr>
        <Row>
        <h2 className="guntz-phase">Test Phase</h2>

        <h2 className="guntz-indent">Usability Study</h2>
        <h3>Testing Lo-Fi Prototypes</h3>
        <p>5 participants were asked to participate in usability studies where they were asked to perform certain tasks. 2 of the usability studies were moderated, while 3 were unmoderated.</p>
        <h4>Questions</h4>
        <p>Do the changes made to the website improve or hinder its usability?
        <br/>
        What parts of the user-journey, if any, are leading to the drop off rates?
        <br/>
        Is the user satisfied at the end of their user journey?
        <br/>
        Are the users left with any questions they initially thought would be answered by the website?
        <br/>
        What are further improvements that could be made to the website?
        <br/>
        Is the user likely to use the site again?</p>
        <h2 className="guntz-indent">Affinity Diagram</h2>
        <h3>Organizing Themes</h3>
        <p>Notes from each study were transferred to digital post it notes on Miro and organized into themes using an affinity diagram.</p>
        <img alt="design process" src={imgAffinity} className="guntz-demo-img"></img>
        
        </Row>
        <hr></hr>
      <Row>
        <h2 className="guntz-phase">Repeat Prototype and Test Phases</h2>

        <h2 className="guntz-indent">Iterations</h2>
        <h3>Practice Makes Perfect</h3>
        <p>The UX process never ends. Even after updates are made to the app using themes from the test phase and project is pushed to development, it's important to keep up with how users feel about the final product.</p>
        <img alt="design process" src={heroImage} className="guntz-demo-img-medium"></img>
        </Row>
      </Container>
    )
}

export default Guntz