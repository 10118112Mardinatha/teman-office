import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// data categories untuk search
const categories = [
  {
    title: "Rumus Perhitungan",
    items: ["SUM", "AVERAGE", "COUNT", "COUNTA", "MAX", "SUMPRODUCT"],
  },
  {
    title: "Rumus Pembulatan",
    items: ["ROUND", "ROUNDUP", "ROUNDDOWN", "CEILING", "FLOOR"],
  },
  {
    title: "Rumus Logika",
    items: ["IF", "IFS", "AND", "OR"],
  },
  {
    title: "Rumus Ekstrak Data",
    items: ["LEFT", "RIGHT", "MID", "LEN"],
  },
  {
    title: "Rumus Merapikan Data",
    items: ["CONCATENATE", "&", "UPPER", "LOWER", "PROPER"],
  },
  {
    title: "Rumus Lookup",
    items: ["VLOOKUP", "HLOOKUP", "INDEX", "MATCH"],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("home");
  const navigate = useNavigate();

  // filter semua items dari categories
  const results = categories.flatMap((cat) =>
    cat.items
      .filter((item) => item.toLowerCase().includes(query.toLowerCase()))
      .map((item) => ({ category: cat.title, item }))
  );

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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-6 flex-wrap">
        {/* ================= Logo ================= */}
        <motion.a
          href="#home"
          onClick={() => setActive("home")}
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="font-bold text-indigo-600 text-lg whitespace-nowrap cursor-pointer"
        >
          KawanOffice 📊
        </motion.a>

        {/* ================= Search (Center) ================= */}
        <div className="flex-1 hidden sm:flex justify-center relative">
  <motion.div
    animate={{ width: focus ? 320 : 260 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
    className="relative w-full max-w-md sm:max-w-xs"
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
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      🔍
    </span>
  </motion.div>

  {/* Dropdown hasil pencarian */}
  <AnimatePresence>
    {focus && query && (
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        className="absolute top-12 w-72 bg-white rounded-xl shadow-lg p-2 z-50"
      >
        {results.length > 0 ? (
          results.map((res) => (
            <button
              key={res.item}
              onMouseDown={() =>
                navigate(`/rumus/${res.item.toLowerCase()}`)
              }
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-50 text-sm"
            >
              <span className="font-medium">{res.item}</span>
              <span className="text-gray-400 text-xs ml-2">
                {res.category}
              </span>
            </button>
          ))
        ) : (
          <div className="px-3 py-2 text-sm text-gray-500">
            Hasil tidak ditemukan ❌
          </div>
        )}
      </motion.div>
    )}
  </AnimatePresence>
</div>

        {/* ================= Desktop Menu ================= */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = active === item.href.replace("#", "");

            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.href.replace("#", ""))}
                whileHover={{ y: -2 }}
                className={`relative font-medium transition ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                }`}
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
            href="./rumus/sum"
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
          className="md:hidden text-2xl ml-auto"
        >
          ☰
        </motion.button>
      </div>

      {/* ================= Mobile Fullscreen Menu ================= */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed top-16 left-0 right-0 bottom-0 
                     bg-white px-6 py-4 space-y-4 shadow z-[999] h-screen overflow-hidden"
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
                className={`block rounded-lg px-3 py-2 font-medium ${
                  isActive ? "bg-indigo-50 text-indigo-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </motion.a>
            );
          })}

          <motion.a
            whileTap={{ scale: 0.95 }}
            href="#explore"
            className="block w-full text-center bg-indigo-500
                       text-white py-2 rounded-full font-semibold"
          >
            Mulai Belajar 🚀
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
}