import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import discord_logo from "../assets/img/discord-logo.svg"
import github_logo from "../assets/img/github-logo.svg"
import twitter_logo from "../assets/img/twitter-logo.svg"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">naomieow</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon" />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://github.com/naomieow">
                                <img src={github_logo} alt="Github"/>
                            </a>
                            <a href="https://discord.gg/KyBzvxwgvw">
                                <img src={discord_logo} alt="Discord"/>
                            </a>
                            <a href="https://twitter.com/naomieow_dev">
                                <img src={twitter_logo} alt="Twitter"/>
                            </a>
                        </div>
                        <button className="vvd" onClick={() => console.log("connect")}>
                            <span>Contact me!</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}