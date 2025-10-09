import React from "react";

import Image from "next/image";
import Link from "next/link";

import { SOCIAL_MEDIA } from "@/types/constants";
import { Project } from "@/types/projects";
import { normalizeString } from "@/utils/string";

interface ProjectHeaderProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project, isExpanded, onToggle }) => {
  return (
    <header
      className={`flex flex-col gap-4 bg-secondary cursor-pointer p-4 transition-all duration-300 ${isExpanded ? "rounded-t-md" : "rounded-md"} hover:bg-secondary/80`}
      onClick={onToggle}
    >
      <h3 className="text-text text-lg font-bold">{project.name}</h3>
      <div className="flex items-center justify-between">
        <div
          className="focus-visible:ring-primary focus-visible:ring-offset-secondary flex flex-1 items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle();
            }
          }}
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${project.name} details`}
        >
          <div className="flex items-center gap-3" role="list" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <div key={technology} role="listitem">
                <Image
                  className="h-7 w-7 brightness-0 invert"
                  src={`https://simpleicons.org/icons/${normalizeString(technology)}.svg`}
                  alt={`${technology} logo`}
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </div>
        </div>
        <Link
          href={project.githubUrl || SOCIAL_MEDIA.GITHUB}
          className="focus-visible:ring-primary focus-visible:ring-offset-background ml-2 h-8 w-8 outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          aria-label={`View ${project.name} on GitHub`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <Image src="/assets/icons/github.svg" alt="" width={32} height={32} />
        </Link>
      </div>
    </header>
  );
};

export default ProjectHeader;
