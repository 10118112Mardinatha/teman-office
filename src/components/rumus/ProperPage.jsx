import RumusTemplate from "./RumusTemplate";
//import contohKasusSum from "/src/assets/contoh/sum-case.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function ProperPage() {
  const [startTest, setStartTest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState(false); // <-- state untuk zoom

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStartTest(true);
    }, 1500);
  };

  return (
    <RumusTemplate
      title="PROPER"
      functionDesc="Fungsi PROPER digunakan untuk mengubah huruf pertama setiap kata menjadi huruf besar, sedangkan huruf lainnya menjadi kecil."
      usage="Contoh penggunaan Proper saat Kita ingin  ingin mengubah data nama yang huruf kecil semua maupun huruf kapital semua. Maka kita gunakan fungsi Lower dan pilih sel kode produk."
      templaterumus={'=PROPER(teks) \n \n teks→ teks atau sel yang akan diubah'}
      example='=PROPER(B2)'
      usageImage="/src/assets/contoh/proper1.png"
      videoUrl="https://www.youtube.com/embed/ZF9BndGYndY"
      test={
              <div className="mt-4 space-y-6 w-full">
                {/* SOAL UJI COBA */}
                <div className="p-5 space-y-4 w-full">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    📝 Soal 
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Perhatikan data Mahasiswa yang tersedia di Excel.  
                    Tugas kamu adalah <strong>mengubah nama menjadi huruf kapital di awal dan sisanya kecil </strong>
                    menggunakan rumus <strong>PROPER</strong>.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>Gunakan <strong>fungsi PROPER</strong> (bukan mengambil manual).</li>
                    <li>Jika benar, Excel akan menampilkan status <strong>BENAR</strong>.</li>
                  </ul>
                  <div className="bg-white border rounded-lg p-3 text-xs text-gray-500">
                  💡 Tips: Gunakan tanda <strong>; (titik koma) atau , (koma) </strong> jika salah satunya error.
                  </div>
                </div>
      
                {/* BUTTON */}
                {!startTest && !loading && (
                  <div className="text-center">
                    <button
                      onClick={handleStart}
                      className="w-full sm:w-auto px-6 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                    >
                      ▶ Mulai Uji Coba
                    </button>
                  </div>
                )}
      
                {/* LOADING */}
                {loading && (
                  <div className="flex flex-col items-center gap-3 py-8">
                    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-gray-500">Menyiapkan Excel...</p>
                  </div>
                )}
      
                {/* EXCEL */}
                {startTest && !loading && (
                  <ExcelEmbed
                    src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQTuwWwUYPl6QZZXHMkxPW3-Aa1H3LcF4I8dgCs-twzdtZ8?em=2&AllowTyping=True&ActiveCell='Sheet1'!C2&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
                  />
                )}
              </div>
            }
    >
    </RumusTemplate>
  );
}