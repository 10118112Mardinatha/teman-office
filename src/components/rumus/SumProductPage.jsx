import RumusTemplate from "../../components/rumus/RumusTemplate";
import SumproductImg from "/src/assets/contoh/sumproduct2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function SumproductPage() {
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
      title="SUMPRODUCT"
      functionDesc="Fungsi SUMPRODUCT digunakan untuk mengalikan nilai dalam range yang sesuai lalu menjumlahkan hasilnya."
      usage="Gunakan SUMPRODUCT saat kamu ingin menghitung total nilai dari perkalian, misalnya jumlah harga x kuantitas."
      example="=SUMPRODUCT(B2:B5,C2:C5)"
      templaterumus={'=SUMPRODUCT(array1, [array2], ...)\narray1 → range pertama\narray2 → range kedua'}
      usageImage="/src/assets/contoh/sumproduct1.png"
      videoUrl="https://www.youtube.com/embed/4jzvYwV0i2g"
      test={
        <div className="mt-4 space-y-6 w-full">
          {/* SOAL UJI COBA */}
          <div className="p-5 space-y-4 w-full">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📝 Soal 
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Perhatikan data penjualan barang di Excel.  
              Tugas kamu adalah menghitung <strong>total nilai penjualan</strong> 
              menggunakan rumus <strong>SUMPRODUCT</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi SUMPRODUCT</strong> (bukan hitung manual).</li>
              <li>Kalikan harga dengan jumlah barang, lalu jumlahkan hasilnya.</li>
              <li>Tulis rumus pada <strong>cell yang sudah disediakan</strong>.</li>
              <li>Jika benar, Excel akan menampilkan total penjualan.</li>
            </ul>
            <div className="bg-white border rounded-lg p-3 text-xs text-gray-500">
              💡 Tips: Gunakan tanda <strong>=</strong> untuk memulai rumus
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
              src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQSTWglHt4EPT4EDn7iWxvweAZj51QUIaPkpPvcgE1oX5GU?em=2&AllowTyping=True&ActiveCell='Sheet1'!B7&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
            />
          )}
        </div>
      }
    >

      {/* CONTOH KASUS */}
      <div className="space-y-5 w-full">
        {/* JUDUL */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Menghitung Total Penjualan</h3>
          <p className="text-sm text-gray-600">
            Perhatikan contoh data penjualan barang di Excel berikut. Kita ingin menghitung total penjualan dengan mengalikan harga dengan jumlah barang, lalu menjumlahkan hasilnya menggunakan rumus SUMPRODUCT.
          </p>
        </div>

        {/* GAMBAR CONTOH */}
        <div className="flex justify-center">
          <img
            src={SumproductImg}
            alt="Contoh penggunaan rumus SUMPRODUCT di Excel"
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
              src={SumproductImg}
              alt="Zoomed contoh SUMPRODUCT"
              className="max-h-[95vh] max-w-[95vw] object-contain"
            />
          </div>
        )}

        {/* RUMUS */}
        <div className="bg-gray-50 rounded-xl p-4 border">
          <p className="text-sm text-gray-600 mb-2">Rumus yang digunakan:</p>
          <code className="block bg-white rounded-lg px-4 py-2 text-sm text-indigo-600 font-medium">
            =SUMPRODUCT(B2:B5,C2:C5)
          </code>
        </div>

        {/* HASIL */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
          <span className="font-medium text-indigo-700">Hasil Perhitungan</span>
          <span className="text-lg font-bold text-indigo-700">250000</span>
        </div>

        {/* CATATAN TAMBAHAN */}
        <div className="text-xs text-gray-500 leading-relaxed">
          💡 <strong>Catatan: </strong> fungsi SUMPRODUCT sangat berguna untuk menghitung total dari perkalian dua atau lebih range secara otomatis.
        </div>
      </div>
    </RumusTemplate>
  );
}