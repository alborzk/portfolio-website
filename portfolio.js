import emoji from "react-easy-emoji";

export const greetings = {
	name: "Alborz Khakbazan",
	title: "Welcome!",
	desc: [
		emoji("Thanks for checking out my portfolio! I'm a 4th year computer science student based in Winnipeg, Canada with a wide array of programming knowledge. This website was coded using React, Next.js and Bootstrap by me! 😄"),
		"Currently, I'm looking for co-op work for Winter 2023. Please continue reading to learn more about me and what I can offer!",
	],
};

export const openSource = {
	githubUserName: "alborzk",
};

export const contact = {};

export const socialLinks = {
	url: "https://alborzk.me",
	email: "mailto:khakbaza@myumanitoba.ca",
	linkedin: "https://www.linkedin.com/in/alborzk/",
	github: "https://github.com/alborzk",
	instagram: "https://www.instagram.com/_alborzk/",
	facebook: "https://www.facebook.com/alborzkhakbazan2/",
	twitter: "https://twitter.com/_alborzk",
	medium: "https://medium.com/@alborzk",
};

export const aboutSection = {
	title: "The Story So Far...",
	lottie: "/lottie/me.json",
	desc: [
			"I've always looked up to the big players in tech.",
			"But growing up, I've also become more and more fascinated by the worlds of art, music, and fashion.",
			"My goal is to bring some of the values I admire from those worlds into programming - focusing on user-oriented design that is refined and innovative, while still accessible for the average person.",
			"I am extremely passionate about my values, and I love working on projects that push boundaries and introduce new concepts to the world. I'm always looking for new opportunities to learn and grow!",
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
				emoji(" ▪️ Well versed in object-oriented programming and SOLID design principles"),
				emoji(" ▪️ Experience with data structures and algorithms, optimizing for space/time efficiency"),
				emoji(" ▪️ Agile development, version control, issue tracking and unit testing"),
				emoji(" ▪️ Effective prototyping strategies, architecture and software design"),
			],
			softwareSkills: [
				{ skillName: "Java", fontAwesomeClassname: "logos:java", },
				{ skillName: "Python", fontAwesomeClassname: "logos:python", },
				{ skillName: "Git", fontAwesomeClassname: "logos:git-icon", },				
				{ skillName: "Figma", fontAwesomeClassname: "logos:figma", },										
				{ skillName: "Android Studio", fontAwesomeClassname: "logos:android-icon", },					
				{ skillName: "Unity", fontAwesomeClassname: "logos:unity", },											
				{ skillName: "IntelliJ", fontAwesomeClassname: "logos:intellij-idea", },	
				{ skillName: "PyCharm", fontAwesomeClassname: "logos:pycharm", },	
				// { skillName: "Eclipse", fontAwesomeClassname: "logos:eclipse-icon", },			
				{ skillName: "JUnit5", fontAwesomeClassname: "simple-icons:junit5", },												
				{ skillName: "Visual Basic", fontAwesomeClassname: "vscode-icons:file-type-vbproj", },																													
				// { skillName: "Gradle", fontAwesomeClassname: "vscode-icons:file-type-gradle2", },				
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
				{ skillName: "HTML-5", fontAwesomeClassname: "vscode-icons:file-type-html", },
				{ skillName: "CSS-3", fontAwesomeClassname: "vscode-icons:file-type-css", },
				{ skillName: "JavaScript", fontAwesomeClassname: "logos:javascript", },
				// { skillName: "TypeScript", fontAwesomeClassname: "logos:typescript-icon", },				
				{ skillName: "React", fontAwesomeClassname: "logos:react", },
				{ skillName: "Bootstrap", fontAwesomeClassname: "logos:bootstrap", },				
				{ skillName: "Tailwind", fontAwesomeClassname: "logos:tailwindcss-icon", },		
				// { skillName: "Bulma", fontAwesomeClassname: "logos:bulma", },						
				{ skillName: "VSCode", fontAwesomeClassname: "vscode-icons:file-type-vscode", },		
				{ skillName: "Next", fontAwesomeClassname: "logos:nextjs-icon", },		
				{ skillName: "Markdown", fontAwesomeClassname: "vscode-icons:file-type-markdown", },
				// { skillName: "Yarn", fontAwesomeClassname: "vscode-icons:file-type-yarn", },				
				// { skillName: "NPM", fontAwesomeClassname: "logos:npm-icon",},
				// { skillName: "Jekyll", fontAwesomeClassname: "cib:jekyll", },	
			],
		},
		{
			title: "Systems & Databases",
			lottieAnimationFile: "/lottie/skills/systems.json",
			skills: [
				emoji(" ▪️ Solid understanding of computer organization and low-level programming"),
				emoji(" ▪️ Experience constructing relational databases and SQL queries"),
				emoji(" ▪️ Practiced smart database design via ER diagrams and normalization"),					
			],
			softwareSkills: [
				{ skillName: "C", fontAwesomeClassname: "noto-v1:letter-c",},
				{ skillName: "Shell", fontAwesomeClassname: "vscode-icons:file-type-powershell", },	
				{ skillName: "SQL", fontAwesomeClassname: "vscode-icons:file-type-sql", },				
				{ skillName: "Neo4J", fontAwesomeClassname: "simple-icons:neo4j", },	
				{ skillName: "MySQL", fontAwesomeClassname: "vscode-icons:file-type-mysql", },	
				{ skillName: "Assembly", fontAwesomeClassname: "vscode-icons:file-type-assembly", },		
				// { skillName: "Prolog", fontAwesomeClassname: "vscode-icons:file-type-prolog", },																																			
				// { skillName: "OpenGL", fontAwesomeClassname: "logos:opengl", },
				// { skillName: "Drawio", fontAwesomeClassname: "vscode-icons:file-type-drawio", },																							
			],
		},
		{
			title: "On My Radar",
			lottieAnimationFile: "/lottie/skills/radar.json",
			skills: [
				emoji("I haven't worked with these technologies yet, but I'm eager to! Hopefully you'll see them in one of the sections above soon!"),
			],
			softwareSkills: [		
				{ skillName: "C Sharp", fontAwesomeClassname: "vscode-icons:file-type-csharp2", },				
				{ skillName: "Django", fontAwesomeClassname: "logos:django-icon", },
				{ skillName: "Angular", fontAwesomeClassname: "logos:angular-icon", },													
				{ skillName: "Chakra UI", fontAwesomeClassname: "simple-icons:chakraui", },						
				{ skillName: "Redux", fontAwesomeClassname: "logos:redux", },															
				{ skillName: "Docker", fontAwesomeClassname: "logos:docker-icon", },																													
				// { skillName: "C Plus Plus", fontAwesomeClassname: "logos:c-plusplus", },				
				{ skillName: "MongoDB", fontAwesomeClassname: "logos:mongodb-icon", },		
				// { skillName: "PostgreSQL", fontAwesomeClassname: "logos:postgresql", },
				{ skillName: "Firebase", fontAwesomeClassname: "logos:firebase", },	
				{ skillName: "Go", fontAwesomeClassname: "logos:go", },																								
				{ skillName: "Swift", fontAwesomeClassname: "vscode-icons:file-type-swift", },							
				{ skillName: "Kotlin", fontAwesomeClassname: "logos:kotlin-icon", },
				{ skillName: "AWS", fontAwesomeClassname: "logos:aws", },				
				// { skillName: "Arduino", fontAwesomeClassname: "vscode-icons:file-type-arduino", },											
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
		grade: "Leader of Tomorrow Scholar",
		grade2: "President's Scholar",
		descBullets: [
		],
	},
	// 	{
	// 	img: "/img/icons/common/um-icon.jpg",
	// 	schoolName: emoji("University of Manitoba"),
	// 	subHeader: "BSc. in Computer Engineering",
	// 	duration: "Sep 2019 - May 2022 (Transferred)",
	// 	grade: "Leader of Tomorrow Scholar",
	// 	grade2: "President's Scholar",
	// 	descBullets: [
	// 	],
	// },
	// {
		{
		img: "/img/icons/common/vmhs-icon.png",
		schoolName: emoji("Vincent Massey High School"),
		subHeader: "High School Diploma",
		duration: "September 2015 - June 2019",
		grade: "Honor Roll",
		descBullets: [
		],
	},
];

export const workSection = {
	title: "Career",
	resumeLink:
		"https://drive.google.com/file/d/1Tzxv--GOOp3qnMVMYD-4TYeZR6VWutLY/view?usp=sharing",
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
							emoji(" ▪️ At AAFC, I gathered data for 20+ crop research studies, helping to develop new Agronomy methods for Canadian farmers!"),
							emoji(" ▪️ I learned about agricultural fieldwork with a close-knit group of students, working together to ensure that our gathered data was accurate and collected at the appropriate time."),
							emoji(" ▪️ I also composed a number of literature reviews, working directly with researchers to aid in writing scientific papers!"),
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
							emoji(" ▪️ In my second year, I directed a small team of fellow engineering students to fund and organize Graduation ceremonies for 150+ graduating engineers!"),
							emoji(" ▪️ I represented the directorship within UMES, formally speaking to 80+ members during meetings and casting important votes on its behalf."),
							emoji(" ▪️ I also connected with sponsors and maintained professional relationships to keep our funding secure."),							
						],
					},
					{
						title: "First Year Committee Director",
						duration: "Sep 2019 - Aug 2020",
						responsibilities: [
							emoji(" ▪️ In my first year, I led a team of fellow freshmen, planning and organizing events for 800+ others within the faculty!"),
							// emoji(" ▪️ I acted as the representative for 300+ engineering freshmen, speaking on their behalf at meetings and learning about the formal procedures within UMES."),
							emoji(" ▪️ I ushered the planning for fun events such as our Bob Ross Paint Night and November Nintendo Night, which had incredible turnouts and were executed with no issues!"),
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
							emoji(" ▪️ At Domino's, I ran the store during the day - fulfilling orders while also multitasking to prepare the store and its inventory for the supper rush."),
							emoji(" ▪️ I spearheaded supper rushes under incredible pressure, often preparing 200+ items in an hour along with a team of 3-4 other line cooks!"),
							emoji(" ▪️ I played a managerial role for the store and its employees, making sure orders were consistently high quality and ready under target numbers."),
						],
					},
			// 		{
			// 			title: "Customer Service Representative",
			// 			duration: "Aug 2016 - Jul 2018",
			// 			responsibilities: [
			// 				emoji(" ▪️ In my first team-oriented job, I frontlined customer service, making sure that every customer received a quality order and was satisfied with their experience!"),
			// 				emoji(" ▪️ I played a support role for the team by restocking ingredients, folding boxes, and routing orders to make intense supper rushes smoother for everybody"),
			// 				emoji(" ▪️ I also learned how to make pizzas for the first time - which I do at home all the time now!"),
			// 			],
			// 		},				
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
							emoji(" ▪️ Starting out my journey, I refereed youth soccer games from ages 9-18, with older divisions requiring intense concentration and confidence in making decisions."),
							emoji(" ▪️ I communicated fouls and reasonings to players, coaches, and parents, resolving conflicts that arose as a result!"),
							emoji(" ▪️ I often did my job independently, without a budget for assistants or linesmen."),
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
		desc: "I love to play with friends, and I'm just about always up to date on the current NBA season. Go Raptors, and go Heat!"
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
		name: "Roundtable (WIP)",
		tools: [
				{ toolName: "TypeScript", toolIcon: "bxl:typescript", },											
				{ toolName: "React", toolIcon: "bxl:react", },
				{ toolName: "Tailwind", toolIcon: "bxl:tailwind-css", },
				{ toolName: "MongoDB", toolIcon: "bxl:mongodb", },					
				// { toolName: "Next", toolIcon: "tabler:brand-nextjs", },											
				{ toolName: "Docker", toolIcon: "bxl-docker", },	
				{ toolName: "Git", toolIcon: "bxl:git", },							
				// { toolName: "Vercel", toolIcon: "ion:logo-vercel", },																		
			],				
		desc: "A web app for friends who love movie nights, to help them pick a movie to watch.",
		github: "https://github.com/anandp1/random-movie-picker",
		// demo: "https://alborzk.me",
	},		
	{
		name: "Portfolio Website",
		tools: [
				{ toolName: "HTML5", toolIcon: "bxl:html5", },
				{ toolName: "CSS3", toolIcon: "bxl:css3", },
				{ toolName: "JavaScript", toolIcon: "bxl:javascript", },											
				{ toolName: "React", toolIcon: "bxl:react", },
				{ toolName: "Next", toolIcon: "tabler:brand-nextjs", },											
				{ toolName: "Bootstrap", toolIcon: "bxl:bootstrap", },			
				{ toolName: "Vercel", toolIcon: "ion:logo-vercel", },																		
			],				
		desc: "This is the website you're currently viewing! It's probably my favorite project I've worked on so far.",
		github: "https://github.com/alborzk/portfolio-website",
		demo: "https://alborzk.me",
	},
	{
		name: "Virtual Closet",
		tools: [
				{ toolName: "Java", toolIcon: "la:java", },
				{ toolName: "Android Studio", toolIcon: "ic:sharp-android", },
				{ toolName: "JUnit5", toolIcon: "simple-icons:junit5", },											
				// { toolName: "HTML5", toolIcon: "bxl:html5", },
				// { toolName: "CSS3", toolIcon: "bxl:css3", },
				{ toolName: "Bulma", toolIcon: "mdi:bulma", },
				{ toolName: "Git", toolIcon: "bxl:git", },																						
			],				
		desc: "View your clothes, organize them by label, and plan your future outfits all from your Android device!",
		github: "https://github.com/alborzk/virtual-closet",
		site: "https://alborzk.github.io/virtual-closet/website/index.html",
	},
	{
		name: "FocusTime",
		tools: [
				{ toolName: "HTML5", toolIcon: "bxl:html5", },
				{ toolName: "CSS3", toolIcon: "bxl:css3", },
				{ toolName: "JavaScript", toolIcon: "bxl:javascript", },	
				{ toolName: "Git", toolIcon: "bxl:git", },							
			],		
		desc: "A high-fidelity prototype web app to help you boost your productivity and track your progress!",
		github: "https://github.com/alborzk/focustime",
		demo:"https://humayrar.github.io/focustime/",
	},
	{
		name: "LeagueDB",
		tools: [
				{ toolName: "Java", toolIcon: "la:java", },			
				{ toolName: "SQL", toolIcon: "carbon:sql", },
				{ toolName: "MySQL", toolIcon: "fontisto:mysql", },
				{ toolName: "Git", toolIcon: "bxl:git", },							
			],		
		desc: "A database tool for the video game “League of Legends”, allowing users to see tables of game data or get results for specific queries!",
		github: "https://github.com/alborzk/league-db",
	},
	{
		name: "Object Recognition Research",
		tools: [
				{ toolName: "Markdown", toolIcon: "mdi:language-markdown", },
				{ toolName: "Jekyll", toolIcon: "simple-icons:jekyll", },						
			],				
		desc: "A research paper on how intelligent systems recognize and track objects via neural networks.",
		github: "https://github.com/alborzk/object-recognition-research",
		demo:"https://drive.google.com/file/d/1IvOiPM2kWaKn5M2CvKjLmir2ZMWfpyBU/view",
		site: "https://alborzk.github.io/object-recognition-research/paper",
	},	
	{
		name: "Robo-Run",
		tools: [
				{ toolName: "Processing", toolIcon: "file-icons:processing", },			
				{ toolName: "OpenGL", toolIcon: "file-icons:opengl", },						
			],				
		desc: "A simple runner game that puts you in control of a very determined little robot!",
		github: "https://github.com/alborzk/robo-run",
	},
	{
		name: "Whack-A-Mole",
		tools: [
				{ toolName: "Visual Basic", toolIcon: "mdi:microsoft-visual-studio", },							
			],				
		desc: "A simple whack-a-mole game built with VB.NET. One of the very first projects I ever coded!",
		github: "https://github.com/alborzk/whack-a-mole",
	},	
	// 	{
	// 	name: "HomeBoards",
	// 	tools: [
	// 			{ toolName: "Figma", toolIcon: "ph:figma-logo-fill", },			
	// 			{ toolName: "Git", toolIcon: "bxl:git", },						
	// 		],			
	// 	desc: "A horizontal prototype - virtually build your properties, create tasks that need to get done, and view them by walking through your rooms!",
	// 	github: "https://github.com/alborzk/robo-run",
	// },
];

export const recommendations = [
	{ name: "VSCode", subtitle: "Programming Tools", logo: "img/icons/common/recommendations/vscode.png", link: "https://code.visualstudio.com/" },
	{ name: "IntelliJ", subtitle: "Programming Tools", logo: "img/icons/common/recommendations/intellij.png", link: "https://www.jetbrains.com/idea/" },
	{ name: "PyCharm", subtitle: "Programming Tools", logo: "img/icons/common/recommendations/pycharm.png", link: "https://www.jetbrains.com/pycharm/" },
	// { name: "Copilot", subtitle: "Programming Tools", logo: "img/icons/common/recommendations/copilot.png", link: "https://github.com/features/copilot" },
	{ name: "Scribe", subtitle: "Image Capture", logo: "img/icons/common/recommendations/scribe.png", link: "https://scribehow.com/" },
	{ name: "Gyazo", subtitle: "Image Capture", logo: "img/icons/common/recommendations/gyazo.png", link: "https://gyazo.com/" },
	{ name: "Spark", subtitle: "Communication", logo: "img/icons/common/recommendations/spark.png", link: "https://sparkmailapp.com/"},	
	{ name: "Typeform", subtitle: "Surveys", logo: "img/icons/common/recommendations/typeform.png", link: "https://www.typeform.com/" },
	{ name: "Vercel", subtitle: "Web Hosting", logo: "img/icons/common/recommendations/vercel.jpg", link: "https://vercel.com/" },
	// { name: "NameCheap", subtitle: "Web Hosting", logo: "img/icons/common/recommendations/namecheap.png", link: "https://www.namecheap.com/hosting/" },	
	{ name: "Magic Eraser", subtitle: "Utilities", logo: "img/icons/common/recommendations/eraser.svg", link: "https://www.magiceraser.io/"},
	{ name: "Squoosh", subtitle: "Utilities", logo: "img/icons/common/recommendations/squoosh.jpg", link: "https://squoosh.app/" },	
	{ name: "Figma", subtitle: "Prototyping", logo: "img/icons/common/recommendations/figma.png", link: "https://www.figma.com/" },
	{ name: "Iconify", subtitle: "Resources", logo: "img/icons/common/recommendations/iconify.png", link: "https://iconify.design/" },
	{ name: "Blush", subtitle: "Resources", logo: "img/icons/common/recommendations/blush.jpg", link: "https://blush.design/"},	
	// { name: "Haikei", subtitle: "Resources", logo: "img/icons/common/recommendations/haikei.png", link: "https://haikei.app/" },
	{ name: "Canva", subtitle: "Resources", logo: "img/icons/common/recommendations/canva.jpg", link: "https://https://www.canva.com/"},	
	// { name: "Personas", subtitle: "Resources", logo: "img/icons/common/recommendations/personas.png", link: "https://personas.draftbit.com/" },
	{ name: "Unsplash", subtitle: "Resources", logo: "img/icons/common/recommendations/unsplash.png", link: "https://unsplash.com/"},
	{ name: "Dall-E", subtitle: "Resources", logo: "img/icons/common/recommendations/dalle.png", link: "https://openai.com/dall-e-2/"},
	// { name: "Undraw", subtitle: "Resources", logo: "img/icons/common/recommendations/undraw.png", link: "https://undraw.co/" },
	// { name: "Conic", subtitle: "Resources", logo: "img/icons/common/recommendations/conic.png", link: "https://conic.style/" },
	// { name: "Shape Divider", subtitle: "Resources", logo: "img/icons/common/recommendations/shapediv.png", link: "https://shapedivider.app/" },
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
		"A computer science student skilled in Java and Web Development.",
	author: "Alborz Khakbazan",
	image: "img/icons/common/avatar.jpg",
	url: "https://alborzk.me",
	keywords: [
		"Alborz", "Alborz Khakabzan", "Alborz Portfolio ", "Alborz Khakbazan Portfolio", "Portfolio", "@alborzk", "alborzk",
	],
}
