// src/data/experience.ts
export type Experience = {
  titre: string;
  organisme: string;
  periode: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    titre: "Enseignant du Second cycle en Informatique",
    organisme: "Lycée Ouzoud, Azilal",
    periode: "2011 — Présent",
    description: "Enseignement de l'algorithmie, réseaux informatiques",
    tags: [
      "Pédagogie",
      "Algorithme",
      "Programmation Python",
      "Architecture des ordinateurs",
    ],
  },
  {
    titre: "Enseignant en Informatique",
    organisme: "ISTA Azilal",
    periode: "2015 — 2022",
    description:
      "Enseignement de l'algorithme, réseaux informatiques, administration réseaux sous LINUX et bases de données.",
    tags: ["Algorithme", "Réseaux informatique", "LINUX", "Bases de données"],
  },
  {
    titre: "Stage en Développement Web",
    organisme: "Leoni Wiring Systems Ainsebaa, Casablanca",
    periode: "2010",
    description:
      'Réalisation d’une Application Web "Gestion de Parc Informatiques et d’Interventions" avec la technologie J2EE (JSP/Servlet).',
    tags: ["Java", "JSP/Servlet", "MySql", "HTML/CSS"],
  },
  {
    titre: "Technicien en informatique",
    organisme: "GSIMaroc, Casablanca",
    periode: "2009",
    description: "Maintenance de matériels informatique",
    tags: ["Maintenance", "Réparation"],
  },
];
