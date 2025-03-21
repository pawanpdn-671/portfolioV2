export const experiences = [
	{
		company: "Innovfide Technologies",
		startDate: "01 Dec 2021",
		endDate: "01 Mar 2022",
		role: "Frontend Developer Intern",
		desc: [
			"Designing, developing, and testing UI/UX for websites/web applications.",
			"Accurately translate user and business needs into functional frontend code.",
			"Build reusable code and libraries for future use.",
		],
	},
	{
		company: "Pivony",
		startDate: "31 May 2022",
		endDate: "30 April 2023",
		role: "Fullstack Developer",
		desc: [
			"Architected and developed sophisticated analytics dashboards providing critical business insights and data visualization",
			"Engineered and implemented multiple feature-rich dashboards enabling businesses to track KPIs and make data-driven decisions",
			"Collaborated with cross-functional teams to design and deliver innovative features enhancing platform capabilities",
			"Optimized dashboard performance and user experience through efficient data handling and modern UI/UX practices",
		],
	},
	{
		company: "Contract Work (Intellexio, Meypato, Needle)",
		startDate: "12 August 2023",
		endDate: "Current",
		role: "React Developer",
		desc: [
			"Spearheaded entire frontend architecture and development at Meypato, making key technical decisions and establishing best practices",
			"Led development of Notion automation systems and CRM tools at Needle using Remix.js, improving business workflow efficiency",
			"Developed and maintained TypingMentor platform at Intellexio, implementing comprehensive frontend solutions",
			"Engineered user-centric applications with modern tech stack, focusing on performance and scalability",
			"Orchestrated end-to-end development including UI/UX planning, API integration, and performance optimization",
		],
	},
];

export const projects = [
	{
		name: "StudioSpark",
		techUsed: ["NextJS 14", "Prisma", "MySQL", "Stripe", "Tailwind", "Shadcn-UI", "Serverless Actions"],
		desc: "A powerful software tool built for agencies. A SaaS product developed with latest Nextjs 14, with serverless action, MySql(Prisma) and custom stripe integration. Features include media storage, kanban board, notifications, graphs and charts, full website builder, and stripe subscription plans.",
		deployLink: "https://studiospark.vercel.app/",
		codeLink: "https://github.com/pawanpdn-671/studio-spark",
	},
	{
		name: "ZenBoard",
		techUsed: ["NextJS", "Tailwindcss", "Prisma", "Shadcn-UI", "MySQL", "Clerk", "Stripe"],
		desc: "Zenboard is a full-stack web application where user can buy/sell digital assets. User can explore products and buy them or they can sell with an amount on the platform. Developed with next.js/tailwindcss/shadcn-ui/trpc and stripe webhooks for payment transaction.",
		deployLink: "https://zenboard-next.vercel.app/",
		codeLink: "https://github.com/pawanpdn-671/zenBoard",
	},
	{
		name: "DigitalTradeHub",
		techUsed: ["NextJS", "Express", "MongoDB", "Shadcn-UI", "Tailwind", "tRPC", "Payload"],
		desc: "A full-stack web application where user can buy/sell digital assets. User can explore products and buy them or they can sell with an amount on the platform. Developed with next.js/tailwindcss/shadcn-ui/trpc and stripe webhooks for payment transaction.",
		deployLink: "https://digitaltradehub-kgsd.onrender.com/",
		codeLink: "https://github.com/pawanpdn-671/digital-trade-hub",
	},
	{
		name: "CodeOn",
		techUsed: ["NextJS", "Firebase", "Tailwindcss"],
		desc: "A competitive programming platform, where the user can practice coding for interviews. The user needs to sign in to save the progress. The solutions are also being provided in the form of video.",
		deployLink: "https://codeon-pawanpdn-671.vercel.app/",
		codeLink: "https://github.com/pawanpdn-671/code-on",
	},
];

export const otherProjects = [
	{
		name: "PureLodge",
		techUsed: ["React", "Express", "MongoDB", "Stripe", "Tailwind", "Cloudinary", "E2E Test"],
		desc: "An express full-stack web application where user can explore staycations. They can also book and add hotel after signing up. It allows you to search and define the place where you would like to visit and many other filters to make you choose the right place.",
		deployLink: "https://pure-lodge-mern.onrender.com/",
		codeLink: "https://github.com/pawanpdn-671/pure-lodge-mern",
	},
	{
		name: "VroomVibe",
		techUsed: ["NextJS", "Typescript", "Tailwindcss"],
		desc: "A landing page for cars manufacturing companies and it's models.",
		deployLink: "https://vroom-vibe.vercel.app/",
		codeLink: "https://github.com/pawanpdn-671/VroomVibe",
	},
	{
		name: "PromptsWorld",
		techUsed: ["NextJS", "Mongodb", "Tailwindcss"],
		desc: "An AI prompting tool where user can discover, create and share creative prompts. ",
		deployLink: "https://prompts-world.vercel.app/",
		codeLink: "https://github.com/pawanpdn-671/next-prompt",
	},
];

export const about = {
	title: "Passionately Evolving Code.",
	desc: "👋Hi there! I'm Pawan, a passionate frontend developer with a keen eye for creating engaging and intuitive user experiences. My journey in the world of web development began with a curiosity to bring ideas to life through code.",
	skills:
		"💻 I specialize in crafting modern, responsive websites and web applications using cutting-edge technologies such as React.js and Nextjs. Proficient in HTML, CSS, and JavaScript, I pay meticulous attention to detail, ensuring pixel-perfect designs and seamless interactions.",
	sets_apart:
		"🌟 What sets me apart is my commitment to staying updated with the latest industry trends and technologies. I'm always eager to embrace new challenges and learn new skills to enhance my development toolkit.",
	connect:
		"📬 If you're looking for a frontend developer who is not only technically proficient but also passionate about creating beautiful and functional user interfaces, I'd love to connect! Feel free to reach out, and let's embark on exciting projects together.",
};

export const gameList = [
	{
		name: "whack-a-mole",
		path: "/games/whack-a-mole",
		desc: " A typical Whac-A-Mole machine consists of a waist-level cabinet with a play area and display screen, and a large, soft mallet.",
		source: "/assets/images/whackmole-thumbnail.jpg",
		mdl: "/assets/images/whackamole-mdl.png",
	},
	{
		name: "flappy-bird",
		path: "/games/flappy-bird",
		desc: "Flappy Bird is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them.",
		source: "/assets/images/flappy-thumbnail.jpg",
		mdl: "/assets/images/flappy-mdl.png",
	},
	{
		name: "candy-crush",
		path: "/games/candy-crush",
		desc: "Candy Crush is game based on swapping two adjacent candies among several on the gameboard to make a row or column of at least three matching-colored candies.",
		source: "/assets/images/candycrush-thumbnail.jpg",
		mdl: "/assets/images/candy-crush-mdl.png",
	},
	{
		name: "snake",
		path: "/games/snake",
		desc: "Snake is a sub-genre of action where player must keep the snake from colliding with both other obstacles and itself, which gets harder as the snake lengthens.",
		source: "/assets/images/snake-thumbnail.jpg",
		mdl: "/assets/images/snake-mdl.png",
	},
	{
		name: "space-invaders",
		path: "/games/space-invaders",
		desc: "Space Invaders is a Japanese shooting video game released in 1978 by Taito. It was developed by Tomohiro Nishikado, who was inspired by other media: Breakout, The War of the Worlds, and Star Wars.",
		source: "/assets/images/space-invaders-thumbnail.jpg",
		mdl: "/assets/images/space-invaders-mdl.png",
	},
];
