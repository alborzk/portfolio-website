import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import { UncontrolledCollapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const DividerNavItem = () => (
  <NavItem>
    <div
      style={{
        width: "2px",
        height: "24px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        margin: "0 15px",
      }}
    />
  </NavItem>
);

const Navigation = () => {
	const [collapseClasses, setCollapseClasses] = useState("");
	const onExiting = () => setCollapseClasses("collapsing-out");

	const onExited = () => setCollapseClasses("");

	useEffect(() => {
		let headroom = new Headroom(document.getElementById("navbar-main"));
		// initialise
		headroom.init();
	});

	return (
		<>
          <header className="header-global">
                <Navbar
                    className="navbar-main navbar-transparent navbar-light headroom"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        <Link href="/" passHref>
                            <NavbarBrand className="mr-lg-5">
                                <h3 className="text-white" id="nav-title">
                                    {greetings.name}
                                </h3>
                            </NavbarBrand>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            id="navbar_global"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <UncontrolledCollapse
                            toggler="#navbar_global"
                            navbar
                            className={collapseClasses}
                            onExiting={onExiting}
                            onExited={onExited}
                        >
							<div className="navbar-collapse-header">
								<Row>
									<Col className="collapse-brand" xs="6">
										<h3
											className="text-black"
											id="nav-title"
										>
											{greetings.name}
										</h3>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar_global"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav
								className="align-items-lg-center ml-lg-auto"
								navbar
							>
							<NavItem>
								<ScrollLink
								to="skills"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="nav-link"
								style={{ cursor: "pointer" }}
								>
								Skills
								</ScrollLink>
							</NavItem>	
							<NavItem>
								<ScrollLink
								to="work"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="nav-link"
								style={{ cursor: "pointer" }}
								>
								Career
								</ScrollLink>
							</NavItem>
							<NavItem>
								<ScrollLink
								to="projects"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="nav-link"
								style={{ cursor: "pointer" }}
								>
								Projects
								</ScrollLink>
							</NavItem>
							<DividerNavItem />
								{socialLinks.email && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Email"
											className="nav-link-icon"
											href={socialLinks.email}
											target="_blank"
										>
											<Icon icon="ant-design:mail-filled" width="16px" height="16px"></Icon>
											<span className="nav-link-inner--text d-lg-none ml-2">
												Email
											</span>
										</NavLink>
									</NavItem>
								)}								
								{socialLinks.twitter && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Twitter"
											className="nav-link-icon"
											href={socialLinks.twitter}
											target="_blank"
										>
											<Icon icon="fa-brands:twitter" width="16px" height="16px"></Icon>
											<span className="nav-link-inner--text d-lg-none ml-2">
												Twitter
											</span>
										</NavLink>
									</NavItem>
								)}
{								socialLinks.facebook && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Facebook"
											className="nav-link-icon"
											href={socialLinks.facebook}
											target="_blank"
										>
											<Icon icon="bi:facebook" width="16px" height="16px"></Icon>
											<span className="nav-link-inner--text d-lg-none ml-2">
												Facebook
											</span>
										</NavLink>
									</NavItem>
								)}								
								{socialLinks.instagram && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Instagram"
											className="nav-link-icon"
											href={socialLinks.instagram}
											target="_blank"
										>
											<Icon icon="bi:instagram" width="16px" height="16px"></Icon>
											<span className="nav-link-inner--text d-lg-none ml-2">
												Instagram
											</span>
										</NavLink>
									</NavItem>
								)}																
								{socialLinks.github && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Github"
											className="nav-link-icon"
											href={socialLinks.github}
											target="_blank"
										>
											<Icon icon="bi:github" width="16px" height="16px"></Icon>
											<span className="nav-link-inner--text d-lg-none ml-2">
												Github
											</span>
										</NavLink>
									</NavItem>
								)}
								{socialLinks.linkedin && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Linkedin"
											className="nav-link-icon"
											href={socialLinks.linkedin}
											target="_blank"
										>
											<Icon icon="fa-brands:linkedin-in" width="16px" height="16px"></Icon>
											<span className="nav-link-inner--text d-lg-none ml-2">
												Linkedin
											</span>
										</NavLink>
									</NavItem>
								)}
								{socialLinks.medium && (
									<NavItem>
										<NavLink
											rel="noopener"
											aria-label="Medium"
											className="nav-link-icon"
											href={socialLinks.medium}
											target="_blank"
										>
											<Icon icon="cib:medium-m" width="16px" height="16px"></Icon>
											<span className="nav-link-inner--text d-lg-none ml-2">
												Medium
											</span>
										</NavLink>
									</NavItem>
								)}
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Navigation;
