import { url } from "inspector";
import { sub } from "motion/react-client";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 2,
    title: "Borderless Development",
    description: "Crafting Android experiences for a connected world.",
    className: "md:col-span-1 lg:col-span-1", // Each item takes up 1 column on md and lg
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "Powered by cutting-edge technologies that deliver results. My toolkit includes: Android SDK, Jetpack Compose, Objectbox, Kotlin, Java, Firebase.",
    className: "md:col-span-1 lg:col-span-1", // Each item takes up 1 column on md and lg
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "About Me",
    description: "Tech enthusiast passionate about development, always exploring new technologies and building efficient solutions. I enjoy coding, problem-solving, and turning ideas into high-performing software while continuously learning and innovating.",
    className: "md:col-span-1 lg:col-span-1", // Each item takes up 1 column on md and lg
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "md:col-span-1 lg:col-span-1", // Each item takes up 1 column on md and lg
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "doojoo | AI Lyrics Generator",
    des: "Doojoo is an innovative AI lyrics generator that transforms simple prompts into custom, creative song lyrics tailored to your musical style and emotional needs.",
    img: "/preview1.png",
    iconLists: ["/i1.png", "/i2.webp", "/i3.png", "/i4.svg", "/i5.webp"],
    link: "https://play.google.com/store/apps/details?id=com.doojoo.lyric&hl=en_US",
  },
]
export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },

];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/dererkcopeland"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/derek-copeland/"
  },
];

export const education = 
  {
    id: 1,
    title: "BS: Information Technology - Software Development\nSpecialization: Mobile Development",
    graduationDate: "Expected - 2027",
    subheading: "Capella University",
    description: `I am actively engaged in Capella University's Bachelor of Science in Information Technology (BSIT) program, specializing in Software Development with a focused concentration in Mobile Development. This comprehensive program is designed to provide me with a robust understanding of modern software development principles, methodologies, and practices, grounded in the Software Engineering Body of Knowledge (SWEBOK).

    My coursework emphasizes the development of increasingly complex computer programs and end-user mobile applications, employing Agile methods for efficient and iterative development. I am gaining proficiency in the full software development lifecycle, encompassing software requirements definition, design, construction, testing, and the implementation of robust application security measures, all tailored to the unique demands of mobile platforms.
    
    The Mobile Development concentration specifically prepares me to apply core software development knowledge to the creation of applications designed for mobile environments. I am learning to plan, evaluate, design, and manage mobile applications across various scales, from single-user applications to complex enterprise solutions. This specialization is equipping me with the skills and knowledge necessary to pursue a successful career as a mobile application designer, mobile developer, or software engineer, and to pursue relevant industry certifications in the mobile development field.`,
    image: "/capella1.jpg",

  };

