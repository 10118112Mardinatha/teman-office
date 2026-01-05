import { motion } from "framer-motion";

export default function RumusTemplate({
  title,
  functionDesc,
  usage,
  example,
  children,
  videoUrl,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <a href="/" className="hover:text-indigo-600">Home</a>
        {" / "} 
        <span className="text-gray-500">Rumus Penjumlahan</span>
        {" / "}
        <span className="text-gray-700 font-medium">{title}</span>
      </div>

      {/* Judul */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        {title}
      </h1>

      {/* Fungsi */}
      <section>
        <h2 className="font-semibold text-lg mb-2">📘 Fungsi</h2>
        <p className="text-gray-600">{functionDesc}</p>
      </section>

      {/* Kapan Digunakan */}
      <section>
        <h2 className="font-semibold text-lg mb-2">
          🎯 Kapan Digunakan
        </h2>
        <p className="text-gray-600 mb-2">{usage}</p>
        <code className="block bg-gray-100 rounded-lg px-4 py-2 text-sm">
          {example}
        </code>
      </section>

      {/* Uji Coba */}
      <section>
        <h2 className="font-semibold text-lg mb-4">
          🧪 Uji Coba
        </h2>
        {children}
      </section>

      {/* Video */}
      <section>
        <h2 className="font-semibold text-lg mb-4">
          🎥 Video Penjelasan
        </h2>
        <div className="aspect-video rounded-xl overflow-hidden shadow">
          <iframe
            src={videoUrl}
            title={title}
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>
    </motion.div>
  );
}
