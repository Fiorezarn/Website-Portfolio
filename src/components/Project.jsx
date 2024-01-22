import { Card } from "flowbite-react";
import Moneta from "../assets/moneta.png";
import MilenialStuff from "../assets/milenalstuff.jpg";
import Batary from "../assets/Batary.png";
import Nextflix from "../assets/nextflix.png";

import { MdOutlineAirplay } from "react-icons/md";
import { Icon } from "@iconify/react";

const Project = () => {
  return (
    <>
      <div className="lg:h-screen w-full pt-20 px-6 lg:px-28">
        <h1 className="font-bold text-4xl text-center">Project</h1>
        <div className="sm:grid xl:grid xl:grid-cols-3 mt-10">
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={Moneta}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Moneta Website
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="btn-group flex gap-2">
              <a
                className="bg-black rounded-lg flex gap-2 px-6 py-2 text-white items-center"
                href=""
              >
                <span>Demo</span>
                <MdOutlineAirplay />
              </a>
              <a
                className="bg-black rounded-lg flex gap-2 px-6 py-2 text-white items-center"
                href=""
              >
                <span>Source Code</span>
                <Icon icon="ant-design:code-filled" />
              </a>
            </div>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={MilenialStuff}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Milenial Stuff Website
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="btn-group flex gap-2">
              <a
                className="bg-black rounded-lg flex gap-2 px-6 py-2 text-white items-center"
                href=""
              >
                <span>Demo</span>
                <MdOutlineAirplay />
              </a>
              <a
                className="bg-black rounded-lg flex gap-2 px-6 py-2 text-white items-center"
                href=""
              >
                <span>Source Code</span>
                <Icon icon="ant-design:code-filled" />
              </a>
            </div>
          </Card>
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={Batary}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Batary Apps
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="btn-group flex gap-2">
              <a
                className="bg-black rounded-lg flex gap-2 px-6 py-2 text-white items-center"
                href=""
              >
                <span>Demo</span>
                <MdOutlineAirplay />
              </a>
              <a
                className="bg-black rounded-lg flex gap-2 px-6 py-2 text-white items-center"
                href=""
              >
                <span>Source Code</span>
                <Icon icon="ant-design:code-filled" />
              </a>
            </div>
          </Card>
          {/* <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={Nextflix}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Nextflix Website
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="btn-group flex gap-2">
              <a
                className="bg-black rounded-lg flex gap-2 px-6 py-2 text-white items-center"
                href=""
              >
                <span>Demo</span>
                <MdOutlineAirplay />
              </a>
              <a
                className="bg-black rounded-lg flex gap-2 px-6 py-2 text-white items-center"
                href=""
              >
                <span>Source Code</span>
                <Icon icon="ant-design:code-filled" />
              </a>
            </div>
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default Project;
