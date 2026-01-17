import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCalculator,
  FaSortNumericUp,
  FaBrain,
  FaFont,
  FaCompress,
  FaSearch,
  FaClipboardList,
  FaColumns,
} from "react-icons/fa";

import IntroCard from "../components/IntroCard";
import About from "../pages/About";
import Contact from "../pages/Contact";

const categories = [
  {
    title: "Rumus Perhitungan",
    desc: "Penjumlahan & statistik",
    icon: <FaCalculator />,
    color: "from-green-400 to-green-600",
    items: ["SUM", "AVERAGE", "COUNT", "COUNTA", "MAX", "SUMPRODUCT"],
  },
  {
    title: "Rumus Pembulatan",
    desc: "Pembulatan angka",
    icon: <FaSortNumericUp />,
    color: "from-blue-400 to-blue-600",
    items: ["ROUND", "ROUNDUP", "ROUNDDOWN", "CEILING", "FLOOR"],
  },
  {
    title: "Rumus Logika",
    desc: "Logika & kondisi",
    icon: <FaBrain />,
    color: "from-purple-400 to-purple-600",
    items: ["IF", "IFS", "AND", "OR"],
  },
  {
    title: "Rumus Ekstrak Data",
    desc: "Pengolahan teks",
    icon: <FaFont />,
    color: "from-orange-400 to-orange-600",
    items: ["LEFT", "RIGHT", "MID", "LEN"],
  },
  {
    title: "Rumus Merapikan Data",
    desc: "Merapikan dan menggabungkan data",
    icon: <FaColumns />,
    color: "from-pink-400 to-pink-600",
    items: ["CONCATENATE", "&", "UPPER", "LOWER", "PROPER"],
  },
  {
    title: "Rumus Lookup",
    desc: "Pencarian data",
    icon: <FaSearch />,
    color: "from-indigo-400 to-indigo-600",
    items: ["VLOOKUP", "HLOOKUP"],
  },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <section id="home" 
      className="max-w-7xl mx-auto px-6 pt-16 space-y-12">
        <IntroCard />

        <h2 className="text-2xl font-bold">
          Kategori Rumus Excel ✨
        </h2>

        {/* CARD GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={cat.title} className="space-y-4">
              {/* CARD */}
              <motion.div
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  cursor-pointer
                  rounded-3xl
                  p-2
                  min-h-[170px]
                  text-white
                  bg-gradient-to-br
                 
                "
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                }}
              >
                <div className={`h-full flex flex-col justify-between bg-gradient-to-br ${cat.color} rounded-2xl p-6`}>
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="text-4xl"
                  >
                    {cat.icon}
                  </motion.div>

                  <div>
                    <h3 className="text-lg font-semibold">
                      {cat.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* SUB MENU */}
             <AnimatePresence>
  {openIndex === i && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="
        backdrop-blur-md
        bg-white/70
        rounded-2xl
        shadow-lg
        p-4
        flex flex-wrap gap-2
      "
    >
      {cat.items.map((item) => (
        <motion.button
          key={item}
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          variants={{
            hover: { scale: 1.05 },
          }}
          onClick={() => navigate(`/rumus/${item.toLowerCase()}`)}
          className="
            group
            px-4 py-2
            rounded-xl
            text-sm font-medium
            bg-white
            text-gray-700
            shadow-sm
            flex items-center gap-2
            transition
          "
        >
          <span>{item}</span>
          <span className="opacity-0 group-hover:opacity-100 transition">
            →
          </span>
        </motion.button>
      ))}
    </motion.div>
  )}
</AnimatePresence>

            </div>
          ))}
        </div>
      </section>

      <About />
      <Contact />
    </>
  );
}
