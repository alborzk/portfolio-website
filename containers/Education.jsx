import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import { Fade } from "react-reveal";

const Education = () => {
	return educationInfo && (
		<section className="section pb-100 bg-primary">
			<Container className="text-center">	
			<Fade duration={2000}>
			<h1 className="text-white my-4 display-3" id="section-title"><strong>{"Education"}</strong></h1>
			</Fade>
				<Row className="row-grid align-items-center text-justify">
					{educationInfo.map((info) => {
						return (
							<>
							<Col
								className="order-lg-1"
								lg="3"
							/>
							<Col
								className="order-lg-2"
								lg="6"
								key={info.schoolName}
							>
								<EducationCard education={info} />
							</Col>
							</>
						);
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Education;
