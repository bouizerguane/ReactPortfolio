// src/pages/Contact.tsx
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

// Générer les informations de contact à partir du profil
const getContactInfo = () => [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: profile.location,
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    value:
      profile.socials
        .find((s) => s.name === "GitHub")
        ?.url.split("/")
        .pop() || "@bouizerguane",
    href: profile.socials.find((s) => s.name === "GitHub")?.url || "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.name,
    href: profile.socials.find((s) => s.name === "LinkedIn")?.url || "#",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value:
      profile.socials
        .find((s) => s.name === "Twitter")
        ?.url.split("/")
        .pop() || "@bouizerguane",
    href: profile.socials.find((s) => s.name === "Twitter")?.url || "#",
  },
];

export default function Contact() {
  const contactInfo = getContactInfo();

  return (
    <section className="py-12">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Discutons de votre prochain projet ou opportunité de collaboration
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Carte unique avec toutes les informations de contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Me contacter
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-6 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group border border-transparent hover:border-primary/10"
                  target={
                    item.label !== "Téléphone" && item.label !== "Localisation"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.label !== "Téléphone" && item.label !== "Localisation"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-medium">
                      {item.label}
                    </p>
                    <p className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Message d'appel à l'action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10 text-center"
            >
              <h3 className="text-xl font-bold mb-3">Prêt à collaborer ?</h3>
              <p className="text-muted-foreground mb-4">
                N'hésitez pas à me contacter par email ou téléphone pour
                discuter de vos projets.
              </p>
              <p className="text-sm text-muted-foreground">
                Je réponds généralement dans les 24 heures.
              </p>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
