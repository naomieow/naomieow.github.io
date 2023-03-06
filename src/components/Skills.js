import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Aliqua sunt cupidatat est ex minim sunt magna est dolor fugiat dolor. Veniam eu reprehenderit duis qui sunt commodo dolor cupidatat amet. Qui labore tempor elit reprehenderit laborum enim irure. Reprehenderit Lorem exercitation adipisicing proident dolor consequat velit veniam in irure cillum aute. Labore proident duis laboris consequat qui aliqua sit nisi cillum tempor deserunt cupidatat.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="ddddd" />
                                    <h5>Python Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="ddddd" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="ddddd" />
                                    <h5>Java Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="ddddd" />
                                    <h5>Datapack Creator</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}