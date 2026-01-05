import { Outlet } from "react-router-dom";
import SidebarRumus from "/src/components/SidebarRumus";
import WhatsAppFloating from "../WhatsAppFloating";

export default function RumusLayout() {
  return (
    <div className="flex min-h-screen">
      <SidebarRumus />

      <main className="flex-1 p-5 relative">
        <Outlet />
        {/* Floating WhatsApp */}
        <WhatsAppFloating />
      </main>
    </div>
  );
}
