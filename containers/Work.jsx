import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { workSection } from "../portfolio";

const Work = () => {
	return workSection && (
		<section className="">
			<Container className="text-center my-5 section section-lg">	
			<Fade right duration={2000}><h1 className="display-3" id="section-title"><strong>{workSection.title}</strong></h1></Fade>
			{workSection.data.map((section, index) => {
				return (
					<Row className="pt-5 text-justify" key={index}>
						<Col lg="4" className="order-2 order-lg-1">
							<Fade left duration={2000}>
								{/* <div className="d-flex justify-content-center flex-wrap mb-2">
									<img
										src={section.companylogo}
										style={{
											objectFit: "scale-down",
											left: 0,
											right: 0,
											top: "7rem",
											marginLeft: "auto",
											marginRight: "auto",
											width: "10rem",
											height: "10rem",
											borderRadius: "50%",
										}}
										className="shadow mb-3"
										alt={section.companylogo}
										>							
								</img></div> */}
								<DisplayLottie
									animationPath={section.lottieAnimationFile}
								/>
							</Fade>
						</Col>
						<Col lg="8" className="order-1 order-lg-2">
							<Fade right duration={2000}>
								<h3 className="mb-3" id="section-title">{section.company}</h3>
									{section.positions.map((position, i) => {
										return (
											<Row className="mb-4" key={index}>
											<Col lg="16" className="order-2 order-lg-1">
											<h5 className="" id="section-title">{position.title}</h5>
											<p><em><strong>{position.duration}</strong></em></p>
											{position.responsibilities.map((responsibility, i) => {
												return (
													<Row className="" key={index}>
													<Col lg="16" className="">
														<p className="mb-1"><strong>{responsibility}</strong></p>
													</Col>
													</Row>
												)})}
											</Col>
										</Row>
										)})}							
								{/* <div className="d-flex justify-content-center flex-wrap mb-2">
									{section.job1.map((skill, i) => {
										return (
											<Fragment key={i}>
												<div
													className="icon icon-lg icon-shape shadow-sm rounded-circle m-1"
													id={skill.skillName.replace(/\s/g, '')}
												>
													<Icon
														icon={
															skill.fontAwesomeClassname
														}
														data-inline="false"
													></Icon>
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
								</div> */}
							</Fade>
						</Col>
					</Row>
				);
			})}
		</Container>
		</section>
	);
};

export default Work;
