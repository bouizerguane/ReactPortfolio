import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Experience from "@/pages/Experience";
import Education from "@/pages/Education";
import Certifications from "@/pages/Certifications";
import Contact from "@/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <Education /> },
      { path: "certifications", element: <Certifications /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
