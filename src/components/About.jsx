import Timeline from "./Timeline";
import { Button } from "flowbite-react";

const About = () => {
  return (
    <>
      <div className="lg:h-screen w-full pt-20 px-6 lg:px-28">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div>
            <h1 className="text-center font-bold text-4xl mt-8">About Me</h1>
            <p className="text-xl text-justify py-16">
              My Name is <span className="text-purple-500">Fioreza Radhin Naufal</span>, I am an Information Systems
              student specializing in Front-End and Back-End development. I have
              skills in multiple programming languages and frameworks.
              Additionally, I possess strong abilities in problem-solving,
              critical thinking, and time management
            </p>
            <Button
              className="text-center mx-auto"
              outline
              gradientDuoTone="purpleToPink"
            >
              Contact Me!
            </Button>
          </div>
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
