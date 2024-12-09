import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import ProjectCard from "./Card";
import MilenialStuff from "../assets/milenalstuff.jpg";
import Moneta from "../assets/moneta.png";
import Nextflix from "../assets/nextflix.png";
import Batary from "../assets/Batary.png";
import Incentive from "../assets/incentive.png";
import Portofolio from "../assets/portofolio.png";
import Lecafe from "../assets/website lecafe.png";

const projects = [
  {
    title: "Milenial Stuff Website",
    description:
      "An online store selling items, created using Laravel framework version 8. Features include product listings, shopping cart, and user authentication.",
    image: MilenialStuff,
    isPublic: true,
    demoLink: "http://milenialstuff.my.id/",
    sourceLink: "https://github.com/Fiorezarn/MilenialStuff.id",
  },
  {
    title: "Moneta Website",
    description:
      "A financial records website built with ReactJS and Golang, ensuring a streamlined and responsive user interface. Includes features for expense tracking and financial reporting.",
    image: Moneta,
    isPublic: true,
    demoLink: "https://moneta.mikroskil.com/",
    sourceLink: "https://github.com/c23-m4001",
  },
  {
    title: "Nextflix Website",
    description:
      "A website displaying a list of movies from a public API, created using webpack. Features include movie search, filtering, and detailed movie information pages.",
    image: Nextflix,
    isPublic: true,
    demoLink: "https://nextflixweb.netlify.app/",
    sourceLink: "https://github.com/Fiorezarn/Nextflix-webpack",
  },
  {
    title: "Batary Apps",
    description:
      "A website displaying a list of restaurants from a public API, created using webpack. Includes features such as restaurant search, filtering by cuisine, and user reviews.",
    image: Batary,
    isPublic: true,
    demoLink: "https://bataryapps.netlify.app/",
    sourceLink: "https://github.com/Fiorezarn/Batary-Apps",
  },
  {
    title: "Incentive Website",
    description:
      "A website for managing and calculating employee incentives, created using Laravel. Features include performance tracking, incentive calculation, and reporting tools.",
    image: Incentive,
    isPublic: false,
    demoLink: "",
    sourceLink: "",
  },
  {
    title: "Website Portfolio",
    description:
      "A portfolio website built with React and Vite, showcasing projects and expertise. Includes sections for about me, skills, projects, and contact information.",
    image: Portofolio,
    isPublic: true,
    demoLink: "https://fiorezarn.vercel.app/",
    sourceLink: "https://github.com/Fiorezarn/Website-Portfolio",
  },
  {
    title: "Le Cafe",
    description:
      "A cafe website showcasing menu items, location, and online ordering capabilities. Built with modern web technologies for a smooth user experience.",
    image: Lecafe,
    isPublic: true,
    demoLink: "https://lecafe-fe.vercel.app/",
    sourceLink: "https://github.com/Fiorezarn/lecafe-fe",
  },
];

export default function ProjectCarousel() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 5000,
      animationDuration: 700,
      gap: 32,
      breakpoints: {
        1280: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="Project">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="glide-05 relative">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {projects.map((project, index) => (
                <li key={index} className="w-full max-w-xl mx-auto px-2">
                  <ProjectCard {...project} />
                </li>
              ))}
            </ul>
          </div>
          <div
            className="flex w-full items-center justify-center gap-2 mt-8"
            data-glide-el="controls[nav]"
          >
            {projects.map((_, index) => (
              <button
                key={index}
                className="group p-2"
                data-glide-dir={`=${index}`}
                aria-label={`goto slide ${index + 1}`}
              >
                <span className="block h-3 w-3 rounded-full bg-gray-300 transition-colors duration-300 group-hover:bg-gray-600 focus:outline-none"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
