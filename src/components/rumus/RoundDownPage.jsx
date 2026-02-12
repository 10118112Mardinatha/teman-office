import RumusTemplate from "../../components/rumus/RumusTemplate";
import RounddownImg from "/src/assets/contoh/rounddown2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function RounddownPage() {
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
      title="ROUNDDOWN"
      functionDesc="Fungsi ROUNDDOWN digunakan untuk membulatkan angka ke bawah (menurunkan nilai) sesuai jumlah digit tertentu."
      usage="Gunakan ROUNDDOWN saat kamu ingin memastikan angka selalu dibulatkan ke bawah, misalnya membulatkan nilai ujian, harga, atau angka desimal agar tidak melebihi nilai sebenarnya."
      example="=ROUNDDOWN(3.14159,2)"
      templaterumus={'=ROUNDDOWN(number, num_digits)\nnumber → angka yang ingin dibulatkan\nnum_digits → jumlah digit yang diinginkan'}
      usageImage="/src/assets/contoh/rounddown1.png"
      videoUrl="https://www.youtube.com/embed/gUrKBhUs3EU"
      test={
        <div className="mt-4 space-y-6 w-full">
          {/* SOAL UJI COBA */}
          <div className="p-5 space-y-4 w-full">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📝 Soal 
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Perhatikan data nilai siswa di Excel.  
              Tugas kamu adalah <strong>membulatkan nilai ke bawah</strong> 
              menggunakan rumus <strong>ROUNDDOWN</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi ROUNDDOWN</strong> (bukan manual).</li>
              <li>Bulatkan angka sesuai jumlah digit yang diminta.</li>
              <li>Tulis rumus pada <strong>cell yang sudah disediakan</strong>.</li>
              <li>Jika benar, Excel akan menampilkan hasil pembulatan ke bawah.</li>
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
              src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQQWx58MkWBdSqHcg0m3EorkAQNfSLc1sNQn4dDGuwlAk-s?em=2&AllowTyping=True&ActiveCell='Sheet1'!C2&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
            />
          )}
        </div>
      }
    >

      {/* CONTOH KASUS */}
      <div className="space-y-5 w-full">
        {/* JUDUL */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Membulatkan Angka ke Bawah</h3>
          <p className="text-sm text-gray-600">
            Perhatikan contoh data di Excel berikut. Kita ingin membulatkan angka desimal ke bawah sesuai jumlah digit tertentu menggunakan rumus ROUNDDOWN.
          </p>
        </div>

        {/* GAMBAR CONTOH */}
        <div className="flex justify-center">
          <img
            src={RounddownImg}
            alt="Contoh penggunaan rumus ROUNDDOWN di Excel"
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
              src={RounddownImg}
              alt="Zoomed contoh ROUNDDOWN"
              className="max-h-[95vh] max-w-[95vw] object-contain"
            />
          </div>
        )}

        {/* RUMUS */}
        <div className="bg-gray-50 rounded-xl p-4 border">
          <p className="text-sm text-gray-600 mb-2">Rumus yang digunakan:</p>
          <code className="block bg-white rounded-lg px-4 py-2 text-sm text-indigo-600 font-medium">
            =ROUNDDOWN(3.14159,2)
          </code>
        </div>

        {/* HASIL */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
          <span className="font-medium text-indigo-700">Hasil Perhitungan</span>
          <span className="text-lg font-bold text-indigo-700">3.14</span>
        </div>

        {/* CATATAN TAMBAHAN */}
        <div className="text-xs text-gray-500 leading-relaxed">
          💡 <strong>Catatan: </strong> fungsi ROUNDDOWN selalu membulatkan angka ke bawah, berbeda dengan ROUND yang bisa ke atas atau ke bawah tergantung nilai.
        </div>
      </div>
    </RumusTemplate>
  );
}