import React from "react";

import { ITimeline } from "@/types/timeline";

const Timeline: React.FC<{ items: ITimeline[] }> = ({ items }) => {
  return (
    <ol className="list-none" role="list" aria-label="Professional experience timeline">
      {items.map((item, index) => (
        <li
          key={`${item.company}-${item.jobTitle}`}
          className="grid grid-cols-1 justify-start md:grid-cols-[68px_40px_1fr]"
        >
          <div className="flex items-center justify-start gap-2 md:-mt-1 md:flex-col md:items-start md:justify-start">
            <time className="text-sm" dateTime={item.endDate || new Date().toISOString().split("T")[0]}>
              {item.endDate || "Current"}
            </time>
            <div className="bg-secondary block h-1 w-1 md:mt-2 md:hidden" aria-hidden="true" />
            <time className="text-sm" dateTime={item.startDate}>
              {item.startDate}
            </time>
          </div>

          <div className="hidden md:block" aria-hidden="true">
            <div className="flex-col items-center justify-items-center">
              <div className={`${index === 0 ? "bg-highlight" : "bg-text"} h-4 w-4 rounded-full`} />
              <div className={`bg-secondary h-[60px] w-1 ${index === items.length - 1 ? "hidden" : ""}`} />
            </div>
          </div>

          <article className="flex flex-col items-start md:-mt-1">
            <h3 className="text-highlight text-base font-bold md:text-text">{item.company}</h3>
            <p className="text-accent text-sm font-semibold">{item.jobTitle}</p>

            <div className="mb-4 flex items-center gap-2 md:mb-0">
              {item.location && (
                <address className="text-xs not-italic" aria-label="Work location">
                  {item.location}
                </address>
              )}
              {item.location && <div className="bg-secondary h-1 w-1" aria-hidden="true" />}
              <span className="text-xs capitalize" aria-label="Employment type">
                {item.type}
              </span>
            </div>
          </article>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
