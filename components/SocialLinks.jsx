import React from "react";

import { Button } from "reactstrap";
import { Icon } from "@iconify/react";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			{/* {socialLinks.url && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="white"
					rel="noopener"
					aria-label="URL"
					href={socialLinks.url}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<i className="fa-solid fa-link" />
					</span>
				</Button>
			)} */}
			{socialLinks.linkedin && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="twitter"
					rel="noopener"
					aria-label="Linkedin"
					href={socialLinks.linkedin}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<Icon icon="fa-brands:linkedin-in"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.github && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="github"
					href={socialLinks.github}
					rel="noopener"
					aria-label="Github"
					target="_blank"
				>
					<span className="btn-inner--icon">
						<Icon icon="bi:github"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.instagram && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="instagram"
					href={socialLinks.instagram}
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
				>
					<span className="btn-inner--icon">
						<Icon icon="simple-icons:instagram"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.facebook && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="facebook"
					href={socialLinks.facebook}
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<span className="btn-inner--icon">
						<Icon icon="akar-icons:facebook-fill"></Icon>
					</span>
				</Button>
			)}	
			{socialLinks.twitter && (
				<Button
					className="btn-icon-only rounded-circle"
					color="twitter"
					href={socialLinks.twitter}
					target="_blank"
					rel="noopener"
					aria-label="Twitter"
				>
					<span className="btn-inner--icon">
						<Icon icon="bi:twitter"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.medium && (
				<Button
					className="btn-icon-only rounded-circle"
					color="white"
					href={socialLinks.medium}
					target="_blank"
					rel="noopener"
					aria-label="Medium"
				>
					<span className="btn-inner--icon">
						<Icon icon="cib:medium-m"></Icon>
					</span>
				</Button>
			)}
		</div>
	);
};

export default SocialLinks;
