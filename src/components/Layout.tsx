// src/components/Layout.tsx
import { Outlet, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const matcher = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const dark = matcher.matches;
      document.documentElement.classList.toggle("dark", dark);
      setIsDark(dark);
    };

    handleChange();
    matcher.addEventListener("change", handleChange);
    return () => matcher.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    const newDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", newDark);
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between px-4 sm:px-8">
          {/* Nom en grand + dégradé élégant */}
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/90 to-blue-600 bg-clip-text text-transparent tracking-tight"
          >
            Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-lg font-medium">
            {[
              { to: "/", label: "Accueil" },
              { to: "/projects", label: "Projets" },
              { to: "/experience", label: "Expérience" },
              { to: "/education", label: "Formation" },
              { to: "/certifications", label: "Certifications" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative transition-all duration-300 hover:text-primary pb-1
                  ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground/80"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:w-full after:h-0.5 after:bg-primary after:scale-x-0 
                  after:origin-right after:transition-transform after:duration-300
                  ${isActive ? "after:scale-x-100 after:origin-left" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Button - Mobile & Desktop */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-card/95 backdrop-blur-lg border-b"
            >
              <nav className="container px-4 py-6 flex flex-col gap-3">
                {[
                  { to: "/", label: "Accueil" },
                  { to: "/projects", label: "Projets" },
                  { to: "/experience", label: "Expérience" },
                  { to: "/education", label: "Formation" },
                  { to: "/certifications", label: "Certifications" },
                  { to: "/contact", label: "Contact" },
                ].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `py-4 px-4 text-lg font-medium rounded-lg transition-all duration-300 border-l-4
                      ${
                        isActive
                          ? "bg-primary/10 text-primary border-primary"
                          : "text-muted-foreground hover:text-primary hover:bg-muted/50 border-transparent"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN */}
      <main className="flex-1 container max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-24 sm:pt-24 sm:pb-32">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t py-8 sm:py-12 text-center">
        <p className="text-muted-foreground text-sm sm:text-base">
          © {new Date().getFullYear()} BOUIZERGUANE Mohamed • Tous droits
          réservés.
        </p>
      </footer>
    </div>
  );
}
