import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

import Home from "./pages/Home";
import SumPage from "./components/rumus/SumPage";
import AveragePage from "./components/rumus/AveragePage";
import RumusLayout from "./components/rumus/RumusLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME + ABOUT + CONTACT */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
              <WhatsAppFloating />
            </>
          }
        />

        {/* RUMUS */}
        <Route element={<RumusLayout />}>
          <Route path="/rumus/sum" element={<SumPage />} />
          <Route path="/rumus/average" element={<AveragePage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
