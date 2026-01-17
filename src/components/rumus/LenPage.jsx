import RumusTemplate from "../../components/rumus/RumusTemplate";
//import contohKasusSum from "/src/assets/contoh/sum-case.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function LenPage() {
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
      title="LEN"
      functionDesc="Fungsi LEN digunakan untuk menghitung jumlah karakter dalam sebuah teks. Semua karakter dihitung, termasuk huruf, angka, spasi, dan simbol."
      usage="Penggunaan LEN contohnya seperti kasus ini. Kita ingin mengetahui panjang karakter pada kode produk. Maka kita gunakan LEN dan pilih sel yang dipakai."
      templaterumus={'=LEN(text) \n \n text → teks atau sel yang berisi data'}
      example="=LEN(A2)"
      usageImage="/src/assets/contoh/len1.png"
      videoUrl="https://www.youtube.com/embed/ZF9BndGYndY"
      test={
        <div className="mt-4 space-y-6 w-full">
          {/* SOAL UJI COBA */}
          <div className="p-5 space-y-4 w-full">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📝 Soal 
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Perhatikan data barang yang tersedia di Excel.  
              Tugas kamu adalah menghitung <strong>banyak karakter pada kode produk </strong>
              menggunakan rumus <strong>LEN</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi LEN</strong> (bukan mengambil manual).</li>
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
              src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQR9_byi9xt1S6E8vSYkZDgPAdTtZqsfcxCX9PCRQ0EeJeM?em=2&AllowTyping=True&ActiveCell='Sheet1'!C2&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
            />
          )}
        </div>
      }
    >
    </RumusTemplate>
  );
}