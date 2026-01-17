import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RumusTemplate({
  title,
  functionDesc,
  templaterumus,
  usage,
  example,
  usageImage,
  children,
  test,
  videoUrl,
}) {
  const [zoomImage, setZoomImage] = useState(null); // state untuk zoom gambar

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  function CopyBox({ text }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      setCopied(true);
    };

    useEffect(() => {
      if (copied) {
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
      }
    }, [copied]);

    return (
      <div className="relative bg-black-50 border rounded-xl p-4">
        <pre className="font-mono text-sm text-black-800 overflow-x-auto">
          {text}
        </pre>

        {/* COPY BUTTON */}
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 text-black-500 hover:text-indigo-600 transition"
          title="Copy rumus"
        >
          {copied ? "✅" : "📋"}
        </button>

        {/* TOAST */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-7 right-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded-full shadow"
          >
            Rumus berhasil disalin
          </motion.div>
        )}
      </div>
    );
  }

  return (
 <motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45, ease: "easeOut" }}
  className="max-w-4xl mx-auto space-y-8 pt-18" // ← tambahkan padding-top
>
      {/* BREADCRUMB */}
      <nav className="text-sm text-black-400">
        <a href="/" className="hover:text-indigo-600 transition">
          Home
        </a>
        <span className="mx-1">/</span>
        <span className="text-black-400">Rumus Penjumlahan</span>
        <span className="mx-1">/</span>
        <span className="text-black-700 font-medium">{title}</span>
      </nav>

      {/* HEADER */}
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-black-800">
          {title}
        </h1>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
      </header>

      {/* FUNGSI */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-sm p-6 border"
      >
        <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
          📘 Fungsi
        </h2>
        <p className="text-black-600 leading-relaxed py-6">{functionDesc}</p>
         {/* RUMUS */}
        <div className="bg-gray-50 rounded-xl p-3 border">
          <p className="text-sm font-bold text-black mb-2 whitespace-pre-line"> {templaterumus} </p>
        </div>
      </motion.section>

      {/* KAPAN DIGUNAKAN */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-sm p-6 border"
      >
        <h2 className="font-semibold text-lg flex items-center gap-2">
          🎯 Kapan Digunakan
        </h2>

        <p className="text-black-600 leading-relaxed">{usage}</p>

        <div className="flex justify-center p-6">
          <img
            src={usageImage}
            alt={`Contoh penggunaan ${title}`}
            className="max-h-72 rounded-xl border shadow-sm object-contain cursor-pointer"
            onClick={() => setZoomImage(usageImage)} // klik untuk zoom
          />
        </div>

        {/* Modal Zoom */}
        {zoomImage && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setZoomImage(null)}
          >
            <motion.img
              src={zoomImage}
              alt="Zoomed"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-screen max-w-screen rounded-xl shadow-lg object-contain"
            />
          </div>
        )}

        {/* RUMUS + COPY */}
        <CopyBox text={example} />
      </motion.section>

      {/* CONTOH KASUS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-sm p-6 border"
      >
        <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
          🧪 Contoh Kasus
        </h2>
        {children}
      </motion.section>

      {/* Uji coba */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-sm p-6 border"
      >
        <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
          + Tes Uji Coba
        </h2>
        {test}
      </motion.section>

      {/* VIDEO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-sm p-6 border"
      >
        <h2 className="font-semibold text-lg flex items-center gap-2 mb-4">
          🎥 Video Penjelasan
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-md border">
            <iframe
              src={videoUrl}
              title={title}
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <p className="text-xs text-center text-black-500 mt-3">
            Tonton video ini setelah mencoba contoh kasus di atas
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
}
