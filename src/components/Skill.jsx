import React from "react";
import { Card } from "flowbite-react";
import { Icon } from "@iconify/react";
import { FaLaptopCode } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { GiSkills } from "react-icons/gi";

const Skill = () => {
  return (
    <div className="w-full pt-20 px-6 lg:px-28" id="Skill">
      <h1 className="font-bold text-4xl text-center">Skill</h1>
      <div className="flex flex-col gap-10 lg:gap-0 lg:grid lg:grid-cols-3 mt-10">
        <Card className="max-w-sm">
          <div className="text-center mx-auto text-6xl text-purple-800">
            <FaLaptopCode />
          </div>
          <h1 className="font-bold text-gray-900 text-xl mx-auto">
            Front End Developer
          </h1>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h1 className="font-bold text-gray-900 text-xl mx-auto">
            Techstack:
          </h1>
          <div className="icon text-4xl flex gap-2 mx-auto">
            <Icon icon="logos:html-5" />
            <Icon icon="skill-icons:sass" />
            <Icon icon="vscode-icons:file-type-css" />
            <Icon icon="devicon:react-wordmark" />
            <Icon icon="devicon:bootstrap-wordmark" />
            <Icon icon="logos:javascript" />
            <Icon icon="vscode-icons:file-type-tailwind" />
          </div>
        </Card>
        <Card className="max-w-sm">
          <div className="text-center mx-auto text-6xl text-purple-800">
            <TbWorldCode />
          </div>
          <h1 className="font-bold text-gray-900 text-xl mx-auto">
            Back End Developer
          </h1>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h1 className="font-bold text-gray-900 text-xl mx-auto">
            Techstack:
          </h1>
          <div className="icon text-4xl flex gap-2 mx-auto">
            <Icon icon="devicon:laravel-wordmark" />
            <Icon icon="logos:nodejs" />
            <Icon icon="devicon:php" />
            <Icon icon="logos:mysql" />
            <Icon icon="devicon:oracle" />
            <Icon icon="devicon:postgresql-wordmark" />
          </div>
        </Card>
        <Card className="max-w-sm">
          <div className="text-center mx-auto text-6xl text-purple-800">
            <GiSkills />
          </div>
          <h1 className="font-bold text-gray-900 text-xl mx-auto">
            Other Skill
          </h1>
          <p className="font-normal text-center text-gray-700 dark:text-gray-400">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <h1 className="font-bold text-gray-900 text-xl mx-auto">
            Techstack:
          </h1>
          <div className="icon text-4xl flex gap-2 mx-auto">
            <Icon icon="akar-icons:github-fill" />
            <Icon icon="devicon:figma" />
            <Icon icon="devicon:dbeaver" />
            <Icon icon="devicon:jira-wordmark" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skill;
