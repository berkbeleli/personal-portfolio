import AngularMovie from "../assets/images/portfolio/angular-movie.png";
import BackEndImage from "../assets/images/portfolio/back-end-image.jpg";
import ExamServer from "../assets/images/portfolio/exam-server.png";
import JavaImage from "../assets/images/portfolio/java-image.jpeg";
import WeddingHelper from "../assets/images/portfolio/wedding-helper.png";

const ProjectsPreviewData = [
  {
    id: "angular-movie",
    img: AngularMovie,
    name: "Movie Info",
    stack: ["< Angular />", "< SCSS />", "< PrimeNG />"],
    src: "https://angularmovies.vercel.app/",
    source: "https://github.com/berkbeleli/Movie-Info",
    description:
      "This project for people that are looking for informations about the movies. Also it lists the trending movies in the main page.",
  },
  {
    id: "exam-server",
    img: ExamServer,
    name: "Rest Countires",
    stack: ["< Spring />", "< Angular />", "< CSS />", "< RESTful API />"],
    src: "https://github.com/berkbeleli/Examination",
    source: "https://github.com/berkbeleli/Examination",
    description:
      "Examination is a web project that is for the users those are want to improve their knowledges. This project uses Spring frameworks as its backend, Angular as a frontend.",
  },
  {
    id: "e-commerce",
    img: BackEndImage,
    name: "E-commerce Back-end",
    stack: ["< Spring Boot />", "< Lombok />", "< Swagger />", "< RESTful API />"],
    src: "https://github.com/berkbeleli/E-commerce-Backend/",
    source: "https://github.com/berkbeleli/E-commerce-Backend",
    description:
      "This REST API was created for an E-Commerce Project. This API handles all of the basic CRUD functions of an E-commerce Application platform, including validation at each stage.",
  },
  {
    id: "wedding-helper",
    img: WeddingHelper,
    name: "Wedding Helper",
    stack: ["< PHP />", "< HTML5 />", "< CSS3 />", "< MYSQL />"],
    src: "https://www.dugunbuketi.com/dugun-yardimcin/",
    source: "https://www.dugunbuketi.com/dugun-yardimcin/",
    description:
      "This project for people that are looking for organization firms. They can choose from options after completing the selections they will receive an e-mail according to their choices.",
  },
  {
    id: "college-management",
    img: JavaImage,
    name: "College Management",
    stack: ["< Java />", "< MySQL />", "< JDBC />"],
    src: "https://github.com/berkbeleli/College-Management",
    source: "https://github.com/berkbeleli/College-Management",
    description:
      "College Management program will keep the records of all the courses,batches,faculties for every batch. It will also help the College Head to maintain the course plan.",
  },
];

const ProjectsData = [
    {
		id: "angular-movie",
		img: AngularMovie,
		name: "Movie Info",
		stack: ["< Angular />", "< SCSS />", "< PrimeNG />"],
		src: "https://angularmovies.vercel.app/",
		source: "https://github.com/berkbeleli/Movie-Info",
		description:
		  "This project for people that are looking for informations about the movies. Also it lists the trending movies in the main page.",
	  },
	  {
		id: "exam-server",
		img: ExamServer,
		name: "Rest Countires",
		stack: ["< Spring />", "< Angular />", "< CSS />", "< RESTful API />"],
		src: "https://github.com/berkbeleli/Examination",
		source: "https://github.com/berkbeleli/Examination",
		description:
		  "Examination is a web project that is for the users those are want to improve their knowledges. This project uses Spring frameworks as its backend, Angular as a frontend.",
	  },
	  {
		id: "e-commerce",
		img: BackEndImage,
		name: "E-commerce Back-end",
		stack: ["< Spring Boot />", "< Lombok />", "< Swagger />", "< RESTful API />"],
		src: "https://github.com/berkbeleli/E-commerce-Backend/",
		source: "https://github.com/berkbeleli/E-commerce-Backend",
		description:
		  "This REST API was created for an E-Commerce Project. This API handles all of the basic CRUD functions of an E-commerce Application platform, including validation at each stage.",
	  },
	  {
		id: "wedding-helper",
		img: WeddingHelper,
		name: "Wedding Helper",
		stack: ["< PHP />", "< HTML5 />", "< CSS3 />", "< MYSQL />"],
		src: "https://www.dugunbuketi.com/dugun-yardimcin/",
		source: "https://www.dugunbuketi.com/dugun-yardimcin/",
		description:
		  "This project for people that are looking for organization firms. They can choose from options after completing the selections they will receive an e-mail according to their choices.",
	  },
	  {
		id: "college-management",
		img: JavaImage,
		name: "College Management",
		stack: ["< Java />", "< MySQL />", "< JDBC />"],
		src: "https://github.com/berkbeleli/College-Management",
		source: "https://github.com/berkbeleli/College-Management",
		description:
		  "College Management program will keep the records of all the courses,batches,faculties for every batch. It will also help the College Head to maintain the course plan.",
	  },
];

export { ProjectsData, ProjectsPreviewData };
