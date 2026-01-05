import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Youtube,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

const menu = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com" },
  { icon: Twitter, href: "https://twitter.com" },
  { icon: Youtube, href: "https://youtube.com" },
  { icon: Mail, href: "mailto:support@temanoffice.id" },
];

export default function Footer() {
  const [active, setActive] = useState("home");

  // Detect section on scroll
  useEffect(() => {
    const handler = () => {
      menu.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.label.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <footer className=" text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8">

        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Brand */}
          <div className="max-w-md">
            <h3 className="text-xl font-bold">
              TemanOffice 📊
            </h3>
            <p className="text-white/80 text-sm mt-2">
              Belajar rumus Excel jadi mudah, fun, dan bisa dipraktikkan langsung.
            </p>
          </div>

          {/* Menu */}
          <nav className="flex flex-wrap gap-6 text-sm font-medium">
            {menu.map((item) => {
              const isActive = active === item.label.toLowerCase();
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative transition
                    ${
                      isActive
                        ? "text-yellow-300"
                        : "text-white/80 hover:text-white"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-300 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {socials.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-4 border-t border-white/20 text-sm text-white/70 flex flex-col md:flex-row md:justify-between gap-2">
          <span>
            © {new Date().getFullYear()} TemanOffice. All rights reserved.
          </span>

          <a
            href="https://kiwaridigital.online"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            By Kiwari Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
