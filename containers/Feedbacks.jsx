import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import { Fade } from "react-reveal";

const Feedbacks = () => {
	return feedbacks && (
		<section className="section pb-100 bg-primary">
			<Container className="text-center">	
			<Fade duration={2000}>
			<h1 className="text-white my-4 display-3" id="section-title"><strong>{"Feedback"}</strong></h1>
			</Fade>
				<Row className="row-grid align-items-center">
					{feedbacks.map((data, i) => {
						return (
							<Col key={i} lg={6}>
								<FeedbackCard data={data} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Feedbacks;
