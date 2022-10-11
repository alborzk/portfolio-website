import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade, Bounce } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
	return skillsSection && (
		<Container className="text-center my-5 section">		
			<Fade duration={2000}>
			<h1 className="display-3" id="section-title"><strong>{skillsSection.title}</strong></h1>			
			<p className="lead my-7">{skillsSection.subTitle}</p>	
			</Fade>
			{skillsSection.data.map((section, index) => {
				return (
					<Row className="my-6" key={index}>
						<Col lg="6" className="order-2 order-lg-1">
							<Fade left duration={2000}>
								<div class="w-100 px-5 py-4">
								<DisplayLottie
									animationPath={section.lottieAnimationFile}
								/>
								</div>
							</Fade>
						</Col>
						<Col lg="6" className="order-1 order-lg-2">
							<Fade duration={2000}>
								<h3 className="h3 mb-2" id="section-title"><strong>{section.title}</strong></h3>
								<div className="d-flex justify-content-center flex-wrap mb-2">
									{section.softwareSkills.map((skill, i) => {
										return (
											<Fragment key={i}>
												<div
													className="icon icon-lg icon-shape rounded-4 m-1"
													id={skill.skillName.replace(/\s/g, '')}
												>
													<Icon icon={skill.fontAwesomeClassname}data-inline="false"></Icon>
												</div>
												<UncontrolledTooltip
													delay={0}
													placement="bottom"
													target={skill.skillName.replace(/\s/g, '')}
												>
													{skill.skillName}
												</UncontrolledTooltip>
											</Fragment>
										);
									})}
								</div>
								<div>
									{section.skills.map((skill, i) => {
										return <p className="text-center" key={i}><strong>{skill}</strong></p>;
									})}
								</div>
							</Fade>
						</Col>
					</Row>
				);
			})}
		</Container>
	);
};

export default Skills;
