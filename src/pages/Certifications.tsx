// src/pages/Certifications.tsx
import { certifications } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Certifications
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          Mes certifications en informatique et pédagogie
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.nom}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-8 rounded-3xl border-2 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
              <div className="mb-8 flex justify-center">
                <div className="w-full h-80 rounded-2xl overflow-hidden border-4 border-primary/20 bg-muted/10 flex items-center justify-center p-6">
                  <img
                    src={cert.image}
                    alt={`Certification ${cert.nom}`}
                    className="w-full h-full object-contain rounded-xl hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold leading-tight text-center group-hover:text-primary transition mb-4">
                  {cert.nom}
                </h3>
                <p className="text-muted-foreground text-center text-lg font-medium mb-4">
                  {cert.origine}
                </p>

                <div className="mt-2 flex justify-center">
                  <Badge
                    variant="outline"
                    className="bg-primary/5 text-primary border-primary/20 text-base px-5 py-2 text-lg"
                  >
                    {cert.annee}
                  </Badge>
                </div>

                <div className="mt-8 flex justify-center">
                  {cert.url !== "#" && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-base text-primary hover:underline transition font-medium border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/5"
                    >
                      Vérifier la certification{" "}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
