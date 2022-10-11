import React from "react";

import { Button } from "reactstrap";
import { Icon } from "@iconify/react";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
	return (
		<div className="btn-wrapper text-lg">
			{socialLinks.url && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="dark"
					rel="noopener"
					aria-label="Email Me!"
					href={socialLinks.email}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<Icon icon="ant-design:mail-filled" width="20px" height="20px"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.linkedin && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="dark"
					rel="noopener"
					aria-label="Linkedin"
					href={socialLinks.linkedin}
					target="_blank"
				>
					<span className="btn-inner--icon">
						<Icon icon="fa-brands:linkedin-in" width="20px" height="20px"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.github && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="dark"
					href={socialLinks.github}
					rel="noopener"
					aria-label="Github"
					target="_blank"
				>
					<span className="btn-inner--icon">
						<Icon icon="bi:github" width="20px" height="20px"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.instagram && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="dark"
					href={socialLinks.instagram}
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
				>
					<span className="btn-inner--icon">
						<Icon icon="simple-icons:instagram" width="20px" height="20px"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.facebook && (
				<Button
					className="btn-icon-only rounded-circle ml-1"
					color="dark"
					href={socialLinks.facebook}
					target="_blank"
					rel="noopener"
					aria-label="Facebook"
				>
					<span className="btn-inner--icon">
						<Icon icon="akar-icons:facebook-fill" width="20px" height="20px"></Icon>
					</span>
				</Button>
			)}	
			{socialLinks.twitter && (
				<Button
					className="btn-icon-only rounded-circle"
					color="dark"
					href={socialLinks.twitter}
					target="_blank"
					rel="noopener"
					aria-label="Twitter"
				>
					<span className="btn-inner--icon">
						<Icon icon="bi:twitter" width="20px" height="20px"></Icon>
					</span>
				</Button>
			)}
			{socialLinks.medium && (
				<Button
					className="btn-icon-only rounded-circle"
					color="dark"
					href={socialLinks.medium}
					target="_blank"
					rel="noopener"
					aria-label="Medium"
				>
					<span className="btn-inner--icon">
						<Icon icon="cib:medium-m" width="20px" height="20px"></Icon>
					</span>
				</Button>
			)}
		</div>
	);
};

export default SocialLinks;
