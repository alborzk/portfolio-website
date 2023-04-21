import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-reveal";

const Projects = () => {
	return projects && (
		<section id="projects" className="section section-lg">
			<Container className="text-center">	
			<Fade duration={2000}><h1 className="mt-4 display-3"  id="section-title"><strong>{"Project Showcase"}</strong></h1></Fade>
				<Row className="row-grid align-items-center text-center section">
					{projects.map((data, i) => {
						return <ProjectsCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Projects;
