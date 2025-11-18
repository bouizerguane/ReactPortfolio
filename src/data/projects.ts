export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio 2025",
    description:
      "Ce site que tu visites actuellement. 100 % React + Tailwind + shadcn/ui.",
    tags: ["React", "TypeScript", "Tailwind", "shadcn/ui"],
    github: "https://github.com/tonpseudo/portfolio",
  },
  {
    title: "PFE Licence",
    description:
      "Réalisation d\’une Application Web Gestion de Parc Informatiques et d\’Interventions avec la technologie J2EE (JSP/Servlet).",
    tags: ["Java", "JSP/Servlet", "HTML/CSS", "MySql"],
    link: "#",
  },
];
