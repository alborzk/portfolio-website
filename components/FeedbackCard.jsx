import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const FeedbackCard = ({ data }) => {
	return (
		<Fade bottom duration={2000} >
			<Card className="card-lift--hover mt-4 rounded-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className=""><strong>{data.name}</strong></h5>
							<p className="description mt-3">{data.feedback}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
};

export default FeedbackCard;
