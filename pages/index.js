import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const About = dynamic(() => import("../containers/About"));
const Skills = dynamic(() => import("../containers/Skills"));
// const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Work = dynamic(() => import("../containers/Work"));
const Hobbies = dynamic(() => import("../containers/Hobbies"));
const Projects = dynamic(() => import("../containers/Projects"));
const Recommendations = dynamic(() => import("../containers/Recommendations"));
// const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO />
			<Navigation />
			<Greetings />
			<About />
			<Skills />
			{/* <Proficiency /> */}
			<Education />
			<Work/>
			<Hobbies />
			{/* <Feedbacks /> */}
			<Projects />
			<Recommendations />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
