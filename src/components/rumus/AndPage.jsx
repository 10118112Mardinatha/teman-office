import RumusTemplate from "../../components/rumus/RumusTemplate";
import And1 from "/src/assets/contoh/and1.png";   
import And2 from "/src/assets/contoh/and2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function AndPage() {
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
      title="AND"
      functionDesc="Fungsi AND digunakan untuk menguji beberapa kondisi sekaligus. Hasilnya TRUE jika semua kondisi terpenuhi, dan FALSE jika ada salah satu kondisi yang tidak terpenuhi."
      usage="Gunakan AND saat kamu ingin memastikan beberapa syarat harus benar sekaligus. Misalnya, seorang siswa lulus jika nilai Matematika lebih dari 70 DAN nilai Bahasa Inggris lebih dari 70."
      example="=AND(B2>70,C2>70)"
      templaterumus={'=AND(logical1, [logical2], ...) \n logical1 → kondisi pertama \n logical2 → kondisi kedua (opsional) \n ... → kondisi tambahan (opsional)'}
      usageImage="/src/assets/contoh/and1.png"
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
        Tugas kamu adalah menentukan apakah seorang siswa <strong>LULUS</strong> 
        dengan menggunakan rumus <strong>AND</strong>.
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
        <li>Gunakan <strong>fungsi AND</strong> (bukan logika manual).</li>
        <li>
          Syarat lulus: Nilai Matematika &gt; 70 DAN Nilai Bahasa Inggris &gt; 70.
        </li>
        <li>Tulis rumus pada <strong>cell yang sudah disediakan</strong>.</li>
        <li>Jika benar, Excel akan menampilkan status <strong>LULUS</strong>.</li>
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
        src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQRLoT_1adZfS64gofe3nHyoAf7DoLN5a7g7ASO6W732E6k?em=2&AllowTyping=True&ActiveCell='Sheet1'!D2&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
      />
    )}
  </div>
}
    >

      {/* CONTOH KASUS */}
  <div className="space-y-5 w-full">
        {/* JUDUL */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Menguji Beberapa Kondisi</h3>
          <p className="text-sm text-gray-600">
            Perhatikan contoh data nilai siswa di Excel berikut. Kita ingin menentukan apakah siswa lulus jika nilai Matematika dan Bahasa Inggris keduanya lebih dari 70 menggunakan rumus AND.
          </p>
        </div>

        {/* GAMBAR CONTOH */}
        <div className="flex justify-center">
          <img
            src={And2}
            alt="Contoh penggunaan rumus AND di Excel"
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
              src={And2}
              alt="Zoomed contoh AND"
              className="max-h-[95vh] max-w-[95vw] object-contain"
            />
          </div>
        )}


        {/* RUMUS */}
        <div className="bg-gray-50 rounded-xl p-4 border">
          <p className="text-sm text-gray-600 mb-2">Rumus yang digunakan:</p>
          <code className="block bg-white rounded-lg px-4 py-2 text-sm text-indigo-600 font-medium">
            =AND(B2&gt;70,C2&gt;70)

          </code>
        </div>

 {/* HASIL */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
          <span className="font-medium text-indigo-700">Hasil Perhitungan</span>
          <span className="text-lg font-bold text-indigo-700">TRUE (LULUS)</span>
        </div>

        {/* CATATAN TAMBAHAN */}
        <div className="text-xs text-gray-500 leading-relaxed">
          💡 <strong>Catatan: </strong> gunakan tanda &gt; untuk membandingkan nilai, dan pisahkan kondisi dengan koma.
        </div>
      </div>
    </RumusTemplate>

  );
}