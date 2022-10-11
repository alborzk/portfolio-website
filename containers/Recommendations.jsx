import React from "react";
import { recommendations } from "../portfolio";
import { Col, Container, Row } from "reactstrap";
import { Fade } from "react-reveal";
import RecommendCard from "../components/RecommendCard";

const Recommendations = () => {
	return recommendations && (
		<section className="section pb-100 bg-primary">
			<Container className="text-center">	
			<Fade duration={2000}><h1 className="text-white my-5 display-3"  id="section-title"><strong>{"You Might Like"}</strong></h1></Fade>
				<Row className="row-grid align-items-start">
					{recommendations.map((data, i) => {
						return <RecommendCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Recommendations;
