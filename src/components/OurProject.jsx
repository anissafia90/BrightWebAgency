import Kasa from "../assets/kasa.png";
import Ecomm from "../assets/Ecommerce.png";
import Weather from "../assets/WeatherApp.png";
import Business from "../assets/MondeNoirBlanc.png";
import MenuRestaurant from "../assets/menuRestaurant.png";
import Event from "../assets/Occasion.png";
import Techuim from "../assets/Techuim.png";
import Booki from "../assets/Booki.png";

const OurProject = () => {
  // Sample projects data with URLs for each project
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce website built for a fashion brand with integrated payment gateways.",
      image: Ecomm, // Replace with actual image
      url: "https://drive.google.com/file/d/1aort9OeLT25DYYRL1tJaK8ErlmZygvZK/view", // Replace with actual URL
    },
    {
      title: "Real Estate Agency ",
      description:
        "Kasa is a web app for browsing and booking rental properties, offering a modern user interface and seamless experience.",
      image: Kasa, // Replace with actual image
      url: "https://kasa-immob.netlify.app/", // Replace with actual URL
    },
    {
      title: "Weather App",
      description:
        "A user-friendly web app providing real-time weather updates for cities worldwide.",
      image: Weather, // Replace with actual image
      url: "https://weather-app-anis.netlify.app/", // Replace with actual URL
    },
    {
      title: "World Black & white",
      description:
        "A platform offering insights into data-driven solutions and advanced analytics for businesses.",
      image: Business, // Replace with actual image
      url: "https://preeminent-bombolone-478d64.netlify.app", // Replace with actual URL
    },
    {
      title: "Menu Restaurant",
      description:
        "An elegant online menu showcasing delicious dishes with a clean, easy-to-navigate layout for restaurant customers.",
      image: MenuRestaurant, // Replace with actual image
      url: "https://menurestaurant03.netlify.app/", // Replace with actual URL
    },
    {
      title: "Event Management Platform",
      description:
        "A simple and secure sign-in page for accessing a personalized event management platform.",
      image: Event, // Replace with actual image
      url: "https://occasion-link.vercel.app/sign-in", // Replace with actual URL
    },
    {
      title: "Techuim Agency ",
      description:
        "A sleek and informative page showcasing various modern UI components and design elements for tech projects.",
      image: Techuim, // Replace with actual image
      url: "https://techuim02.netlify.app/10-index.html", // Replace with actual URL
    },
    {
      title: "Booki Agency Travel",
      description:
        "A travel booking website offering users an easy and intuitive way to find and book accommodations for their trips.",
      image: Booki, // Replace with actual image
      url: "https://booki-dev.netlify.app/", // Replace with actual URL
    },
  ];

  return (
    <div className="p-10 bg-gray-100 text-center  md:mx-[55px]" id="project">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Projects</h1>
      <p className="text-lg text-gray-700 mb-10">
        Here are some of our featured projects. We strive to create
        high-quality, user-centric products tailored to our clients&apos; needs.
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-green-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              {/* Add the link to the website */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurProject;
