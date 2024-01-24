import Reza from "../../assets/Reza.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Tooltip } from "flowbite-react";
import { Button } from "flowbite-react";
import Resume from "../../../public/Fioreza Radhin Naufal-resume.pdf";
import "./Content.scss";

const Content = () => {
  return (
    <>
      <div className="w-full lg:h-screen" id="Home">
        <div className="lg:px-28 grid lg:grid-cols-2 lg:py-40">
          <div className="px-6 lg:px-4 text-xl order-last lg:order-first lg:text-3xl text-purple-600 lg:font-bold mt-10 lg:mt-40">
            <TypeAnimation
              sequence={[
                "Hi My Name is Reza 👋",
                1000,
                "Welcome to My Portfolio Website 🚀",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
            <p className="text-white lg:w-5/5 lg:text-3xl text-xl text-justify mt-10">
              I am an undergraduate Information Systems student in Gunadarma
              university specializing in Front-End and Back-End development
            </p>
            <div className="content-button mt-10">
              <Tooltip content="Download Resume" style="light">
                <Button
                  className="text-center mx-auto"
                  outline
                  gradientDuoTone="purpleToPink"
                >
                  <a
                    className="text-black hover:text-white"
                    href={Resume}
                    download="Fioreza-Resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </Tooltip>
              <div className="block text-gray-400 text-sm font-normal mt-16">
                Last Updated 24 Januari 2024
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 right-3.5 bottom-[50%] lg:right-3.5 md:top-32 absolute">
            <a
              className="text-white hover:text-purple-400 text-3xl"
              href="https://github.com/fiorezarn"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-purple-400 text-3xl"
              href="https://www.linkedin.com/in/fiorezarn"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-white hover:text-purple-400 text-3xl"
              href="https://www.instagram.com/fiorezaa/"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="justify-center mx-auto mt-44 lg:mt-20 px-14">
            <div className="image-container--circle w-72 h-72 lg:h-96 lg:w-96 ">
              <div className="content ">
                <div className="text">
                  <h3>Fioreza R N</h3>
                  <p>Fullstack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
