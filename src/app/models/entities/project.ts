import { Icon } from "../enums/icons";

export interface Project {
  title: string;
  subtitle: string;
  githubLink: string;
  link: string;
  image: string;
  icons: Icon[];
}
