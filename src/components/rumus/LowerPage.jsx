import RumusTemplate from "./RumusTemplate";
import contohKasusSum from "/src/assets/contoh/lower2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function LowerPage() {
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
      title="LOWER"
      functionDesc="Fungsi LOWER digunakan untuk mengubah seluruh teks menjadi huruf kecil. Fungsi ini sering digunakan untuk penyeragaman data teks."
      usage="Contoh penggunaan Lower saat Kita ingin  ingin mengubah data kode produk menjadi huruf kecil semua. Maka kita gunakan fungsi Lower dan pilih sel kode produk."
      templaterumus={'=LOWER(teks) \n \n teks→ teks atau sel yang akan diubah menjadi huruf kecil'}
      example='=LOWER(B2)'
      usageImage="/src/assets/contoh/lower1.png"
      videoUrl="https://www.youtube.com/embed/HLpb9iKKDqs"
      test={
              <div className="mt-4 space-y-6 w-full">
                {/* SOAL UJI COBA */}
                <div className="p-5 space-y-4 w-full">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    📝 Soal 
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Perhatikan data barang yang tersedia di Excel.  
                    Tugas kamu adalah <strong>mengubah kode produk menjadi huruf kecil semua </strong>
                    menggunakan rumus <strong>LOWER</strong>.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>Gunakan <strong>fungsi LOWER</strong> (bukan mengambil manual).</li>
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
                    src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQTNZh61uQnJSZ2GRqbOxx72AZ4XvW7OSwYu9Bd_ykb0zbM?em=2&AllowTyping=True&ActiveCell='Sheet1'!C2&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
                  />
                )}
              </div>
            }
    >
       {/* CONTOH KASUS */}
                      <div className="space-y-5 w-full">
                        {/* JUDUL */}
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Membuat gabungan 2 cell menjadi huruf kecil</h3>
                          <p className="text-sm text-gray-600">
                            Perhatikan contoh data nama di Excel berikut. Dalam kasus ini akan membuat gabungan dari nama belakang dan depan menjadi huruf kecil.
                            Rumus yang digunakan untuk menjadi huruf kecil yaitu Lower.
                          </p>
                        </div>
                
                        {/* GAMBAR CONTOH */}
                        <div className="flex justify-center">
                          <img
                            src={contohKasusSum}
                            alt="Contoh penggunaan rumus SUM di Excel"
                            className="max-h-72 rounded-xl border shadow-sm object-contain cursor-pointer"
                            onClick={() => setZoom(true)} // klik untuk zoom
                          />
                        </div>
                
                        {/* Modal Zoom */}
                        {zoom && (
                          <div
                            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                            onClick={() => setZoom(false)}
                          >
                       <img
                  src={contohKasusSum}
                  alt="Zoomed contoh SUM"
                  className="max-h-[95vh] max-w-[95vw] object-contain"
                />
                          </div>
                        )}
                
                        {/* RUMUS */}
                        <div className="bg-gray-50 rounded-xl p-4 border">
                          <p className="text-sm text-gray-600 mb-2">Rumus yang digunakan:</p>
                          <code className="block bg-white rounded-lg px-4 py-2 text-sm text-indigo-600 font-medium">
                            =LOWER(A2&" "&B2)
                          </code>
                        </div>
                
                        {/* HASIL */}
                        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
                          <span className="font-medium text-indigo-700">Hasilnya adalah</span>
                          <span className="text-lg font-bold text-indigo-700">budi rahman</span>
                        </div>
                
                        {/* CATATAN TAMBAHAN */}
                        <div className="text-xs text-gray-500 leading-relaxed">
                          💡 <strong>Catatan: </strong> jangan lupa menggunakan ',' untuk pemisah antara cell yang ingin dijumlahkan.
                        </div>
                      </div>
    </RumusTemplate>
  );
}