import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import { Card, CardBody, Col, Button, UncontrolledTooltip } from "reactstrap";
import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
	return (
		<Col lg="6">
			<Fade bottom duration={2000} >
				<Card className="shadow-lg--hover shadow mt-4 rounded-4">
					<CardBody>
						<div className="d-flex px-3">
							<div className="pl-4">
								<h4 className="mb-0"  id="section-title"><strong>{data.name}</strong></h4>

								{data.tools ? (
									// <span className="btn-inner--icon">
									// 	<i className="fa-brands fa-github" />
									// </span>
								data.tools.map((tool, i) => {
										return (
											<Fragment key={i}>
												<div
													className="icon icon-shape rounded-4"
													id={tool.toolName.replace(/\s/g, '')}
												>
													<Icon
														icon={
															tool.toolIcon
														}
														data-inline="false"
													></Icon>
												</div>
												<UncontrolledTooltip
													delay={0}
													placement="bottom"
													target={tool.toolName.replace(/\s/g, '')}
												>
													{tool.toolName}
												</UncontrolledTooltip>
											</Fragment>
										);
									})						
								) : null}	
								<p className="description mt-0">{data.desc}</p>
								{data.github ? (
									<Button
										className="btn-icon  my-2"
										color="github"
										href={data.github}
										target="_blank"
										rel="noopener"
										aria-label="Github"
									>
										<span className="btn-inner--icon">
											<i className="fa-brands fa-github" />
										</span>
									</Button>
								) : null}
								{data.site ? (
									<Button
										className="btn-icon"
										color="info"
										href={data.site}
										target="_blank"
										rel="noopener" aria-label="Twitter"
									>
										<span className="btn-inner--icon">
											<i className="fa-solid fa-circle-info" />
										</span>
									</Button>
								) : null}								
								{data.demo ? (
									<Button
										className="btn-icon"
										color="secondary"
										href={data.demo}
										target="_blank"
										rel="noopener" aria-label="Twitter"
									>
										<span className="btn-inner--icon">
											<i className="fa-solid fa-arrow-up-right-from-square" />
										</span>
									</Button>
								) : null}
							</div>
						</div>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ProjectsCard;
