import { Outlet } from "react-router-dom";
import SidebarRumus from "/src/components/SidebarRumus";
import WhatsAppFloating from "../WhatsAppFloating";
import Footer from "../Footer"; 

export default function RumusLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <SidebarRumus />

        <main className="flex-1 p-5 pt-16 md:pt-6">
          <Outlet />
          <WhatsAppFloating />
        </main>
      </div>

      <Footer />
    </>
  );
}

  

