import RumusTemplate from "../../components/rumus/RumusTemplate";
import contohKasusSum from "/src/assets/contoh/mid2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function MidPage() {
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
      title="MID"
      functionDesc="Fungsi MID digunakan untuk mengambil karakter dari posisi tertentu di dalam teks. Fungsi ini berguna jika data yang dibutuhkan berada di bagian tengah teks, bukan di awal atau akhir."
      usage="Pada contoh kasus penggunaan formula mid ini. Kita ingin mengambil kode barang yang ada pada kode produk. Maka kita gunakan MID dan pilih sel yang dipakai lalu masukan angka untuk memulai di karakter keberapa dan angka untuk berapa karakter yang ingin diambil."
      templaterumus={'=MID(text, start_num, num_chars) \n \n text → teks atau sel yang berisi data \n start_num → posisi awal karakter \n num_chars → jumlah karakter yang diambil dari kiri'}
      example="=MID(A2, 5, 4)"
      usageImage="/src/assets/contoh/mid1.png"
      videoUrl="https://www.youtube.com/embed/XOWpfi_GIPI"
      test={
        <div className="mt-4 space-y-6 w-full">
          {/* SOAL UJI COBA */}
          <div className="p-5 space-y-4 w-full">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📝 Soal 
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Perhatikan data barang yang tersedia di Excel.  
              Tugas kamu adalah mengambil <strong>4 karakter dimulai dari karakter ke 5 yang ada di kode produk </strong>
              menggunakan rumus <strong>MID</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi MID</strong> (bukan mengambil manual).</li>
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
              src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQRJAVpT9LaITJxOJtozeLE6ASnRpcTnbeNwBVMPIU7At7o?em=2&AllowTyping=True&ActiveCell='Sheet1'!C2&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
            />
          )}
        </div>
      }
    >
    {/* CONTOH KASUS */}
            <div className="space-y-5 w-full">
              {/* JUDUL */}
              <div>
                <h3 className="font-semibold text-lg mb-1">Mengambil 2 karakter dari tengah</h3>
                <p className="text-sm text-gray-600">
                  Perhatikan contoh data mahasiswa di Excel berikut. Dalam kasus ini diminta untuk mengambil no absen dari kolom nama file. 
                  Rumus yang digunakan untuk mengambil karakter dari tangah yaitu Mid.
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
                  =MID(A2, 9, 2)
                </code>
              </div>
    
              {/* HASIL */}
              <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
                <span className="font-medium text-indigo-700">Hasilnya adalah</span>
                <span className="text-lg font-bold text-indigo-700">03</span>
              </div>
    
              {/* CATATAN TAMBAHAN */}
              <div className="text-xs text-gray-500 leading-relaxed">
                💡 <strong>Catatan: </strong> jangan lupa menggunakan ',' untuk pemisah antara cell yang ingin dijumlahkan.
              </div>
            </div>
    </RumusTemplate>
  );
}