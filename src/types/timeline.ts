export interface ITimeline {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  descriptionEn: string[];
  descriptionBr: string[];
  technologies: string[];
  location: string;
  type: "part-time" | "full-time" | "freelance" | "education";
}