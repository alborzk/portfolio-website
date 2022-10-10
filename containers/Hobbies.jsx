import React from "react";
import { hobbies } from "../portfolio";
import { Col, Container, Row } from "reactstrap";
import { Fade } from "react-reveal";
import HobbiesCard from "../components/HobbiesCard";

const Hobbies = () => {
	return hobbies && (
		<section className="section pb-100 bg-primary">
			<Container className="text-center">	
			<Fade left duration={2000}><h1 className="text-white my-4 display-3"  id="section-title"><strong>{"Things I Enjoy"}</strong></h1></Fade>
				<Row className="row-grid align-items-start">
					{hobbies.map((data, i) => {
						return <HobbiesCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Hobbies;
