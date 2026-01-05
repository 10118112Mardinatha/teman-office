import IntroCard from "../components/IntroCard";
import FunctionButton from "../components/FunctionButton";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-16 space-y-12"
      >
        <IntroCard />

        <div>
          <h2 className="text-xl font-bold mb-6">
            Rumus Perhitungan ✨
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <FunctionButton name="SUM" desc="Menjumlahkan data" />
            <FunctionButton name="AVERAGE" desc="Menghitung rata-rata" />
            <FunctionButton name="COUNT" desc="Menghitung jumlah data" />
            <FunctionButton name="COUNTA" desc="Menghitung jumlah data (termasuk teks)" />
            <FunctionButton name="MAX" desc="Menghitung nilai maksimum" />
            <FunctionButton name="LARGE" desc="Mencari nilai tertinggi kesekian" />
            <FunctionButton name="SMALL" desc="Mencari nilai terendah kesekian" />
            <FunctionButton name="SUMPRODUCT" desc="Menghitung hasil perkalian dan menjumlahkan" />  
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">
            Rumus Pembulatan ✨
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <FunctionButton name="ROUND" desc="Membulatkan angka ke desimal terdekat" />
            <FunctionButton name="ROUNDUP" desc="Membulatkan angka ke atas" />
            <FunctionButton name="ROUNDDOWN" desc="Membulatkan angka ke bawah" />
            <FunctionButton name="CEILING" desc="Membulatkan ke atas ke kelipatan terdekat" />
            <FunctionButton name="FLOOR" desc="Membulatkan ke bawah ke kelipatan terdekat" />
            <FunctionButton name="EVEN" desc="Membulatkan ke bilangan genap terdekat" />
            <FunctionButton name="ODD" desc="Membulatkan ke bilangan ganjil terdekat" />
            <FunctionButton name="INT" desc="mengambil nilai bulat" />  
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <About />

      {/* CONTACT */}
      <Contact />
    </>
  );
}
