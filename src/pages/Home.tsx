import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const profileImage = "/images/profile.jpg";

export default function Home() {
  return (
    <>
      {/* HERO SECTION — Élégant, professionnel, fond propre */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Fond global propre (blanc ou noir selon le thème) */}
        <div className="absolute inset-0 bg-background -z-10" />

        {/* Effet lumineux subtil et centré uniquement */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-primary/5 to-transparent" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full 
                           bg-gradient-to-r from-primary/8 via-transparent to-primary/8 blur-3xl opacity-70"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center px-6 max-w-5xl mx-auto z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img
                src={profileImage}
                alt={`${profile.name} - ${profile.title}`}
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-primary via-primary/90 to-blue-600 bg-clip-text text-transparent drop-shadow-lg"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-2xl md:text-4xl font-light text-muted-foreground"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 text-lg text-muted-foreground"
          >
            {profile.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 max-w-3xl mx-auto text-xl leading-relaxed text-muted-foreground"
          >
            {profile.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {profile.socials.map((s) => (
              <Button
                key={s.name}
                size="lg"
                variant="outline"
                className="backdrop-blur-sm border-muted"
                asChild
              >
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.name === "GitHub" && <Github className="mr-2 h-5 w-5" />}
                  {s.name === "LinkedIn" && (
                    <Linkedin className="mr-2 h-5 w-5" />
                  )}
                  {s.name === "Twitter" && <Mail className="mr-2 h-5 w-5" />}
                  {s.name}
                </a>
              </Button>
            ))}
            <Button size="lg" asChild>
              <Link to="/contact">Me contacter</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {profile.skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-4 py-2 bg-muted/50"
              >
                {skill}
              </Badge>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/70"
          >
            <ArrowDown className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* PROJETS RÉCENTS */}
      <section className="py-24 px-6 bg-muted/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Projets récents</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Ce que je construis avec passion
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Card className="h-full p-8 hover:shadow-2xl transition-all duration-500 group bg-card/90 backdrop-blur border-muted">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <Button variant="ghost" size="sm" asChild>
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
                        <ExternalLink className="mr-2 h-4 w-4" /> Live
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-16">
            <Button size="lg" asChild>
              <Link to="/projects">Voir tous les projets →</Link>
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
