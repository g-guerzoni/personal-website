import React from "react";

import Link from "next/link";

import { Project } from "@/types/projects";

interface ProjectBodyProps {
  project: Project;
  description: string;
  isExpanded: boolean;
}

const ProjectBody: React.FC<ProjectBodyProps> = ({ project, description, isExpanded }) => {
  return (
    <div
      className={`bg-text overflow-hidden rounded-b-md transition-[max-height] duration-300 ${
        isExpanded ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="flex flex-col gap-2 p-4">
        <p className="text-secondary text-sm">{description}</p>

        {project.demoUrl && (
          <div className="flex items-start gap-1 overflow-hidden">
            <span className="text-secondary shrink-0 text-sm font-semibold">Live demo: </span>
            <Link
              href={project.demoUrl}
              className="text-secondary focus-visible:ring-primary focus-visible:ring-offset-text hover:!text-secondary min-w-0 truncate text-sm underline outline-none hover:font-semibold focus-visible:ring-2 focus-visible:ring-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.name}`}
            >
              {project.demoUrl}
            </Link>
          </div>
        )}

        {project.technologies.length > 0 && (
          <div>
            <span className="text-secondary text-sm font-semibold">Technologies: </span>
            <ul className="text-secondary ml-4 list-disc text-sm" aria-label="Technologies used in this project">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectBody;
