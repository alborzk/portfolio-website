import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	Col,
} from "reactstrap";

import { Fade } from "react-reveal";
import { Icon } from "@iconify/react";
import DisplayLottie from "./DisplayLottie";

const HobbiesCard = ({ data }) => {
	return (
		<Col lg="3" className="my-4">
			<Fade duration={2000}>
				<Card
					style={{ flex: 1 }}
					className="card-lift--hover mb-3 text-center rounded-4"
				>
					<CardBody className="align-items-center">
						{/* <img
							src={data.companylogo}
							style={{
								objectFit: "contain",
								left: 0,
								right: 0,
								top: "12rem",
								marginLeft: "auto",
								marginRight: "auto",
								width: "6rem",
								height: "6rem",
								borderRadius: "10%",
							}}
							alt={data.companylogo}
						/> */}
						<Icon icon={data.icon}data-inline="false" width="100px" height="100px%"></Icon>						
							{/* <DisplayLottie
								animationPath={data.lottieAnimationFile}
							/> */}
						<CardTitle tag="h4" className="mt-4 mb-1"  id="section-title"><strong>
							{data.name}</strong>
						</CardTitle>
						{/* <CardSubtitle tag="h5" className="mb-2">
							{data.role}
						</CardSubtitle>
						<CardSubtitle>{data.date}</CardSubtitle> */}
						<CardText
							tag="div"
							className="description my-3 text-center"
						>
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}><strong>{desc}</strong></li>;
									  })
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default HobbiesCard;
