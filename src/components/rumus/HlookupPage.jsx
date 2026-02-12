import RumusTemplate from "./RumusTemplate";
import contohKasusSum from "/src/assets/contoh/hlookup2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function HlookupPage() {
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
      title="HLOOKUP"
      functionDesc="Fungsi HLOOKUP digunakan untuk mencari data secara horizontal (dari kiri ke kanan). Excel akan mencari nilai di baris pertama tabel, lalu mengambil data dari baris lain di kolom yang sama."
      usage="Penggunaan HLOOKUP contohnya pada kasus berikut. Kita diminta untuk mencari pendapat bulanan barang berdasarkan Nama barang yang berada pada tabel barang. Maka kita gunakan fungsi HLOOkUP, lalu pilih data yang ingin dicari. Setelah itu masukan tabel referensi dan pada baris berapa nilai yang akan ditampilkan. Jangan lupa masukan TRUE (1) atau FALSE (0)"
      templaterumus={'=HLOOKUP(value, range, col_num, [false atau true]) \n \n value → nilai yang ingin dicari \n range → tabel referensi \n row_num → Nomor row atau cell number dalam range yang yang nilainya akan dipanggil atau ditampilkan \n [false atau true] → FALSE (cocok persis) / TRUE (mendekati)'}
      example='=HLOOKUP(A11, A2:D7, 4, FALSE)'
      usageImage="/src/assets/contoh/hlookup1.png"
      videoUrl="https://www.youtube.com/embed/watch?v=_7hN0MMY7s4"
      test={
              <div className="mt-4 space-y-6 w-full">
                {/* SOAL UJI COBA */}
                <div className="p-5 space-y-4 w-full">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    📝 Soal 
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Perhatikan data barang yang tersedia di Excel.  
                    Tugas kamu adalah <strong>mencari pendapatan bulana barang menurut nama barang. </strong>
                    menggunakan rumus <strong>HLOOKUP</strong>.
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>Gunakan <strong>fungsi HLOOKUP</strong> (bukan mengambil manual).</li>
                    <li>Gunakan referensi dari Tabel barang</li>
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
                    src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQRX3-kumVxOR5ahe1EyYYSrAe5yGLRIZUxfIK3B8K2wICY?em=2&AllowTyping=True&ActiveCell='Sheet1'!B11&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
                  />
                )}
              </div>
            }
    >
         {/* CONTOH KASUS */}
                   <div className="space-y-5 w-full">
                     {/* JUDUL */}
                     <div>
                       <h3 className="font-semibold text-lg mb-1">Menggunakan HLOOKUP dengan opsi TRUE</h3>
                       <p className="text-sm text-gray-600">
                         Perhatikan contoh data barang di Excel berikut. Dalam kasus ini diminta untuk mencari Pendapatan barang dari tabel referensi.
                         Dimana nilai yang dicari menggunakan bulan yang tidak identik. Rumus yang digunakan untuk mencari yaitu HLOOKUP dengan opsi True.
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
                         =HLOOKUP(A11, A2:D7, 3, TRUE)
                       </code>
                     </div>
           
                     {/* HASIL */}
                     <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
                       <span className="font-medium text-indigo-700">Hasilnya adalah</span>
                       <span className="text-lg font-bold text-indigo-700">42000</span>
                     </div>
           
                     {/* CATATAN TAMBAHAN */}
                     <div className="text-xs text-gray-500 leading-relaxed">
                       💡 <strong>Catatan: </strong> jangan lupa menggunakan ',' untuk pemisah antara cell yang ingin dijumlahkan.
                     </div>
                   </div>
    </RumusTemplate>
  );
}