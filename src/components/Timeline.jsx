import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const TimelineComponent = () => {
  return (
    <>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>Aug 2023 - Dec 2023 · 5 mos</Timeline.Time>
            <Timeline.Title className="text-white">
              PT Trans Retail Indonesia
            </Timeline.Title>
            <p className="text-gray-300 text-2sm font-semibold">
              Sofware Developer Intern
            </p>
            <Timeline.Body>
              I have successfully created a customer data website to record
              customers, an incentive website for employees, stores, and brands,
              and a cycle count website to count stock in stores. all developed
              using the Laravel framework.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>Feb 2023 - Jul 2023 · 6 mos</Timeline.Time>
            <Timeline.Title className="text-white">
              PT Presentologics (Dicoding Indonesia)
            </Timeline.Title>
            <p className="text-gray-300 text-2sm font-semibold">
              Study Independent - Front End and Back End Developer
            </p>
            <Timeline.Body>
              I have created a responsive and attractive interface using
              React.js and Tailwind CSS. In addition, I also integrated PWA
              technology and public APIs into the restaurant information
              website. I also created a RESTful API for the bookshelf
              application. In addition, I have achieved the status as the best
              student in Dicoding Indonesia.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>Feb 2022 - Present · 2 yrs</Timeline.Time>
            <Timeline.Title className="text-white">
              University of Gunadarma
            </Timeline.Title>
            <p className="text-gray-300 text-2sm font-semibold">
              Laboratory Assistant at Integrated Laboratory (iLab)
            </p>
            <Timeline.Body>
              I produced instructional videos, modules, and course questions for
              online learning, contributing to a comprehensive educational
              experience. Simultaneously, I developed a program module using
              COBOL and BASIC languages, demonstrating proficiency in diverse
              programming skills. Additionally, I monitored and addressed
              practicum-related queries
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default TimelineComponent;
