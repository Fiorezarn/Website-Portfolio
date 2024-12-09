import Timeline from "./Timeline";
import { Button } from "flowbite-react";

const About = () => {
  return (
    <section className="container mx-auto py-20 px-4" id="about">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-center lg:text-left">
            About Me
          </h1>
          <p className="text-xl text-justify">
            My Name is{" "}
            <span className="text-primary">Fioreza Radhin Naufal</span>, I am a
            fresh graduate with over 2 years of combined experience in front-end
            and back-end development. I have developed a strong foundation in
            creating responsive interfaces, managing databases, and integrating
            APIs. I possess strong abilities in problem-solving, critical
            thinking, and time management.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button
              className="text-center"
              outline
              gradientDuoTone="purpleToPink"
            >
              <a
                href="https://wa.me/6285282810339"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                Contact Me!
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;
