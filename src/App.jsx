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
import CountPage from "./components/rumus/CountPage";
import CountaPage from "./components/rumus/CountaPage";
import MaxPage from "./components/rumus/MaxPage";
import SumproductPage from "./components/rumus/SumproductPage";
import IfPage from "./components/rumus/IfPage";
import IfsPage from "./components/rumus/IfsPage";
import AndPage from "./components/rumus/AndPage";
import OrPage from "./components/rumus/OrPage";
import RoundPage from "./components/rumus/RoundPage"; 
import RoundupPage from "./components/rumus/RoundupPage";
import RounddownPage from "./components/rumus/RounddownPage";   
import CeilingPage from "./components/rumus/CeilingPage";
import FloorPage from "./components/rumus/FloorPage";
import NotPage from "./components/rumus/NotPage"; 

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
          {/* Rumus Perhitungan */}
          <Route path="/rumus/sum" element={<SumPage />} />
          <Route path="/rumus/average" element={<AveragePage />} />
          <Route path="/rumus/count" element={<CountPage />} />
          <Route path="/rumus/counta" element={<CountaPage />} />
          <Route path="/rumus/max" element={<MaxPage />} />
          <Route path="/rumus/sumproduct" element={<SumproductPage />} />
         {/* Rumus Pembuatan */} 
          <Route path="/rumus/round" element={<RoundPage />} />
          <Route path="/rumus/roundup" element={<RoundupPage />} />
          <Route path="/rumus/rounddown" element={<RounddownPage />} />
          <Route path="/rumus/ceiling" element={<CeilingPage />} />
          <Route path="/rumus/floor" element={<FloorPage />} />
         {/* Rumus Logika */}
         <Route path="/rumus/if" element={<IfPage />} />
          <Route path="/rumus/ifs" element={<IfsPage />} />
          <Route path="/rumus/and" element={<AndPage />} />
          <Route path="/rumus/or" element={<OrPage />} />
          <Route path="/rumus/not" element={<NotPage />} />
         {/* Rumus Ekstrak Data */}
           <Route path="/rumus/left" element={<LeftPage />} />
          <Route path="/rumus/mid" element={<MidPage />} />
          <Route path="/rumus/right" element={<RightPage />} />
          <Route path="/rumus/len" element={<LenPage />} />
         {/* Rumus Merapikan Data */}
          <Route path="/rumus/concatenate" element={<ConcatenatePage />} />
          <Route path="/rumus/&" element={<AmpersandPage />} />
          <Route path="/rumus/lower" element={<LowerPage />} />
          <Route path="/rumus/upper" element={<UpperPage />} />
          <Route path="/rumus/proper" element={<ProperPage />} />
         {/* Rumus Ekstrak Lookup */}
          <Route path="/rumus/vlookup" element={<VlookupPage />} />
          <Route path="/rumus/hlookup" element={<HlookupPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
