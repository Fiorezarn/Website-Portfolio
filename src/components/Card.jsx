import React from "react";
import { ExternalLinkIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({
  title,
  description,
  image,
  isPublic,
  demoLink,
  sourceLink,
}) {
  return (
    <div className="w-full h-[400px] flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold truncate text-black">{title}</h3>
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              isPublic
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {isPublic ? (
              <EyeIcon className="w-3 h-3 inline mr-1" />
            ) : (
              <EyeOffIcon className="w-3 h-3 inline mr-1" />
            )}
            {isPublic ? "Public" : "Private"}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>
      <div className="flex justify-between p-4 mt-auto">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            demoLink
              ? "bg-blue-500 text-white hover:bg-blue-600 hover:text-black"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={(e) => !demoLink && e.preventDefault()}
        >
          <ExternalLinkIcon className="w-4 h-4 inline mr-2" />
          Demo
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            sourceLink
              ? "bg-gray-800 text-white hover:bg-gray-900"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={(e) => !sourceLink && e.preventDefault()}
        >
          <FaGithub className="w-4 h-4 inline mr-2" />
          Source
        </a>
      </div>
    </div>
  );
}
