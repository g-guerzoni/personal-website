"use client";

import React, { useState } from "react";

import { useLocale } from "next-intl";

import { Nullable } from "@/types/global";
import { ITimeline } from "@/types/timeline";

import JobTitleItem from "./jobTitleItem";

const Timeline: React.FC<{ items: ITimeline[] }> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<Nullable<ITimeline>>(null);
  const locale = useLocale();

  const getDescription = (item: ITimeline): string[] => {
    return locale === "pt" ? item.descriptionBr : item.descriptionEn;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <JobTitleItem items={items} onSelectItem={setSelectedItem} />
      <aside className="hidden flex-col gap-4 overflow-hidden lg:flex" aria-label="Job details">
        {selectedItem && (
          <section aria-live="polite">
            <ul key={selectedItem.company + selectedItem.jobTitle} className="animate-fade-in flex flex-col gap-4">
              {getDescription(selectedItem).map((description) => (
                <li key={description} className="flex items-start gap-4">
                  <span className="bg-secondary mt-2 h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                  <span>{description}</span>
                </li>
              ))}
              {selectedItem.technologies.length > 0 && (
                <li className="flex items-start gap-4 text-highlight">
                  <span className="bg-secondary mt-2 h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
                  <span>
                    <strong className="text-accent">Tech:</strong> {selectedItem.technologies.join(", ")}
                  </span>
                </li>
              )}
            </ul>
          </section>
        )}
      </aside>
    </div>
  );
};

export default Timeline;
