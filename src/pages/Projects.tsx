import { projects } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mes Projets</h1>
        <p className="text-xl text-muted-foreground">
          Ce que j'ai construit avec passion
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="p-6 hover:shadow-xl transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
              )}
              {project.link && (
                <Button size="sm" asChild>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Voir le site
                  </a>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
