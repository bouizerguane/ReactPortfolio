import { educations } from "@/data/education";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Formation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          Mon parcours académique en informatique
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {educations.map((education, index) => (
          <motion.div
            key={education.diplome}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full p-8 text-center hover:shadow-xl transition-all duration-300 group bg-card/50 backdrop-blur">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">
                {education.diplome}
              </h3>
              <p className="text-xl text-primary mt-2 font-semibold">
                {education.ecole}
              </p>
              <p className="text-muted-foreground mt-3 text-lg">
                {education.intitule}
              </p>
              <p className="mt-4 text-lg font-medium text-primary">
                {education.periode}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
