import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const iconMap = {
  SUM: "➕",
  AVERAGE: "📊",
  IF: "🧠",
};

const colorMap = {
  SUM: "from-green-100 to-green-200 text-green-700",
  AVERAGE: "from-blue-100 to-blue-200 text-blue-700",
  IF: "from-purple-100 to-purple-200 text-purple-700",
};

export default function FunctionButton({ name, desc }) {
    const navigate = useNavigate(); 
    const handleClick = () => {
        const path = `/rumus/${name.toLowerCase()}`;
        navigate(path);
    }    

  return (
    <motion.div
        onClick={handleClick}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`
        cursor-pointer
        rounded-2xl p-4
        bg-gradient-to-r ${colorMap[name] || "from-gray-100 to-gray-200"}
        shadow-sm hover:shadow-md
        flex items-center justify-between gap-4
      `}
    >
      {/* TEXT */}
      <div>
        <h3 className="font-semibold text-base">
          {name}
        </h3>
        <p className="text-xs opacity-80">
          {desc}
        </p>
      </div>

      {/* ICON */}
      <motion.div
        className="text-2xl"
        whileHover={{ scale: 1.3, rotate: -8 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {iconMap[name] || "📘"}
      </motion.div>
    </motion.div>
  );
}
