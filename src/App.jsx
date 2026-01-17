import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

import Home from "./pages/Home";
import SumPage from "./components/rumus/SumPage";
import LeftPage from "./components/rumus/LeftPage";
import AveragePage from "./components/rumus/AveragePage";
import RumusLayout from "./components/rumus/RumusLayout";
import MidPage from "./components/rumus/MidPage";
import RightPage from "./components/rumus/RightPage";
import LenPage from "./components/rumus/LenPage";
import ConcatenatePage from "./components/rumus/ConcatenatePage";
import AmpersandPage from "./components/rumus/&Page";
import UpperPage from "./components/rumus/UpperPage";
import ProperPage from "./components/rumus/ProperPage";
import LowerPage from "./components/rumus/LowerPage";
import VlookupPage from "./components/rumus/VlookupPage";
import HlookupPage from "./components/rumus/HlookupPage";

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
          <Route path="/rumus/left" element={<LeftPage />} />
          <Route path="/rumus/mid" element={<MidPage />} />
          <Route path="/rumus/right" element={<RightPage />} />
          <Route path="/rumus/len" element={<LenPage />} />
          <Route path="/rumus/concatenate" element={<ConcatenatePage />} />
          <Route path="/rumus/&" element={<AmpersandPage />} />
          <Route path="/rumus/lower" element={<LowerPage />} />
          <Route path="/rumus/upper" element={<UpperPage />} />
          <Route path="/rumus/proper" element={<ProperPage />} />
          <Route path="/rumus/vlookup" element={<VlookupPage />} />
          <Route path="/rumus/hlookup" element={<HlookupPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
