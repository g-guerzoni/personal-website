"use client";

import React, { useRef, useState } from "react";

import { BREAKPOINTS } from "@/types/constants";
import { Nullable } from "@/types/global";
import { ITimeline } from "@/types/timeline";

import JobDescription from "./jobDescription";
import JobList from "./jobList";

const Timeline: React.FC<{ items: ITimeline[] }> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const jobListRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<Nullable<ITimeline>>(items[0]);

  const handleSelectItem = (item: ITimeline) => {
    setSelectedItem(item);
    if (window.matchMedia(`(min-width: ${BREAKPOINTS.LG}px)`).matches) {
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2">
      <div ref={jobListRef}>
        <JobList items={items} onSelectItem={handleSelectItem} selectedItem={selectedItem} />
      </div>
      <JobDescription selectedItem={selectedItem} jobListRef={jobListRef} />
    </div>
  );
};

export default Timeline;
