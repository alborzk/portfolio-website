import emoji from "react-easy-emoji";

export const greetings = {
	name: "Alborz Khakbazan",
	title: "Welcome!",
	d1:
		emoji("Thanks for checking out my portfolio! I'm a 4th year Computer Science student with a wide array of programming knowledge. This website was coded using React and Bootstrap by me! 😄"),
	d3: "Currently, I'm looking for co-op work for Winter 2023. Please continue reading to learn more about what I can offer!",
		resumeLink:
		"https://drive.google.com/file/d/14HIUatHcPad9_CQO7oZSLg4EUvGFFu3J/view?usp=sharing",
};

export const openSource = {
	githubUserName: "alborzk",
};

export const contact = {};

export const socialLinks = {
	url: "https://alborzk.me",
	linkedin: "https://www.linkedin.com/in/alborzk/",
	github: "https://github.com/alborzk",
	instagram: "https://www.instagram.com/__alborzk",
	facebook: "https://www.facebook.com/alborzkhakbazan2/",
	twitter: "https://twitter.com/home?lang=en",
	medium: "https://medium.com/@alborzk",
};

export const aboutSection = {
	title: "The Story So Far...",
	lottieAnimationFile: "/lottie/me.json",
	// subTitle:
	// 	"Broad knowledge of programming languages and frameworks, with a focus on Java and Web Dev",
	paragraphs: [
			"I've always looked up to the big players in tech.",
			"But growing up, I've also become more and more fascinated by the worlds of art, music, and fashion.",
			"My goal is to bring some of the values I admire from those worlds into programming - focusing on user-oriented design that is refined and innovative, while still accessible for the average person.",
			"I am extremely passionate about my values, and I love working on projects that push boundaries and introduce new concepts to the world. For 7+ years now, I've been practicing my craft and I'm always looking for new opportunities to learn and grow.",
			"",
	],		
}

export const skillsSection = {
	title: "Skillset",
	// subTitle:
	// 	"I have broad experience with programming languages, practices, and frameworks!",
	data: [
		{
			title: "Software Engineering",
			lottieAnimationFile: "/lottie/skills/software.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(" ▪️ Well versed in object-oriented programming"),
				emoji(" ▪️ Experience with data structures and algorithms"),
				emoji(" ▪️ Agile development strategies, version control, and unit testing"),
				emoji(" ▪️ Effective prototyping strategies, architecture and software design"),
			],
			softwareSkills: [
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "logos:git-icon",
				},				
				{
					skillName: "Figma",
					fontAwesomeClassname: "logos:figma",
				},										
				{
					skillName: "Android Studio",
					fontAwesomeClassname: "logos:android-icon",
				},					
				{
					skillName: "Unity",
					fontAwesomeClassname: "logos:unity",
				},											
				{
					skillName: "IntelliJ",
					fontAwesomeClassname: "logos:intellij-idea",
				},	
				{
					skillName: "PyCharm",
					fontAwesomeClassname: "logos:pycharm",
				},	
				// {
				// 	skillName: "Eclipse",
				// 	fontAwesomeClassname: "logos:eclipse-icon",
				// },														
				{
					skillName: "JUnit5",
					fontAwesomeClassname: "simple-icons:junit5",
				},																													
				// {
				// 	skillName: "Gradle",
				// 	fontAwesomeClassname: "vscode-icons:file-type-gradle2",
				// },				
			],
		},
		{
			title: "Web Development",
			lottieAnimationFile: "/lottie/skills/webdev.json", // Path of Lottie Animation JSON File
			skills: [
					emoji(" ▪️ Well equipped with modern web development frameworks like React and Bootstrap"),
					emoji(" ▪️ Experience with both structured web apps and simple websites"),
					emoji(" ▪️ Understanding of practices to optimize web performance"),
					emoji(" ▪️ Excellent communicator for API documentation "),		
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				// {
				// 	skillName: "TypeScript",
				// 	fontAwesomeClassname: "logos:typescript-icon",
				// },				
				{
					skillName: "React",
					fontAwesomeClassname: "logos:react",
				},
				{
					skillName: "Next",
					fontAwesomeClassname: "logos:nextjs-icon",
				},		
				{
					skillName: "Bootstrap",
					fontAwesomeClassname: "logos:bootstrap",
				},				
				{
					skillName: "Bulma",
					fontAwesomeClassname: "logos:bulma",
				},						
				{
					skillName: "VSCode",
					fontAwesomeClassname: "vscode-icons:file-type-vscode",
				},				
				{
					skillName: "Yarn",
					fontAwesomeClassname: "vscode-icons:file-type-yarn",
				},				
				// {
				// 	skillName: "NPM",
				// 	fontAwesomeClassname: "logos:npm-icon",
				// },
			],
		},
		{
			title: "Systems & Databases",
			lottieAnimationFile: "/lottie/skills/systems.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(" ▪️ Solid understanding of computer organization and low-level programming"),
				emoji(" ▪️ Experience constructing relational databases and SQL queries"),
				emoji(" ▪️ Practiced smart database design via ER diagrams and normalization"),					
			],
			softwareSkills: [
				{
					skillName: "C",
					fontAwesomeClassname: "noto-v1:letter-c",
				},
				{
					skillName: "Shell",
					fontAwesomeClassname: "vscode-icons:file-type-powershell",
				},	
				{
					skillName: "SQL",
					fontAwesomeClassname: "vscode-icons:file-type-sql",
				},				
				{
					skillName: "Neo4J",
					fontAwesomeClassname: "simple-icons:neo4j",
				},	
				{
					skillName: "MySQL",
					fontAwesomeClassname: "vscode-icons:file-type-mysql",
				},	
				{
					skillName: "Assembly",
					fontAwesomeClassname: "vscode-icons:file-type-assembly",
				},		
				{
					skillName: "Prolog",
					fontAwesomeClassname: "vscode-icons:file-type-prolog",
				},																																			
				{
					skillName: "Drawio",
					fontAwesomeClassname: "vscode-icons:file-type-drawio",
				},																							
			],
		},
				{
			title: "On My Radar",
			lottieAnimationFile: "/lottie/skills/radar.json",
			skills: [
				emoji("I haven't worked with these technologies yet, but I'm eager to! Hopefully you'll see them in one of the sections above soon!"),
			],
			softwareSkills: [
				{
					skillName: "Tailwind",
					fontAwesomeClassname: "logos:tailwindcss-icon",
				},				
				{
					skillName: "Django",
					fontAwesomeClassname: "logos:django-icon",
				},
				{
					skillName: "Angular",
					fontAwesomeClassname: "logos:angular-icon",
				},													
				{
					skillName: "Scala",
					fontAwesomeClassname: "logos:scala",
				},
				{
					skillName: "Go",
					fontAwesomeClassname: "logos:go",
				},																											
				{
					skillName: "C Sharp",
					fontAwesomeClassname: "vscode-icons:file-type-csharp2",
				},
				{
					skillName: "C Plus Plus",
					fontAwesomeClassname: "logos:c-plusplus",
				},				
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb-icon",
				},		
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Firebase",
					fontAwesomeClassname: "logos:firebase",
				},																								
				// {
				// 	skillName: "OpenGL",
				// 	fontAwesomeClassname: "logos:opengl",
				// },
				// {
				// 	skillName: "Processing",
				// 	fontAwesomeClassname: "logos:processing",
				// },				
				{
					skillName: "Kotlin",
					fontAwesomeClassname: "logos:kotlin-icon",
				},
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},				
				// {
				// 	skillName: "Arduino",
				// 	fontAwesomeClassname: "vscode-icons:file-type-arduino",
				// },											
			],				
		},
	],
};

export const educationInfo = [
	{
		img: "/img/icons/common/um-icon.jpg",
		schoolName: emoji("University of Manitoba"),
		subHeader: "BSc. in Computer Science (Co-Op)",
		duration: "Sep 2019 - Present (Feb 2025 Expected)",
		desc: "GPA: 3.44",
		grade: "Leader of Tomorrow Scholar",
		grade2: "President's Scholar",
		descBullets: [
		],
	},
		{
		img: "/img/icons/common/vmhs-icon.png",
		schoolName: emoji("Vincent Massey High School"),
		subHeader: "Diploma",
		duration: "Sep 2015 - Jun 2019",
		grade: "Honor Roll",
		descBullets: [
		],
	},
];

export const workSection = {
	title: "Career",
	// subTitle:
	// 	"A walkthrough of my career so far!",
	data: [
		{
			company: "Agriculture and Agri-Food Canada",
			// companylogo: "img/icons/common/dusecaSoftware.jpg",	
			lottieAnimationFile: "/lottie/career/aafc.json",
			positions: [
						{
						title: "Research Student",
						duration: "May 2020 - Sep 2022",
						responsibilities: [
							emoji(" ▪️ At AAFC, I gathered data for 20+ crop research studies, helping to develop new Agronomic methods for Canadian farmers!"),
							emoji(" ▪️ I learned about agricultural fieldwork with a close-knit group of students, working together to ensure that our gathered data was accurate and collected at the appropriate time."),
							emoji(" ▪️ I also composed a number of literature reviews, working directly with researchers to aid them in writing scientific papers!"),
						],
					}
			],
			job1: [
				// {
				// 	skillName: "HTML-5",
				// 	fontAwesomeClassname: "vscode-icons:file-type-html",
				// },
			],
		},	
		{
			company: "University of Manitoba Engineering Society",
			lottieAnimationFile: "/lottie/career/umes.json",
			positions: [
					{
						title: "Graduation Head Director",
						duration: "Sep 2020 - Aug 2021",
						responsibilities: [
							emoji(" ▪️ In my second year of university, I directed a small team of fellow engineering students to fund and organize the ceremonies for 150+ graduating engineers!"),
							emoji(" ▪️ I represented the Graduation directorship within UMES, formally speaking to 80+ members during meetings and casting important votes on its behalf."),
							emoji(" ▪️ I also connected with company sponsorships and maintained professional relationships via email to ensure funds for grad, even during the pandemic!"),							
						],
					},
					{
						title: "First Year Committee Director",
						duration: "Sep 2019 - Aug 2020",
						responsibilities: [
							emoji(" ▪️ Led a team of first-year engineering students, planning and organizing events for 800+ other students within the faculty"),
							emoji(" ▪️ Acted as the representative for 300+ first-year students in the faculty, speaking on their behalf at meetings and learning about the hierarchy and procedures within the Engineering Society"),
							emoji(" ▪️ Ushered the planning for events such as Bob Ross Paint Night and November Nintendo Night, which had incredible turnouts and were executed without issue"),
						],
					}
			],
		},					
		{
			company: "Domino's Pizza",	
			lottieAnimationFile: "/lottie/career/dominos.json",
			positions: [
					{
						title: "Team Leader",
						duration: "Jul 2018 - Sep 2020",
						responsibilities: [
							emoji(" ▪️ Independently ran the store during the day, fulfilling orders while also multitasking to prepare the store and its inventory for the supper rush"),
							emoji(" ▪️ Spearheaded supper rushes under incredible pressure, often preparing 200+ items in an hour along with a team of 3-4 others"),
							emoji(" ▪️ Managed the store and its employees, ensuring orders were consistently high quality and ready under target numbers"),
						],
					},
					// {
					// 	title: "Crew Trainer",
					// 	duration: "Aug 2017 - Jul 2018",
					// 	responsibilities: [
					// 		emoji(" ▪️ Frontlined customer service and ensured that all customers received quality orders, notifying them of any delays and providing consolation otherwise"),
					// 		emoji(" ▪️ Trained new crew members and crew members looking to move up on customer service strategies, safe food preparation, and other responsibilities"),
					// 		emoji(" ▪️ Introduced new hires to the workplace and helped integrate them into the culture"),
					// 	],
					// },
					// {
					// 	title: "Customer Service Representative",
					// 	duration: "Aug 2016 - Aug 2017",
					// 	responsibilities: [
					// 		emoji(" ▪️ Took and served customer orders, both in-person and over the phone, providing customers with a clean environment and welcoming attitude to help them feel comfortable within the store"),
					// 		emoji(" ▪️ Checked quality and boxed food items exiting the oven, grouping them together with their respective orders for take-out/delivery"),
					// 		emoji(" ▪️ Supported the rest of the staff by restocking ingredients, folding boxes, and routing orders to make intense supper rushes smoother for everybody"),
					// 	],
					// }					
			],
		},
		{
			company: "Brandon Youth Soccer Association",
			lottieAnimationFile: "/lottie/career/bysa.json",
			positions: [
					{
						title: "Referee",
						duration: "May 2015 - Jun 2017",
						responsibilities: [
							emoji(" ▪️ Refereed youth soccer games, from ages 9-18, with older divisions requiring intense concentration and confidence in making decisions, often working independently"),
							emoji(" ▪️ Communicated fouls and reasonings to players, coaches, and parents, resolving conflicts that arose as a result"),
							emoji(" ▪️ Refereed both summer (outdoor) and winter (indoor) seasons"),
						],
					}
			],
		},		
	],
	}

	export const hobbies = [
	{
		name: "Basketball",
		icon: "ic:twotone-sports-basketball",		
		desc: "I love to play with friends, and I'm just about always up to date on the NBA season. Go Raptors!",
	},	
	{
		name: "Gym",
		icon: "la:dumbbell",		
		desc: "I've been weightlifting for almost 3 years. It's kept my mental health rock-solid since, and birthed so many friendships!",
	},
	{
		name: "Music",
		icon: "ic:twotone-headphones",			
		desc: "I collect vinyl records and listen to just about every genre of music. R&B, Hip-Hop, and Indie are my favourites!",
	},	
	{
		name: "Coding!",
		icon: "ant-design:code-twotone",
		desc: "I really do love working on projects - including this website! Java and JavaScript are my favorite languages so far.",
	},				
];

export const projects = [
	{
		name: "Personal Website",
		tools: [
				{
					toolName: "HTML5",
					toolIcon: "bxl:html5",
				},
				{
					toolName: "CSS3",
					toolIcon: "bxl:css3",
				},
				{
					toolName: "JavaScript",
					toolIcon: "bxl:javascript",
				},											
				{
					toolName: "React",
					toolIcon: "bxl:react",
				},
				{
					toolName: "Next",
					toolIcon: "tabler:brand-nextjs",
				},											
				{
					toolName: "Bootstrap",
					toolIcon: "bxl:bootstrap",
				},			
				{
					toolName: "Vercel",
					toolIcon: "ion:logo-vercel",
				},																		
			],				
		desc: "This is the website you're currently viewing! It's probably my favorite project I've worked on so far.",
		github: "https:/alborzk.me",
		demo: "https://alborzk.me",
	},
	{
		name: "Virtual Closet",
		tools: [
				{
					toolName: "Java",
					toolIcon: "la:java",
				},
				{
					toolName: "Android Studio",
					toolIcon: "ic:sharp-android",
				},
				{
					toolName: "JUnit5",
					toolIcon: "simple-icons:junit5",
				},											
				{
					toolName: "HTML5",
					toolIcon: "bxl:html5",
				},
				{
					toolName: "CSS3",
					toolIcon: "bxl:css3",
				},
				{
					toolName: "Bulma",
					toolIcon: "mdi:bulma",
				},
				{
					toolName: "Git",
					toolIcon: "bxl:git",
				},																						
			],				
		desc: "View your clothes, organize them by label, and plan your future outfits all from your Android device!",
		github: "https://github.com/alborzk/virtual-closet",
	},
	{
		name: "FocusTime",
		tools: [
				{
					toolName: "HTML5",
					toolIcon: "bxl:html5",
				},
				{
					toolName: "CSS3",
					toolIcon: "bxl:css3",
				},
				{
					toolName: "JavaScript",
					toolIcon: "bxl:javascript",
				},	
				{
					toolName: "Git",
					toolIcon: "bxl:git",
				},							
			],		
		desc: "A high-fidelity prototype web app to help you boost your productivity and track your progress!",
		github: "https://github.com/alborzk/focustime",
	},
	{
		name: "LeagueDB",
		tools: [
				{
					toolName: "Java",
					toolIcon: "la:java",
				},			
				{
					toolName: "SQL",
					toolIcon: "carbon:sql",
				},
				{
					toolName: "MySQL",
					toolIcon: "fontisto:mysql",
				},
				{
					toolName: "Git",
					toolIcon: "bxl:git",
				},							
			],		
		desc: "A database tool for the video game “League of Legends”, allowing users to see tables of game data or get results for specific queries!",
		github: "https://github.com/alborzk/league-db",
	},
	{
		name: "Robo-Run",
		tools: [
				{
					toolName: "Processing",
					toolIcon: "file-icons:processing",
				},			
				{
					toolName: "OpenGL",
					toolIcon: "file-icons:opengl",
				},						
			],				
		desc: "A simple runner game that puts you in control of a very determined little robot!",
		github: "https://github.com/alborzk/robo-run",
	},
		{
		name: "HomeBoards",
		tools: [
				{
					toolName: "Figma",
					toolIcon: "ph:figma-logo-fill",
				},			
				{
					toolName: "Git",
					toolIcon: "bxl:git",
				},						
			],			
		desc: "A horizontal prototype - virtually build your properties, create tasks that need to get done, and view them by walking through your rooms!",
		github: "https://github.com/alborzk/robo-run",
	},
];

// export const feedbacks = [
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// 	{
// 		name: "John Smith",
// 		feedback:
// 			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
// 	},
// ];

// export const SkillBars = [
// 	{
// 		Stack: "Frontend/Design", //Insert stack or technology you have experience in
// 		progressPercentage: "90", //Insert relative proficiency in percentage
// 	},
// 	{
// 		Stack: "Backend",
// 		progressPercentage: "70",
// 	},
// 	{
// 		Stack: "Programming",
// 		progressPercentage: "60",
// 	},
// ];

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Alborz Khakbazan",
	description:
		"A passionate Full Stack Web Developer and Blockchain Developer.",
	author: "Alborz Khakbazan",
	image: "avatar.jpg",
	url: "https://alborzk.me",
	keywords: [
		"Alborz",
		"Alborz Khakabzan",
		"Alborz Portfolio ",
		"Alborz Khakbazan Portfolio",
		"Portfolio",
		"@alborzk",
		"alborzk",
	],
}
