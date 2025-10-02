"use client";

import React, { useState } from "react";

import { useLocale } from "next-intl";

import { Project } from "@/types/projects";

import ProjectBody from "./projectBody";
import ProjectHeader from "./projectHeader";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const locale = useLocale();
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const getDescription = (project: Project): string => {
    return locale === "pt" ? project.descriptionBr : project.descriptionEn;
  };

  const toggleProject = (projectName: string) => {
    setExpandedProjects((prev) => ({ ...prev, [projectName]: !prev[projectName] }));
  };

  const midPoint = Math.ceil(projects.length / 2);
  const leftProjects = projects.slice(0, midPoint);
  const rightProjects = projects.slice(midPoint);

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-start">
      <div className="flex flex-1 flex-col gap-4" role="list" aria-label="Projects - Column 1">
        {leftProjects.map((project) => (
          <article key={project.name} className="w-full rounded-md" role="listitem">
            <ProjectHeader
              project={project}
              isExpanded={expandedProjects[project.name]}
              onToggle={() => toggleProject(project.name)}
            />
            <ProjectBody project={project} description={getDescription(project)} isExpanded={expandedProjects[project.name]} />
          </article>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-4" role="list" aria-label="Projects - Column 2">
        {rightProjects.map((project) => (
          <article key={project.name} className="w-full rounded-md" role="listitem">
            <ProjectHeader
              project={project}
              isExpanded={expandedProjects[project.name]}
              onToggle={() => toggleProject(project.name)}
            />
            <ProjectBody project={project} description={getDescription(project)} isExpanded={expandedProjects[project.name]} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
