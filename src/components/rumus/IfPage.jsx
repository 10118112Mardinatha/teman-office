import RumusTemplate from "../../components/rumus/RumusTemplate";

import If2 from "/src/assets/contoh/if2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function IfPage() {
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
      title="IF"
      functionDesc="Fungsi IF digunakan untuk melakukan pengujian logika. Rumus ini akan menghasilkan satu nilai jika kondisi benar (TRUE), dan nilai lain jika kondisi salah (FALSE)."
      usage="Gunakan IF saat kamu ingin membuat keputusan berdasarkan kondisi tertentu. Misalnya, menentukan apakah seorang siswa LULUS atau TIDAK LULUS berdasarkan nilai ujian."
      example='=IF(C2>=70,"LULUS","TIDAK LULUS")'
      templaterumus={`=IF(logical_test, value_if_true, value_if_false) \n logical_test → kondisi yang diuji \n value_if_true → hasil jika kondisi benar \n value_if_false → hasil jika kondisi salah`}
      usageImage="/src/assets/contoh/if1.png"
      videoUrl="https://www.youtube.com/embed/4jzvYwV0i2g"
      test={
        <div className="mt-4 space-y-6 w-full">
          {/* SOAL UJI COBA */}
          <div className="p-5 space-y-4 w-full">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📝 Soal 
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Perhatikan data nilai siswa di Excel.  
              Tugas kamu adalah menentukan apakah seorang siswa <strong>LULUS</strong> atau <strong>TIDAK LULUS</strong> 
              dengan menggunakan rumus <strong>IF</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi IF</strong> (bukan logika manual).</li>
              <li>Syarat lulus: Nilai &gt;= 70.</li>
              <li>Tulis rumus pada <strong>cell yang sudah disediakan</strong>.</li>
              <li>Jika benar, Excel akan menampilkan status <strong>LULUS</strong> atau <strong>TIDAK LULUS</strong>.</li>
            </ul>
            <div className="bg-white border rounded-lg p-3 text-xs text-gray-500">
              💡 Tips: Gunakan tanda <strong>= (tanda sama dengan)</strong> untuk menggunakan rumus
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
              src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQTWCCZ-pl1NTLuoHy88xf8LAToZoI1naje_8m7vpRQJPZ8?em=2&AllowTyping=True&ActiveCell='Sheet1'!C2&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
            />
          )}
        </div>
      }
    >

      {/* CONTOH KASUS */}
      <div className="space-y-5 w-full">
        {/* JUDUL */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Menentukan Status Lulus/Tidak Lulus</h3>
          <p className="text-sm text-gray-600">
            Perhatikan contoh data nilai siswa di Excel berikut. Kita ingin menentukan apakah siswa lulus jika nilainya lebih dari atau sama dengan 70 menggunakan rumus IF.
          </p>
        </div>

        {/* GAMBAR CONTOH */}
        <div className="flex justify-center">
          <img
            src={If2}
            alt="Contoh penggunaan rumus IF di Excel"
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
              src={If2}
              alt="Zoomed contoh IF"
              className="max-h-[95vh] max-w-[95vw] object-contain"
            />
          </div>
        )}

        {/* RUMUS */}
        <div className="bg-gray-50 rounded-xl p-4 border">
          <p className="text-sm text-gray-600 mb-2">Rumus yang digunakan:</p>
          <code className="block bg-white rounded-lg px-4 py-2 text-sm text-indigo-600 font-medium">
            =IF(C2&gt;=70,"LULUS","TIDAK LULUS")
          </code>
        </div>

        {/* HASIL */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
          <span className="font-medium text-indigo-700">Hasil Perhitungan</span>
          <span className="text-lg font-bold text-indigo-700">LULUS</span>
        </div>

        {/* CATATAN TAMBAHAN */}
        <div className="text-xs text-gray-500 leading-relaxed">
          💡 <strong>Catatan: </strong> jangan lupa menggunakan tanda kutip ("") untuk teks hasil IF.
        </div>
      </div>
    </RumusTemplate>
  );
}