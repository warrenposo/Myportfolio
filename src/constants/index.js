import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    mysql,
    mssql
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "React Developer",
        icon: web,
    },
    {
        title: "Flutter Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Database Administration",
        icon: creator,
    },
    {
        title:"API intergration",
        icon:backend,
    }
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Mysql",
        icon: mysql,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "mssql",
        icon: mssql,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React developer",
        company_name: "Upwork freelancer",
        icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwCuKYAwqQAwKQGrqkAwaMAv6QFrqoGr6kSl7IJnKwAwKQBuaYEsKoKo64LoK8SkbQVibcbfbsgcr8kaMMApKoJpa0Loa8mZsMtWcgAwqMPl7IqXMcvU8oYg7kzT8wec74fdr4ia8I0Tcx+J9L2AAAAJHRSTlMATPvSLDq+d5AcCGXou8dvX6ialksEg6KbubG8lHB61FG5Pqck6E67AAAAYElEQVR4Ae3JswHAAAAAwY9tW/vvmC7WALn2+H0jiJLMDUWUUTXd4IpkYtmO4XrgB2EUs2FYqFKSCnhZ6iWYecEqUUsFcDTZrQyAuuHEy2SCFqDjWj+M0BncdV1MfPGbARgVBAFeKGV9AAAAAElFTkSuQmCC",
        iconBg: "#383E56",
        date: "Jan 2024 - feb 2024",
        points: [
            " Created a Food delivery app",
            "Used react.js and mongodb for backend",

        ],
    },
    {
        title: "Article writer",
        company_name: "Blockchain Army",
        icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwCuKYAwqQAwKQGrqkAwaMAv6QFrqoGr6kSl7IJnKwAwKQBuaYEsKoKo64LoK8SkbQVibcbfbsgcr8kaMMApKoJpa0Loa8mZsMtWcgAwqMPl7IqXMcvU8oYg7kzT8wec74fdr4ia8I0Tcx+J9L2AAAAJHRSTlMATPvSLDq+d5AcCGXou8dvX6ialksEg6KbubG8lHB61FG5Pqck6E67AAAAYElEQVR4Ae3JswHAAAAAwY9tW/vvmC7WALn2+H0jiJLMDUWUUTXd4IpkYtmO4XrgB2EUs2FYqFKSCnhZ6iWYecEqUUsFcDTZrQyAuuHEy2SCFqDjWj+M0BncdV1MfPGbARgVBAFeKGV9AAAAAElFTkSuQmCC",
        iconBg: "#383E56",
        date: "May 2023 - To present",
        points: [
            "Writing Crypto news event",
            "Analyzing the charts to predict the price movement directions.",
            "Offering guidance to investors on what asset to invest in.",
            
        ],
    },
    {
        title: "Wordpress developer",
        company_name: "Next gen group",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwCuKYAwqQAwKQGrqkAwaMAv6QFrqoGr6kSl7IJnKwAwKQBuaYEsKoKo64LoK8SkbQVibcbfbsgcr8kaMMApKoJpa0Loa8mZsMtWcgAwqMPl7IqXMcvU8oYg7kzT8wec74fdr4ia8I0Tcx+J9L2AAAAJHRSTlMATPvSLDq+d5AcCGXou8dvX6ialksEg6KbubG8lHB61FG5Pqck6E67AAAAYElEQVR4Ae3JswHAAAAAwY9tW/vvmC7WALn2+H0jiJLMDUWUUTXd4IpkYtmO4XrgB2EUs2FYqFKSCnhZ6iWYecEqUUsFcDTZrQyAuuHEy2SCFqDjWj+M0BncdV1MfPGbARgVBAFeKGV9AAAAAElFTkSuQmCC",
        iconBg: "#E6DEDD",
        date: "March 2024-Present",
        points: [
            "Created a wordpress website with the needed plugins to come up with an interactive website for the user.",
            "Installed the needed plugins for the website.",
        ],
    },
    {
        title: "Software developer",
        company_name: "Lanno suppliers",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwCuKYAwqQAwKQGrqkAwaMAv6QFrqoGr6kSl7IJnKwAwKQBuaYEsKoKo64LoK8SkbQVibcbfbsgcr8kaMMApKoJpa0Loa8mZsMtWcgAwqMPl7IqXMcvU8oYg7kzT8wec74fdr4ia8I0Tcx+J9L2AAAAJHRSTlMATPvSLDq+d5AcCGXou8dvX6ialksEg6KbubG8lHB61FG5Pqck6E67AAAAYElEQVR4Ae3JswHAAAAAwY9tW/vvmC7WALn2+H0jiJLMDUWUUTXd4IpkYtmO4XrgB2EUs2FYqFKSCnhZ6iWYecEqUUsFcDTZrQyAuuHEy2SCFqDjWj+M0BncdV1MfPGbARgVBAFeKGV9AAAAAElFTkSuQmCC",
        iconBg: "#383E56",
        date: "July 2023 - present",
        points: [
         "Created the E-commerce website",
         "Intergrated the Global card payment for  online transactions",
         "Intergrated Paypal  as an alternative payment method"
        ],
    },
    {
        title: "It support,Website Designing",
        company_name: "International leadership University",
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEVHcEwCuKYAwqQAwKQGrqkAwaMAv6QFrqoGr6kSl7IJnKwAwKQBuaYEsKoKo64LoK8SkbQVibcbfbsgcr8kaMMApKoJpa0Loa8mZsMtWcgAwqMPl7IqXMcvU8oYg7kzT8wec74fdr4ia8I0Tcx+J9L2AAAAJHRSTlMATPvSLDq+d5AcCGXou8dvX6ialksEg6KbubG8lHB61FG5Pqck6E67AAAAYElEQVR4Ae3JswHAAAAAwY9tW/vvmC7WALn2+H0jiJLMDUWUUTXd4IpkYtmO4XrgB2EUs2FYqFKSCnhZ6iWYecEqUUsFcDTZrQyAuuHEy2SCFqDjWj+M0BncdV1MfPGbARgVBAFeKGV9AAAAAElFTkSuQmCC",
        iconBg: "#383E56",
        date: "Jan 2022 - March 2022",
        points: [
         "Collaborate with the IT team to set up and maintain computer networks, servers, and databases.",
         "Provided timely and effective IT support, resulting in increased operational efficiency and minimized downtime",
         "Conducted hardware and software upgrades, improving system performance and security"
    
        ],
    },
];

const testimonials = [];

const projects = [
    {
        name: "Food delivery App",
        description:
            "A Webapp to order fast food.",
        tags: [
            {
                name: "Food delivery App",
                color: "blue-text-gradient",
            },
            {
                name: "React.js Development",
                color: "green-text-gradient",
            },

        ],
        live_link:"https://react-quick-food.firebaseapp.com/",
        image: "https://www.mooc.org/hubfs/what-computer-programming-jobs-offer-remote-work-jpg.jpeg",
        source_code_link: "https://github.com/warrenposo/eassymealapp?tab=readme-ov-file",
    },
    {
        name: "Foodie",
        description:
            "A Webapp for ordering  food from different restaurants in a city.",
        tags: [
            {
                name: "Foodie",
                color: "blue-text-gradient",
            },
            {
                name: "React.js & Node.js",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "pink-text-gradient",
            },
        ],
        live_link:"https://tasty-react.vercel.app/",
        image: "https://www.mooc.org/hubfs/what-computer-programming-jobs-offer-remote-work-jpg.jpeg",
        source_code_link: "https://github.com/warrenposo/tasteywebapp",
    },
    {
        name: "International leadership University",
        description:
            "Web design for the school Website",
        tags: [
            {
                name: "Wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "php",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        live_link:"https://kenya.ilu.edu/",
        image: "https://www.mooc.org/hubfs/what-computer-programming-jobs-offer-remote-work-jpg.jpeg",
        source_code_link: "",
    },
];

export { services, technologies, experiences, testimonials, projects };