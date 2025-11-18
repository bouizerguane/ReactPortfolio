import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Expérience Professionnelle
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          Mon parcours dans l'enseignement et le développement
        </motion.p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.titre + exp.organisme}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 border-l-2 border-primary/20"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-2xl font-bold">{exp.titre}</h3>
              <p className="text-xl text-primary mt-1">
                {exp.organisme} • {exp.periode}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-primary/5 text-primary border-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
