import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalculator, FaEquals, FaSortNumericUp, FaBars } from "react-icons/fa";

const menu = [
  {
    title: "Rumus Penjumlahan",
    icon: <FaCalculator />,
    items: [
      { label: "SUM", path: "/rumus/sum", icon: <FaEquals /> },
      { label: "AVERAGE", path: "/rumus/average", icon: <FaEquals /> },
    ],
  },
  {
    title: "Rumus Pembulatan",
    icon: <FaSortNumericUp />,
    items: [
      { label: "ROUND", path: "/rumus/round", icon: <FaEquals /> },
      { label: "ROUNDUP", path: "/rumus/roundup", icon: <FaEquals /> },
      { label: "ROUNDDOWN", path: "/rumus/rounddown", icon: <FaEquals /> },
    ],
  },
];

export default function SidebarRumus() {
  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [openGroups, setOpenGroups] = useState({}); // track group yang terbuka

  // Saat route berubah, buka otomatis menu yang aktif
  useEffect(() => {
    const newOpen = {};
    menu.forEach((group) => {
      const isActive = group.items.some((item) => item.path === location.pathname);
      newOpen[group.title] = isActive;
    });
    setOpenGroups(newOpen);
  }, [location.pathname]);

  const toggleGroup = (title) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside
      className={`flex flex-col bg-gradient-to-b from-green-600 via-green-700 to-green-800 text-white 
        rounded-xl shadow-lg transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* HEADER LOGO + TOGGLE */}
      <div className="flex items-center justify-between p-3">
        <button
          onClick={() => navigate("/")}
          className={`flex items-center gap-2 font-bold text-white text-lg transition-opacity duration-300 ${
            collapsed ? "justify-center w-full" : ""
          }`}
        >
          🧮 {collapsed ? "Excel" : "ExcelRumus"}
        </button>

        {/* BURGER / TOGGLE ICON */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 text-white hover:text-gray-200 transition-colors duration-300 ${
            collapsed ? "mr-2" : "" /* kasih sedikit space saat collapsed */}
          `}
        >
          <FaBars />
        </button>
      </div>

      {/* MENU */}
      <div className="flex-1 mt-2 space-y-3 px-1">
        {menu.map((group, i) => {
          const active = group.items.some((item) => item.path === location.pathname);
          const isOpen = openGroups[group.title] || false;

          return (
            <div key={i} className="rounded-lg overflow-hidden">
              {/* HEADER GROUP */}
              <button
                onClick={() => toggleGroup(group.title)}
                className={`w-full flex items-center gap-2
                  px-3 py-2 rounded-md transition-colors duration-300
                  ${active ? "bg-green-500 text-white" : "text-white/90 hover:bg-green-600/50"}`}
              >
                {/* ICON */}
                <span className="text-lg">{group.icon}</span>
                {/* TEXT */}
                {!collapsed && <span className="flex-1 text-left">{group.title}</span>}
                {!collapsed && (
                  <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                )}
              </button>

              {/* SUBMENU */}
              <AnimatePresence>
                {isOpen && !collapsed && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-8 pt-1 pb-2 space-y-1"
                  >
                    {group.items.map((item) => (
                      <motion.div
                        key={item.label}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors duration-200
                            ${
                              isActive
                                ? "bg-green-400 text-white font-semibold"
                                : "hover:bg-green-500/40 text-white/90"
                            }`
                          }
                        >
                          {/* SUBMENU ICON */}
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </NavLink>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
