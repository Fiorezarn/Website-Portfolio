import Reza from "../../assets/Reza.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Tooltip } from "flowbite-react";
import { Button } from "flowbite-react";
import "./Content.scss";

const Content = () => {
  return (
    <>
      <div className="w-full h-screen">
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
                  Resume
                </Button>
              </Tooltip>
              <div className="block text-gray-400 md:hidden lg:hidden xl:hidden my-11">
                Last Updated 24 Januari 2024
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 right-3.5 bottom-[50%] lg:right-3.5 absolute">
            <a className="text-white hover:text-purple-400 text-3xl" href="">
              <FaGithub />
            </a>
            <a className="text-white hover:text-purple-400 text-3xl" href="">
              <FaLinkedin />
            </a>
            <a className="text-white hover:text-purple-400 text-3xl" href="">
              <FaInstagram />
            </a>
          </div>
          <div className="lg:px-4 lg:bottom-8 hiddenlg:text-gray-400 lg:absolute">
            Last Updated 24 Januari 2024
          </div>
          <div className="justify-center mx-auto mt-36 px-14">
            <div className="wrap flex items-center justify-center">
              <div className="circle h-30 lg:w-96 lg:h-96">
                <img src={Reza} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
