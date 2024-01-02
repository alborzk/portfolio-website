import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Fade } from "react-reveal";
import { Button, Container, Row, Col } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
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
					<div className="shape bg-primary"></div>
					<Container className="py-lg-md d-flex">
						<div className="col px-0 section">
							<Row>
								<Col lg="6">
								<Fade left duration={2000}>
									<h1 className="fs-3 mt-5 mb-3 text-white fw-bold">
									{greetings.title + " "}
									</h1>
									{greetings.desc.map((desc, i) => {
                        			return <p className="fs-6 text-white ls-1" key={i}>
                            			{desc}</p>;
                    				})}															
									<div className="btn-wrapper my-4">
									</div>
									</Fade>	
								</Col>
								<Col className="order-lg-1" lg="2">					
								</Col>
								<Col className="order-lg-1" lg="4">    
									<Fade right duration={2000}>
									<div className="content-center">
										<img
											src={"/img/icons/common/profile.jpg"}
											style={{ width: "80%", borderRadius: "50%"}}
											alt=""
											className="img-center shadow--hover mt-6 mb-4 mx-4"
										>							
										</img>
																		{/* <DisplayLottie
									animationPath={"/lottie/me.json"}
								/> */}
									</div>
									</Fade>							 
								</Col>								
							</Row>
						</div>
					</Container>
				</section>
				{/* <section className="section-sm section-shaped pb-20"><div className="shape bg-dark"></div></section>      */}
			</div>
		</main>
	);
};

export default Greetings;
