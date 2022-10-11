import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EducationCard = ({ education }) => {
	return (
		<Fade duration={2000} >
			<Card className="card-lift--hover mt-4 rounded-4">
				<CardBody>
					<div className="px-3 text-center">
						<img
							src={education.img}
							style={{ 
								width: "15%",
								height:"15%",
								borderRadius: "20%",
								}}
							alt=""
							className=" img-center img-fluid mb-4"
						>							
						</img>
						<div className="pl-4">
							<h5 className=""><strong>
								{education.schoolName}
							</strong></h5>
								<h6>{education.subHeader}</h6>
							<p className="description"><em>{education.duration}</em></p>					
							<p className="description mt-3">{education.desc}</p>
							<ul>
								{education.descBullets
									? education.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
							{ education.grade && (
								<Badge color="primary" className="mr-1" id="badge-title">
									{education.grade}
								</Badge>
							)}
							{ education.grade2 && (
								<Badge color="primary" className="mr-1" id="badge-title">
									{education.grade2}
								</Badge>
								
							)}									
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default EducationCard;
