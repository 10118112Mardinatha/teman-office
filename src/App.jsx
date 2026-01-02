import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-blue-600">
          Framer Motion Aktif 🎉
        </h1>
      </motion.div>
    </div>
  );
}
