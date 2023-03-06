import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Mystcraft: Ages",
            description: "Minecraft mod based on the game franchise \"Myst\".",
            imgUrl: projImg1
        },
        {
            title: "Voidborn",
            description: "Post-End Minecraft datapack based around the void.",
            imgUrl: projImg2
        },
        {
            title: "Command Database",
            description: "A database and guide for all things Minecraft command and function based!",
            imgUrl: projImg3
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Projects</h2>
                                <p>Exercitation ipsum pariatur exercitation id adipisicing veniam velit aute culpa ex. Duis sint irure adipisicing Lorem in deserunt exercitation veniam minim ad id aliquip. Velit cupidatat excepteur non do excepteur exercitation nostrud eiusmod sunt aute pariatur eu aliqua. Ullamco minim aute dolore veniam Lorem deserunt excepteur voluptate incididunt tempor. In excepteur anim voluptate ex in occaecat sunt ipsum veniam.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__salideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard 
                                                            key={index}
                                                            title={project.title}
                                                            description={project.description}
                                                            imageUrl={project.imgUrl}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            Second
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            Third
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}