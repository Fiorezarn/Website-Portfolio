import React, { useEffect } from "react";
import { Badge } from "flowbite-react";
import Glide from "@glidejs/glide";
import { Card } from "flowbite-react";
import { FaEyeSlash } from "react-icons/fa";
import MilenialStuff from "../assets/milenalstuff.jpg";
import { MdOutlineAirplay } from "react-icons/md";
import { Icon } from "@iconify/react";

export default function CarouselIndicatorsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="lg:h-screen pt-20 lg:px-28 ">
        <h1 className="font-bold text-4xl text-center">Project</h1>
        <div className="glide-05 relative py-10">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={MilenialStuff}
                >
                  <div className="flex flex-cols gap-8">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Milenial Stuff Website
                    </h5>
                    <Badge color="gray" icon={FaEyeSlash}>
                      Private
                    </Badge>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
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
              </li>
              <li>
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={MilenialStuff}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Milenial Stuff Website
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
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
              </li>
              <li>
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={MilenialStuff}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Milenial Stuff Website
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
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
              </li>
              <li>
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={MilenialStuff}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Milenial Stuff Website
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
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
              </li>
              <li>
                <Card
                  className="max-w-sm"
                  imgAlt="Meaningful alt text for an image that is not purely decorative"
                  imgSrc={MilenialStuff}
                >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Milenial Stuff Website
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
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
              </li>
            </ul>
          </div>
          <div
            className="flex w-full items-center justify-center gap-2 mt-4"
            data-glide-el="controls[nav]"
          >
            <button
              className="group p-4"
              data-glide-dir="=0"
              aria-label="goto slide 1"
            >
              <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=1"
              aria-label="goto slide 2"
            >
              <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=2"
              aria-label="goto slide 3"
            >
              <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=3"
              aria-label="goto slide 4"
            >
              <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
