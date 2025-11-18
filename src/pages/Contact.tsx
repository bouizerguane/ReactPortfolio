// src/pages/Contact.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Loader2,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

// Fonction pour générer les informations de contact à partir du profil
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
    href: `"tel:${profile.phone}"`,
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = getContactInfo();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi - À remplacer par votre service d'email
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Réinitialiser après succès
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

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

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Colonne de gauche - Me contacter */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Me contacter</h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
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
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Colonne de droite - Envoyez un message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-8 bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Envoyez un message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Message envoyé !</h4>
                <p className="text-muted-foreground">
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre message"
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou demande..."
                    rows={6}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires. Je m'engage à répondre sous 24h.
                </p>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
