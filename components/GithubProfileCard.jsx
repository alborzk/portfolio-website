import React from "react";

import { Card, Col, Row, Container } from "reactstrap";
import { Fade, Bounce } from "react-reveal";
import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

const GithubProfileCard = ({ prof }) => {
	return (
		<Card className="section-lg bg-dark shadow-lg border-0">
			<Container className="">
				<Bounce>
				<div className="p-2">
					<Row className="">
						<Col className="order-lg-2" lg="4">
							<img
								src={prof.avatar_url}
								style={{ width: "200px" }}
								alt=""
								className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
							/>
						</Col>
						<Col lg="8" className="order-lg-1">
							<h2 className="display-3 text-white" id="section-title">Lets connect!</h2>
							<p className="lead text-white mt-3">
								Feel free to send me an email, or connect with me at any of the links below!
							</p>
							{/* <p className="text-white mt-3">{prof.bio}</p> */}
							{/* <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{prof.location}
							</div> */}
							<SocialLinks />
						</Col>
					</Row>
				</div>
				</Bounce>
			</Container>
		</Card>
	);
};

export default GithubProfileCard;
