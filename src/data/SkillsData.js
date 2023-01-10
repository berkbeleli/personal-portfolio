import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiJavascript, DiJava } from "react-icons/di";
import {
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiMysql,
  SiVisualstudiocode,
  SiIntellijidea,
} from "react-icons/si";
import { FaReact, FaBootstrap, FaAngular } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";

const SkillsData = [
  {
    id: "html5",
    img: AiFillHtml5,
    name: "HTML5",
  },
  {
    id: "css3",
    img: DiCss3,
    name: "CSS3",
  },
  {
    id: "tailwind",
    img: SiTailwindcss,
    name: "Tailwind",
  },
  {
    id: "bootstrap",
    img: FaBootstrap,
    name: "Bootstrap",
  },
  {
    id: "sass",
    img: DiSass,
    name: "SCSS/SASS",
  },
  {
    id: "js",
    img: DiJavascript,
    name: "Js ES6+",
  },
  {
    id: "react",
    img: FaReact,
    name: "React.js",
  },
  {
    id: "typescript",
    img: SiTypescript,
    name: "Typescript",
  },
  {
    id: "angular",
    img: FaAngular,
    name: "Angular",
  },
  {
    id: "java",
    img: DiJava,
    name: "Java",
  },
  {
    id: "spring",
    img: SiSpringboot,
    name: "Spring Boot",
  },
  {
    id: "restfulapi",
    img: TbApi,
    name: "RESTful API",
  },
  {
    id: "mysql",
    img: SiMysql,
    name: "MySQL",
  },
  {
    id: "figma",
    img: FiFigma,
    name: "Figma",
  },
  {
    id: "vscode",
    img: SiVisualstudiocode,
    name: "VSCode",
  },
  {
    id: "intellij",
    img: SiIntellijidea,
    name: "IntelliJ IDEA",
  },
];

export { SkillsData };
