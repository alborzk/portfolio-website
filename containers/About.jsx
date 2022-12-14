import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { aboutSection } from "../portfolio";

const About = () => {
	return aboutSection && (
		<Container className="my-5 section">
                <div>
                <Fade right duration={2000}>
                    <h1 className="text-center display-3 pb-3" id="section-title">
                        <strong>{aboutSection.title}</strong></h1>
                    {/* <div class="w-75 p-3 mx-8" style="background-color: #eee;">
                        <DisplayLottie animationPath={aboutSection.lottie} /> </div> */}
                </Fade>
                <Fade right duration={2000}>
                    {aboutSection.desc.map((desc, i) => {
                        return <h4 className="lead text-center" key={i}>
                            {desc}</h4>;
                    })}
                </Fade>
            </div>       
        </Container>
    );
    };
export default About;