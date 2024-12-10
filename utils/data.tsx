import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Crop,
  Pencil,
  Computer, 
  Rocket,
  Github,
  Binary,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={40} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/gustavo-a-espitia/",
  },
  {
    id: 2,
    logo: <Github size={40} strokeWidth={1} />,
    src: "https://github.com/gusespitia",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Services",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Portfolio",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Skills",
    icon: <Binary size={25} color="#fff" strokeWidth={1} />,
    link: "/skills",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Full Stack Developer",
    subtitle: "Syntra Mechelen",
    description:
      "Enrolled in an intensive full-time day program to become a Full Stack Developer, combining frontend and backend expertise. The curriculum included HTML, CSS, JavaScript, PHP, and frameworks such as React and advanced backend technologies. Key modules covered functional and object-oriented programming, REST APIs, security, and project management. During the one-month internship, I created an application that allowed user account management, status posting, and a superuser feature for teachers to monitor student activity. Tools used included TailwindCSS, ShadCN, Vercel, Knex.js, and Userfront for authentication. This hands-on experience strengthened my technical skills and prepared me for professional challenges in web development.",
    date: "Sep 2024",
  },
  {
    id: 3,
    title: "Internship",
    subtitle: "David Verhulst.",
    description:
      "Completed an internship under the guidance of my Syntra professor, where I developed a user management application. The application allowed users to create accounts, post updates, and interact with posts, while professors, acting as superusers, could view all student posts. The project was built using modern technologies: ShadCN, TailwindCSS, React, Node.js, and Vercel. For authentication, Userfront was implemented to manage user access. On the frontend, the setup included a Vite-based workflow with tools like React Router and ESLint, and the backend was powered by Knex.js for database interactions, utilizing PostgreSQL. This comprehensive application streamlined communication and user interactions effectively.",
    date: "Mar 2024",
  },
  {
    id: 2,
    title: "IT Technician and Web Developer",
    subtitle: "Santa Isabel de Hungria - Colombia.",
    description:
      "Completed a comprehensive course covering web domains and hosting, essential web design tools, and foundational technologies like HTML, CSS3, and JavaScript. Gained expertise in creating responsive websites using frameworks such as Bootstrap and tools like Dreamweaver, RocketCake, and Mobirise. Advanced knowledge of WordPress, including theme customization, plugin integration, HTTPS setup, and online payment gateways like WooCommerce. Acquired skills in configuring virtual stores, ensuring site security, and registering websites with search engines. The program emphasized creating modern, dynamic web designs tailored for client needs in a competitive digital landscape.",
    date: "Nov 2011",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 1,
    text: "Years of experience",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 3,
    text: "Satisfied clients",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 4,
    text: "Completed projects",
    lineRight: true,
    lineRightMobile: true,
  },
];

export const serviceData = [
  {
    icon: <Pencil />,
    title: "Web Design",
    description:
      "Creative and professional design of intuitive and visually appealing web interfaces, focusing on user experience.",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    description:
      "Optimization of your online presence with advanced SEO strategies.",
  },
  {
    icon: <Computer />,
    title: "Web Development",
    description:
      "Custom design and development of websites tailored to your needs.",
  },
  {
    icon: <Crop />,
    title: "Branding",
    description:
      "Development of a strong and cohesive brand identity, including logo design, colors, and visual elements.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Price Hunter",
    image: "/image-1.png",
    urlGithub: "https://github.com/gusespitia/price-hunter-frontend",
    urlDemo: "https://pricehunter.surge.sh",
  },

  {
    id: 2,
    title: "GusFlix Clone",
    image: "/image-2.png",
    urlGithub: "https://github.com/gusespitia/netflix-clone",
    urlDemo: "https://netflixen-gustavos-projects-8028da13.vercel.app/login",
  },
  {
    id: 3,
    title: "Eccomerce-coffe",
    image: "/image-3.png",
    urlGithub: "https://github.com/gusespitia/eccomerce-coffe-be-gus",
    urlDemo: "https://ecommerce-coffe-q8n7.vercel.app",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "Amazing platform! The testimonials here are genuine and have helped me make informed decisions. Highly recommended!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Perez",
    description:
      "I love the variety of testimonials available on this page. It's inspiring to see how others have overcome challenges similar to mine. Thanks for this invaluable source of motivation!",
    imageUrl: "/profile3.png",
  },
  {
    id: 3,
    name: "Maria Garcia",
    description:
      "An excellent resource for obtaining authentic opinions about different products and services. It has helped me a lot with online shopping. Bravo for this site!",
    imageUrl: "/profile2.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "What a fantastic discovery! The testimonials here are honest and detailed. I feel more confident making decisions after reading experiences shared by other users.",
    imageUrl: "/profile5.png",
  },
];
