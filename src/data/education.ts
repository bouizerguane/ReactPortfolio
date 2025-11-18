// src/data/education.ts
export type Education = {
  diplome: string;
  ecole: string;
  periode: string;
  intitule?: string;
};

export const educations: Education[] = [
  {
    diplome: "Master en Technologies Emergentes",
    ecole: "Ecole Normale Supéreiure, Marrakech",
    periode: "2025",
    intitule: "Informatique",
  },
  {
    diplome: "Certificat d'Aptitude à l'Enseignement du Second Degré",
    ecole: "Ecole Normale Supéreiure, Marrakech",
    periode: "2011",
    intitule: "Informatique",
  },
  {
    diplome: "Licence Professionnelle",
    ecole: "Faculté des Sciences Ain Chock, Casablanca",
    periode: "2010",
    intitule: "Systèmes, Bases de Données et Réseaux",
  },
  {
    diplome: "Baccalauréat Sciences Expérimentales",
    ecole: "Lycée Qualifiant Al Massira, Azilal",
    periode: "2007",
  },
];
