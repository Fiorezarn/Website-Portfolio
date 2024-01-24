import React, { useEffect } from "react";
import { Badge } from "flowbite-react";
import Glide from "@glidejs/glide";
import { Card } from "flowbite-react";
import { FaEyeSlash } from "react-icons/fa";
import MilenialStuff from "../assets/milenalstuff.jpg";
import Moneta from "../assets/moneta.png";
import Nextflix from "../assets/nextflix.png";
import Batary from "../assets/Batary.png";
import Incentive from "../assets/incentive.png";
import { MdOutlineAirplay } from "react-icons/md";
import { Icon } from "@iconify/react";
import { FaEye } from "react-icons/fa";

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
      <div className="lg:h-screen pt-20 lg:px-28" id="Project">
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
                  <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Milenial Stuff Website
                    </h5>
                    <Badge color="gray" icon={FaEye}>
                      Public
                    </Badge>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Millennial Stuff is an online store that sells items This
                    website was created using the Laravel framework version 8
                  </p>
                  <div className="btn-group flex gap-2">
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center"
                      href="http://milenialstuff.my.id/"
                    >
                      <span>Demo</span>
                      <MdOutlineAirplay />
                    </a>
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center"
                      href="https://github.com/Fiorezarn/MilenialStuff.id"
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
                  imgSrc={Moneta}
                >
                  <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Moneta Website
                    </h5>
                    <Badge color="gray" icon={FaEye}>
                      Public
                    </Badge>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Moneta website harmonizes financial records through ReactJS
                    and Golang, ensuring a streamlined and responsive user
                    interface.
                  </p>
                  <div className="btn-group flex gap-2">
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center"
                      href="https://moneta.mikroskil.com/"
                    >
                      <span>Demo</span>
                      <MdOutlineAirplay />
                    </a>
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center"
                      href="https://github.com/c23-m4001"
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
                  imgSrc={Nextflix}
                >
                  <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Nextflix Website
                    </h5>
                    <Badge color="gray" icon={FaEye}>
                      Public
                    </Badge>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Nextflix is a website that displays a list of movies taken
                    from public api and created using webpack.
                  </p>
                  <div className="btn-group flex gap-2">
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center"
                      href="https://nextflixweb.netlify.app/"
                    >
                      <span>Demo</span>
                      <MdOutlineAirplay />
                    </a>
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center"
                      href="https://github.com/Fiorezarn/Nextflix-webpack"
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
                  imgSrc={Batary}
                >
                  <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Batary Apps
                    </h5>
                    <Badge color="gray" icon={FaEye}>
                      Public
                    </Badge>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Batary Apps is a website that displays a list of Restaurant
                    taken from public api and created using webpack.
                  </p>
                  <div className="btn-group flex gap-2">
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center"
                      href="https://bataryapps.netlify.app/"
                    >
                      <span>Demo</span>
                      <MdOutlineAirplay />
                    </a>
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center"
                      href="https://github.com/Fiorezarn/Batary-Apps"
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
                  imgSrc={Incentive}
                >
                  <div className="flex justify-between">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Incentive Website
                    </h5>
                    <Badge className="text-end justify-end" color="gray" icon={FaEye}>
                      Private
                    </Badge>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Incentive website is here to provide support in managing and
                    calculating employee incentives this website was created
                    using Laravel
                  </p>
                  <div className="btn-group flex gap-2">
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center pointer-events-none"
                      href=""
                    >
                      <span>Demo</span>
                      <MdOutlineAirplay />
                    </a>
                    <a
                      className="hover:bg-black rounded-lg flex gap-2 px-6 py-2 text-white hover:text-white bg-gray-800 items-center pointer-events-none"
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
