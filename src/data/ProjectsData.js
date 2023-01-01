import AngularMovie from "../assets/images/portfolio/angular-movie.png";
import BackEndImage from "../assets/images/portfolio/back-end-image.png";
import ExamServer from "../assets/images/portfolio/exam-server.png";
import JavaImage from "../assets/images/portfolio/java-image.png";
import WeddingHelper from "../assets/images/portfolio/wedding-helper.png";
import FoodieImage from "../assets/images/portfolio/foodie-app.png";
import BloomyWeatherImage from "../assets/images/portfolio/bloomy-weather.png";

const ProjectsPreviewData = [
  {
    id: "foodie",
    img: FoodieImage,
    name: "Fodie Recipes",
    stack: ["< HTML5 />", "< SCSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://foodie-book.vercel.app/",
    source: "https://github.com/berkbeleli/Foodie",
    description:
      "Foodie is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.",
  },
  {
    id: "bloomyweather",
    img: BloomyWeatherImage,
    name: "Bloomy Weather",
    stack: ["< React.js />", "< SCSS />", "< RESTful API />"],
    src: "https://bloomy-weather.vercel.app/",
    source: "https://github.com/berkbeleli/BloomyWeather",
    description:
      "BloomyWeather is a simple project made with Weather API which shows you the current weather of your target location.",
  },
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
    stack: [
      "< Spring Boot />",
      "< Lombok />",
      "< Swagger />",
      "< RESTful API />",
    ],
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
    id: "foodie",
    img: FoodieImage,
    name: "Fodie Recipes",
    stack: ["< HTML5 />", "< SCSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://foodie-book.vercel.app/",
    source: "https://github.com/berkbeleli/Foodie",
    description:
      "Foodie is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.",
  },
  {
    id: "bloomyweather",
    img: BloomyWeatherImage,
    name: "Bloomy Weather",
    stack: ["< React.js />", "< SCSS />", "< RESTful API />"],
    src: "https://bloomy-weather.vercel.app/",
    source: "https://github.com/berkbeleli/BloomyWeather",
    description:
      "BloomyWeather is a simple project made with Weather API which shows you the current weather of your target location.",
  },
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
    stack: [
      "< Spring Boot />",
      "< Lombok />",
      "< Swagger />",
      "< RESTful API />",
    ],
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
