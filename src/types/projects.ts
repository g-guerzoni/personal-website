import { Nullable } from "./global";

export interface Project {
  name: string;
  descriptionEn: string;
  descriptionBr: string;
  demoUrl: Nullable<string>;
  githubUrl: string;
  technologies: string[];
}
