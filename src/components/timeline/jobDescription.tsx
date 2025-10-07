import React from "react";

import { useLocale } from "next-intl";

import { Nullable } from "@/types/global";
import { ITimeline } from "@/types/timeline";

interface JobDescriptionProps {
  selectedItem: Nullable<ITimeline>;
  jobListRef: React.RefObject<HTMLDivElement | null>;
}

const JobDescription: React.FC<JobDescriptionProps> = ({ selectedItem, jobListRef }) => {
  const locale = useLocale();

  const getDescription = (item: ITimeline): string[] => {
    return locale === "pt" ? item.descriptionBr : item.descriptionEn;
  };

  if (!selectedItem) return null;

  const maxHeight = jobListRef.current?.offsetHeight ?? 0;

  return (
    <aside
      className="custom-scrollbar hidden flex-col gap-4 overflow-y-auto lg:flex"
      style={{ maxHeight: maxHeight > 0 ? `${maxHeight}px` : undefined }}
      aria-label="Job details"
      role="region"
    >
      <section aria-live="polite" aria-atomic="true">
        <ul
          key={selectedItem.company + selectedItem.jobTitle}
          className="animate-fade-in flex flex-col gap-4"
          role="list"
        >
          {selectedItem.technologies.length > 0 && (
            <li className="text-highlight flex items-start gap-4">
              <span className="bg-secondary mt-2 h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
              <span>
                <strong className="text-accent">Tech:</strong> {selectedItem.technologies.join(", ")}
              </span>
            </li>
          )}
          {getDescription(selectedItem).map((description) => (
            <li key={description} className="flex items-start gap-4">
              <span className="bg-secondary mt-2 h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default JobDescription;
