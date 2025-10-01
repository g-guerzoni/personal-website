import React from "react";

import { ITimeline } from "@/types/timeline";

interface JobTitleItemProps {
  items: ITimeline[];
  onSelectItem: (item: ITimeline) => void;
}

const JobTitleItem: React.FC<JobTitleItemProps> = ({ items, onSelectItem }) => {
  const handleSelectItem = (item: ITimeline) => {
    onSelectItem(item);
  };

  return (
    <ol className="list-none" role="list" aria-label="Professional experience timeline">
      {items.map((item, index) => (
        <li
          key={`${item.company}-${item.jobTitle}`}
          className="group grid grid-cols-1 justify-start transition-all duration-200 ease-in-out lg:grid-cols-[68px_40px_1fr]"
          onMouseEnter={() => handleSelectItem(item)}
        >
          <div className="flex items-center justify-start gap-2 lg:-mt-1 lg:flex-col lg:items-start lg:justify-start">
            <time className="text-sm" dateTime={item.endDate || new Date().toISOString().split("T")[0]}>
              {item.endDate || "Current"}
            </time>
            <div className="bg-secondary block h-1 w-1 lg:mt-2 lg:hidden" aria-hidden="true" />
            <time className="text-sm" dateTime={item.startDate}>
              {item.startDate}
            </time>
          </div>

          <div className="hidden lg:block" aria-hidden="true">
            <div className="flex-col items-center justify-items-center">
              <div
                className={`${index === 0 ? "bg-highlight" : "bg-text"} group-hover:bg-primary h-4 w-4 rounded-full transition-colors duration-200 ease-in-out`}
              />
              <div className={`bg-secondary h-[60px] w-1 ${index === items.length - 1 ? "hidden" : ""}`} />
            </div>
          </div>

          <article className="flex flex-col items-start lg:-mt-1">
            <h3 className="text-highlight lg:text-text text-base font-bold">{item.company}</h3>
            <p className="text-accent text-sm font-semibold">{item.jobTitle}</p>

            <div className="mb-4 flex items-center gap-2 lg:mb-0">
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

export default JobTitleItem;
