export interface Project {
  id: string;
  number: string;
  name: string;
  headline: string;
  result: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  highlight?: string;
}

export interface Chapter {
  id: string;
  index: string;
  title: string;
  subtitle: string;
}
