export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Gestion des Inscriptions - Application Web",
    description:
      "Faciliter la gestion des cours, des étudiants et des inscriptions à travers une interface web simple et intuitive.",
    tags: [
      "Spring",
      "Thymeleaf",
      "HTML5/CSS3",
      "JavaScript/Bootstrap",
      "MySQL",
    ],
    github: "https://github.com/bouizerguane/ThymleafProjet.git",
  },
  {
    title: "PFE Licence",
    description:
      "Réalisation d\’une Application Web Gestion de Parc Informatiques et d\’Interventions.",
    tags: ["Java", "JSP/Servlet", "HTML/CSS", "MySql"],
  },
];
