import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-reveal";
import { Button, Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { workSection } from "../portfolio";

const Work = () => {
	return workSection && (
		<section className="">
			<Container className="text-center my-5 section section-lg">	
			<Fade duration={2000}><h1 className="display-3" id="section-title"><strong>{workSection.title}</strong></h1></Fade>
			{workSection.data.map((section, index) => {
				return (
					<Row className="pt-5 text-justify" key={index}>
						<Col lg="4" className="order-2 order-lg-1">
							<Fade duration={2000}>
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
							</Fade>
						</Col>
					</Row>
				);
			})}
			<Fade top duration={2000}>
				<h4 className="mb-1 mt-lg-6" id="section-title"><strong>See more!</strong></h4>
			</Fade>
			<Fade duration={2000}><Row lg="4"><Col>
			<Button className="btn-primary btn-icon mt-3 mb-3 ml-1 rounded-4" color="default" href={workSection.resumeLink}>
					<Icon icon="ri:file-paper-fill" width="24px" height="24px"></Icon>
					<span className="btn-inner--text text-capitalize">
						Resume
					</span>
			</Button>
			<Button className="btn-dark btn-icon mt-3 ml-1 mb-3 rounded-4" color="default" href={workSection.linkedIn}>
					<Icon icon="ci:linkedin" width="24px" height="24px"></Icon>
					<span className="btn-inner--text text-capitalize">
						LinkedIn
					</span>
			</Button>		
			</Col>
			</Row>			
			</Fade>
		</Container>
		</section>
	);
};

export default Work;
