export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Andrea Hanifaputri',
    position: 'International Admissions Officer at TRU',
    img: 'assets/Dea.png',
    review:
      'Highly recommend him for any Automation Projects. He transformed our outdated student admission and enrolment system into an automated and user-friendly platform. His attention to detail and commitment to quality are unmatched.',
  },
  {
    id: 2,
    name: 'Arun Triads',
    position: 'Video Creation Manager at White Digital',
    img: 'assets/Arun.png',
    review:
      'Murukesh’s passion in Web development is truly impressive. He worked with me in a robust and scalable solution for a business site, and the CTR have significantly increased since the launch. He’s a true professional!',
  },
  {
    id: 3,
    name: 'Neslyn',
    position: 'Full Stack Developer at Oracle',
    img: 'assets/Neslyn.png',
    review:
      'I can’t say enough good things about Murukesh. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Balakrishnan',
    position: 'Founder & CEO of Studio F2.0',
    img: 'assets/Balu.png',
    review:
      'Murukesh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique SaaS app with Next.js 14, Tailwind CSS, TypeScript and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://github.com/Murukesh-Pillai/AI_Podcastr-',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/convex.png',
      },
    ],
  },
  {
    title: 'CollaborativeCanvas - Real Time Figma Clone',
    desc: 'A minimalistic Figma clone to show how to add real-world features like live collaboration with cursor chat, comments, reactions, and drawing designs (shapes, image upload) on the canvas using fabric.js.',
    subdesc:
      'With CollaborativeCanvas, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://collaborative-canvas-iota.vercel.app',
    texture: '/textures/project/figma2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/liveblocks.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows. [Live Website Work in Progress]',
    href: '',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/twilio.png',
      },
    ],
  },
  {
    title: 'Three.js 3D Portfolio',
    desc: 'Built with React.js for handling the user interface, Three.js for rendering 3D elements, and styled with TailwindCSS, the 3D Minimalistic portfolio is a website project.',
    subdesc:
      'Hover over career milestones to trigger interactive 3D animations that bring professional journey to life. Browse through projects while watching live demos inside a 3D computer model, seamlessly switching between different projects.',
    href: 'https://3d-portfolio-nine-chi.vercel.app/',
    texture: '/textures/project/3dportfolio.mp4',
    logo: '/assets/mlogo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/threejslogo.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Thompson Rivers University',
    pos: 'Automation Engineer',
    duration: '2023 - 2024',
    title: "Designed and implemented an end-to-end automation solution. This involved integrating data from multiple sources and reducing manual intervention. My work ensured a seamless, user-friendly experience for the Admissions Officers while significantly lowering operational costs.",
    icon: '/assets/trulogo.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Pantech Solutions',
    pos: 'Fullstack Web Developer',
    duration: '2020 - 2021',
    title: "Built a women’s safety website featuring live location tracking and emergency alerts. The platform enables real-time updates, ensuring enhanced safety and quick response during emergencies.",
    icon: '/assets/pantechlogo.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Studio F2.0',
    pos: 'Front-End Web Developer',
    duration: '2018 - 2020',
    title: "Developed a dynamic and user-friendly platform for the company, enabling efficient browsing and event booking. The site features a visually appealing interface optimized for performance and accessibility, providing a seamless experience for users.",
    icon: '/assets/f2logo.svg',
    animation: 'salute',
  },
];
