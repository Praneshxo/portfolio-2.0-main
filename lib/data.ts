import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'praneshv29@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Pranesh, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Praneshxo' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/pranesh-v-0b1a89290/' },
    
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Raydot',
        slug: 'Raydot',
        liveUrl: '',
        year: 2024,
        description: `
      A comprehensive healthcare
workflow automation system designed to improve patient care, reduce administrative burden, and streamline
healthcare operations. The system leverages machine learning (ML) models, Optical Character Recognition
(OCR) technology, and AI-powered solutions to automate and enhance various aspects of healthcare
management. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li> AI-Driven Clinical Decision Support System (CDSS)</li>
        <li> Interactive Chatbot (Powered by Biomistral AI)</li>
        <li> Automated Medical Documentation (Gen AI + NLP)</li>
        <li> Personalized Health Plans with AI Insights</li>
        <li> Fully Responsive: Optimized for all device sizes</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Frontend Developer <br/>
      
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'gsap',
            'React Hook Form',
            'Node',
            'Express'
        ],
        thumbnail: '/projects/thumbnail/Raydot.png',
        longThumbnail: '/projects/long/Raydot.png',
        images: [
            '/projects/images/Raydot.png',
            '/projects/images/Raydot_2.png',
        ],
    },
    {
    title: 'Elvio',
    slug: 'Elvio',
    techStack: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Distributed Edge Functions',
        'Microservices Architecture',
        'GSAP',
        'Cloud-Native Database',
        'Real-time Analytics',
    ],
    thumbnail: '/projects/thumbnail/Elvio.png',
    longThumbnail: '/projects/long/Elvio.png',
    images: [
        '/projects/images/Elvio1.png',
        '/projects/images/Elvio2.png',
        '/projects/images/Elvio3.png',
    ],
    liveUrl: 'https://elvio.site',
    year: 2026,
    description: `Engineered a high-performance career preparation platform featuring a gamified DSA and SQL mastery engine, 
    built on a scalable microservices architecture with distributed edge compute and strict session integrity.`,
    role: `As the lead developer, I:<br/>
  - Architected a **microservices-based backend** using distributed **Edge Functions**, enabling high-availability payment verification and real-time progress tracking with sub-millisecond latency.<br/>
  - Developed a **quantitative gamification engine** for DSA and SQL preparation, implementing streak-based reward systems and "Skill Gap" visualizations to drive user engagement.<br/>
  - Engineered a **single-device session enforcement** mechanism, utilizing managed cloud state and real-time polling to ensure account security and prevent concurrent logins.<br/>
  - Built a high-fidelity frontend using **React, TypeScript, and Tailwind CSS**, featuring complex interactive UI components for coding challenges and quantitative performance analytics.<br/>
  - Optimized platform performance by implementing **parallel data fetching (Promise.all)** and debounced search indexing, reducing dashboard load times by 60% and ensuring instant data retrieval.<br/>
  - Designed and deployed a **segregated data architecture** for multi-topic learning paths, providing students with granular performance metrics and targeted preparation milestones.`,
},

    {
        title: 'Lunaria',
        slug: 'Lunaria',
        techStack: [
            'React',
            'Redux',
            'Tailwind CSS',
            'Gsap',
            'GPT-4',
        ],
        thumbnail: '/projects/thumbnail/Lunaria.png',
        longThumbnail: '/projects/long/Lunaria.png',
        images: [
            '/projects/images/Lunaria.png',
            '/projects/images/Lunaria1.png',
            '/projects/images/Lunaria2.png',
        ],
        liveUrl:'https://lunaria-test.netlify.app/Home',
        year: 2025,
        description:'Mood Tracker is a responsive web application developed for XYZ Wellness Center to help users monitor and manage their emotional well-being. The app features mood-based themes, interactive visualizations, and AI-powered self-care recommendations. Built with React, Vite, PostgreSQL, and Tailwind CSS, it integrates Gemini AI for personalized insights and suggestions. The platform encourages daily mood logging, journaling, goal tracking, and optional community support to promote mental health awareness and self-growth.',
        role: `As the sole developer and React specialist, I:<br/>
            - Designed and developed the entire application using React, Vite, Tailwind CSS, Node.js, and PostgreSQL.<br/>
            - Integrated Gemini AI for emotion-based activity suggestions and mental wellness tips.<br/>
            - Used GSAP for dynamic, mood-responsive UI animations and transitions.<br/>
            - Built interactive mood visualizations using Chart.js/Recharts.<br/>
            - Developed secure authentication with JWT and bcrypt, and handled API communication using Axios.<br/>
            - Implemented journaling (text, voice, image), goal-setting features, and optional peer mood sharing for community support.`,

    },
    {
        title: 'Nex',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Remotion',
            'Redux',
            'Tailwind CSS',
            'Gsap',
            'GPT-4',
            
        ],
        thumbnail: '/projects/thumbnail/Nex1.png',
        longThumbnail: '/projects/long/Nex1.png',
        images: [
            '/projects/images/Nex1.png',
            '/projects/images/Nex2.png',
            '/projects/images/Nex3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
    description: 
    'An AI-powered educational platform that transforms static PDFs into interactive, video-based learning content. Built using React, Remotion, and PostgreSQL, it automates the creation of engaging educational videos using customizable templates and Gemini AI, making learning more accessible and scalable across diverse regions.',
     role: `As the React developer and version control lead, I:<br/>
        - Developed and maintained the entire frontend using <b>React</b>, ensuring responsiveness and scalability.<br/>
        - Created dynamic, template-based educational videos using <b>Remotion</b>, a JavaScript library for programmatic video rendering.<br/>
        - Integrated Gemini and GPT-4 to generate personalized learning and career roadmap content.<br/>
        - Implemented and managed <b>PostgreSQL</b> for efficient content and user data storage.<br/>
        - Collaborated via Git for full project lifecycle management, including version control, issue tracking, and deployment readiness.`,

    },
    // {
    //     title: 'Consulting Finance',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title:    'React Developer Intern',
        company:  'Read Automation',
        duration: 'Sep 2024 - Dec  2025',
    },
    {
        title:    'Fullstack Webdeveloper Intern',
        company:  'Yar Tech',
        duration: 'Dec 2024 - Mar 2025',
    },
    {
        title:    '  ',
        company:  '  ',
        duration: '  ',
    },
    {
        title:    '   ',
        company:  '   ',
        duration: '   ',
    },
];
