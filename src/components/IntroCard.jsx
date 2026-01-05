import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function IntroCard() {
  const [text] = useTypewriter({
    words: [
      "Mau Belajar Rumus Apa Hari Ini?",
      "SUM? AVERAGE? IF? VLOOKUP?",
      "Belajar Excel Jadi Mudah 🚀",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl
                 bg-gradient-to-r from-blue-500 to-indigo-600
                 text-white p-8 md:p-12 shadow-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Selamat Datang di{" "}
            <span className="text-yellow-300">Kawan Office</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {text}
            <Cursor cursorColor="#FACC15" />
          </h2>

          <p className="text-white/90 mb-8 max-w-lg">
            Platform belajar Microsoft Excel termudah di Indonesia.
            Mulai dari dasar sampai rumus lanjutan.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/src/assets/excel1.svg"
            alt="Excel Illustration"
            className="
              w-56
              sm:w-64
              md:w-[320px]
              opacity-95
              drop-shadow-xl
            "
          />
        </motion.div>

      </div>
    </motion.div>
  );
}
