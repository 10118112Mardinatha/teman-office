import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const slides = [
  {
    title: "Tentang TemanOffice",
    desc: `TemanOffice adalah platform belajar Excel
    yang dibuat untuk semua kalangan — pelajar,
    mahasiswa, pekerja, hingga UMKM.`,
    points: ["📘 Mudah dipahami", "🎯 Terstruktur", "🚀 Langsung bisa dipakai"],
  },
  {
    title: "Kenapa Belajar Excel?",
    desc: `Excel adalah skill wajib di dunia kerja.
    Dari administrasi, keuangan, sampai data analisis.`,
    points: [
      "📊 Dipakai hampir di semua pekerjaan",
      "💼 Nilai plus saat melamar kerja",
      "⏱️ Hemat waktu & tenaga",
    ],
  },
  {
    title: "Kenapa TemanOffice?",
    desc: `Kami percaya belajar harus menyenangkan.
    Tidak ribet, tidak membosankan, dan visual.`,
    points: [
      "🧠 Interaktif & visual",
      "⚡ Cocok pemula sampai advanced",
      "🎮 Belajar sambil praktik",
    ],
  },
  {
    title: "Siapa yang Cocok?",
    desc: `Siapapun yang ingin upgrade skill Excel
    dengan cara yang santai tapi efektif.`,
    points: [
      "🎓 Pelajar & Mahasiswa",
      "👨‍💻 Pekerja Kantoran",
      "🏪 UMKM & Freelancer",
    ],
  },
];

const pointColors = [
  "from-indigo-500 to-blue-500",
  "from-pink-500 to-rose-500",
  "from-emerald-500 to-teal-500",
];

export default function About() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <section
      id="about"
      className="scroll-mt-24 max-w-6xl mx-auto px-6 py-24"
    >
      <div
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl p-8 md:p-12
              bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600
              text-white shadow-xl
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {slides[index].title}
            </h2>

            <p className="text-white/90 max-w-3xl leading-relaxed mb-10">
              {slides[index].desc}
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {slides[index].points.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`
                    bg-gradient-to-r ${pointColors[i % pointColors.length]}
                    rounded-2xl px-5 py-4
                    font-semibold text-white
                    shadow-lg cursor-default
                  `}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DOT INDICATOR */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition
                ${
                  i === index
                    ? "bg-indigo-600 scale-125"
                    : "bg-gray-300 hover:bg-indigo-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
