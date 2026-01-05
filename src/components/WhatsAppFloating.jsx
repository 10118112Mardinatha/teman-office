import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloating() {
  const phoneNumber = "6288211665169"; // pakai kode negara (62)
  const message = "Halo, saya ingin bertanya 😊";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 
                 bg-green-500 hover:bg-green-600 text-white 
                 px-4 py-3 rounded-full shadow-lg"
    >
      <FaWhatsapp size={22} />
     
    </motion.a>
  );
}
