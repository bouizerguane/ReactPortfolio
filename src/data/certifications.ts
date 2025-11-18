// src/data/certifications.ts
export type Certification = {
  nom: string;
  origine: string;
  annee: string;
  url: string;
  image: string;
};

export const certifications: Certification[] = [
  {
    nom: "Développement Front-End moderne avec React",
    origine: "MLIAEdu",
    annee: "2025",
    url: "#",
    image: "/images/certifications/react.jpg",
  },
  {
    nom: "Hibernate & JPA",
    origine: "MLIAEdu",
    annee: "2025",
    url: "https://mliaedu.toubkalit.com/verify-certificate/28-5075dfa0-ba53-4090-b65e-3f4132c1437e-368155",
    image: "/images/certifications/hibernate.jpg",
  },
  {
    nom: "Fondamentaux et Concepts Avancés de la Programmation Java",
    origine: "MLIAEdu",
    annee: "2025",
    url: "https://mliaedu.toubkalit.com/verify-certificate/6-5075dfa0-ba53-4090-b65e-3f4132c1437e-738545",
    image: "/images/certifications/java.jpg",
  },
  {
    nom: "Microsoft Innovative Educator",
    origine: "Microsoft",
    annee: "2017",
    url: "#",
    image: "/images/certifications/mie.jpg",
  },
  {
    nom: "Microsoft Certified Educator",
    origine: "Microsoft",
    annee: "2016",
    url: "#",
    image: "/images/certifications/mce.jpg",
  },
];
