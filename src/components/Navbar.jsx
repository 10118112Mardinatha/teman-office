import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("home");

  /* ===============================
     Scroll Spy (Active Menu)
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "contact"];

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-6">

        {/* ================= Logo ================= */}
        <motion.a
          href="#home"
          onClick={() => setActive("home")}
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="font-bold text-indigo-600 text-lg whitespace-nowrap cursor-pointer"
        >
          TemanOffice 📊
        </motion.a>

        {/* ================= Search (Center) ================= */}
        <div className="flex-1 flex justify-center">
          <motion.div
            animate={{ width: focus ? 320 : 260 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-md"
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              placeholder="Cari rumus"
              className="w-full px-4 py-2 pl-10 rounded-full
                         bg-white shadow-md text-sm
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
              🔍
            </span>
          </motion.div>
        </div>

        {/* ================= Desktop Menu ================= */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = active === item.href.replace("#", "");

            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() =>
                  setActive(item.href.replace("#", ""))
                }
                whileHover={{ y: -2 }}
                className={`relative font-medium transition
                  ${isActive ? "text-indigo-600" : "text-gray-700"}
                `}
              >
                {item.label}

                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500 rounded-full"
                  />
                )}
              </motion.a>
            );
          })}

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#explore"
            className="px-4 py-2 rounded-full bg-indigo-500
                       text-white text-sm font-semibold shadow"
          >
            Mulai Belajar 🚀
          </motion.a>
        </div>

        {/* ================= Mobile Button ================= */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </motion.button>
      </div>

      {/* ================= Mobile Menu ================= */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white px-6 py-4 space-y-4 shadow"
        >
          {navItems.map((item) => {
            const isActive = active === item.href.replace("#", "");

            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.href.replace("#", ""));
                  setOpen(false);
                }}
                whileTap={{
                  scale: 0.96,
                  backgroundColor: "rgba(99,102,241,0.15)",
                }}
                transition={{ duration: 0.15 }}
                className={`block rounded-lg px-3 py-2 font-medium
                  ${isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700"}
                `}
              >
                {item.label}
              </motion.a>
            );
          })}

          <motion.a
            whileTap={{ scale: 0.95 }}
            href="#explore"
            className="block text-center bg-indigo-500
                       text-white py-2 rounded-full font-semibold"
          >
            Mulai Belajar 🚀
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
}
