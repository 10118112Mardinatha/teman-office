import RumusTemplate from "../../components/rumus/RumusTemplate";
import CountImg from "/src/assets/contoh/count2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function CountPage() {
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
      title="COUNT"
      functionDesc="Fungsi COUNT digunakan untuk menghitung jumlah cell yang berisi angka."
      usage="Gunakan COUNT saat kamu ingin mengetahui berapa banyak data numerik dalam suatu range, misalnya jumlah siswa yang memiliki nilai atau jumlah transaksi."
      example="=COUNT(B2:B10)"
      templaterumus={'=COUNT(value1, [value2], ...)\nvalue1 → cell pertama\nvalue2 → cell kedua (opsional)'}
      usageImage="/src/assets/contoh/count1.png"
      videoUrl="https://www.youtube.com/embed/QbQ_iHIV8XA"
      test={
        <div className="mt-4 space-y-6 w-full">
          {/* SOAL UJI COBA */}
          <div className="p-5 space-y-4 w-full">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📝 Soal 
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Perhatikan data nilai siswa di Excel.  
              Tugas kamu adalah menghitung <strong>jumlah cell yang berisi angka</strong> 
              menggunakan rumus <strong>COUNT</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi COUNT</strong> (bukan hitung manual).</li>
              <li>Hitung jumlah data angka pada range yang tersedia.</li>
              <li>Tulis rumus pada <strong>cell yang sudah disediakan</strong>.</li>
              <li>Jika benar, Excel akan menampilkan jumlah data angka.</li>
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
              src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQRtZWUOgnzcR63CHYwfCf-zAdElbGZyk3WQXNvmcFai6f8?em=2&AllowTyping=True&ActiveCell='Sheet1'!B7&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
            />
          )}
        </div>
      }
    >

      {/* CONTOH KASUS */}
      <div className="space-y-5 w-full">
        {/* JUDUL */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Menghitung Jumlah Data Angka</h3>
          <p className="text-sm text-gray-600">
            Perhatikan contoh data nilai siswa di Excel berikut. Kita ingin menghitung berapa banyak cell yang berisi angka menggunakan rumus COUNT.
          </p>
        </div>

        {/* GAMBAR CONTOH */}
        <div className="flex justify-center">
          <img
            src={CountImg}
            alt="Contoh penggunaan rumus COUNT di Excel"
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
              src={CountImg}
              alt="Zoomed contoh COUNT"
              className="max-h-[95vh] max-w-[95vw] object-contain"
            />
          </div>
        )}

        {/* RUMUS */}
        <div className="bg-gray-50 rounded-xl p-4 border">
          <p className="text-sm text-gray-600 mb-2">Rumus yang digunakan:</p>
          <code className="block bg-white rounded-lg px-4 py-2 text-sm text-indigo-600 font-medium">
            =COUNT(B2:B10)
          </code>
        </div>

        {/* HASIL */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
          <span className="font-medium text-indigo-700">Hasil Perhitungan</span>
          <span className="text-lg font-bold text-indigo-700">8</span>
        </div>

        {/* CATATAN TAMBAHAN */}
        <div className="text-xs text-gray-500 leading-relaxed">
          💡 <strong>Catatan: </strong> fungsi COUNT hanya menghitung cell berisi angka, tidak termasuk teks atau kosong.
        </div>
      </div>
    </RumusTemplate>
  );
}