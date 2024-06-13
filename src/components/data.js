import { FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaBook } from "react-icons/fa"
import { FaCode } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import img1 from '../components/images/project1.png'
import img2 from '../components/images/project3.png'
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import comming from '../components/images/comming.jpg'



export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <FaHome size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <CiUser size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Proyects",
        icon: <FaCode size={25} color="#fff" strokeWidth={1} />,
        link: "/projects",
    },
    /* 
    {
        id: 4,
        title: "Target",
        icon: <FaCode size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    */
    {
        id: 5,
        title: "Contact",
        icon: <CiMail size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const projectsItems = [
    {
        id:1,
        title: "Nike Store",
        img: img1,
        desc: "Proyecto replica de Nike Store",
        link: "https://replynikestore.netlify.app",
        urlGit: "https://github.com/CesarPalma11/Nike_Store/tree/master",
        urlDemo: "https://replynikestore.netlify.app"
    },
    {
        id:2,
        title: "Audi Agency",
        img: img2,
        desc: "Proyecto replica de Audi Agency",
        link: "https://audireply.netlify.app/",
        urlGit: "https://github.com/CesarPalma11/audi_agency",
        urlDemo: "https://audireply.netlify.app/"
    },
    {
        id:3,
        title: "En proceso...",
        img: comming,
        desc: "Proyecto de E-Commerce funcional",
        link: "",
        urlGit: "",
        urlDemo: ""
    },
    {
        id:4,
        title: "En proceso...",
        img: comming,
        desc: "Proyecto replica de Nike Store",
        link: "",
        urlGit: "",
        urlDemo: ""
    },
    
    

]

export const socialLinks = [
    {
        id: 1,
        logo: <FaGithub   size={26} strokeWidth={1} />,
        src: "https://github.com/CesarPalma11",
    },
    {
        id: 2,
        logo: <FaLinkedin size={26} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/cesarpalma11/",
    },
    {
        id: 3,
        logo: <SiGmail size={26} strokeWidth={1} />,
        src: "mailto:cesarpalmag16@gmail.com",
    },
    {
        id: 4,
        logo: <FaTwitter size={26} strokeWidth={1} />,
        src: "",
    },
    {
        id: 5,
        logo: <FaInstagram size={26} strokeWidth={1} />,
        src: "",
    },
];