import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Fade } from "react-reveal";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	});
	return (
		<main>
			<div className="position-relative">
				<section className="section section-lg section-shaped pb-20">
					<div className="shape bg-primary">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<Container className="py-lg-md d-flex">
						<div className="col px-0 section">
							<Row>
								<Col lg="6">
								<Fade left duration={2000}>
									<h1 className="fs-2 mt-5 mb-3 text-white fw-bold">
									{greetings.title + " "}
									</h1>
									{greetings.desc.map((desc, i) => {
                        			return <p className="fs-6 text-white ls-1" key={i}>
                            			{desc}</p>;
                    				})}															
									{/* <SocialLinks /> */}
									<div className="btn-wrapper my-4">
										{/* <Button
											className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
											color="default"
											href={greetings.resumeLink}
										>
											<span className="btn-inner--icon mr-1">
												<i className="fa fa-file" />
											</span>
											<span className="btn-inner--text">
												See My Resume
											</span>
										</Button> */}
									</div>
									</Fade>	
								</Col>
								<Col className="order-lg-1" lg="2">					
								</Col>
								<Col className="order-lg-1" lg="4">
									<Fade right duration={2000}>
									<div className="content-center">
										<img
											src={"/img/icons/common/avatar.jpg"}
											style={{ width: "100%", borderRadius: "50%"  }}
											alt=""
											className="img-center img-fluid shadow shadow-lg--hover mb-4"
										>							
										</img>
									</div>
									</Fade>							
								</Col>								
							</Row>
						</div>
					</Container>
				</section>
			</div>
		</main>
	);
};

export default Greetings;
