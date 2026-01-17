import RumusTemplate from "../../components/rumus/RumusTemplate";
import Not2 from "/src/assets/contoh/not2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function NotPage() {
  const [startTest, setStartTest] = useState(false);
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState(false);

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStartTest(true);
    }, 1500);
  };

  return (
    <RumusTemplate
      title="NOT"
      functionDesc="Fungsi NOT digunakan untuk membalikkan hasil logika. Jika kondisi TRUE maka hasilnya FALSE, dan jika kondisi FALSE maka hasilnya TRUE."
      usage="Gunakan NOT saat kamu ingin memastikan kebalikan dari suatu kondisi. Misalnya, seorang siswa dianggap TIDAK LULUS jika nilai Matematika TIDAK lebih dari 70."
      example="=NOT(B2>70)"
      templaterumus={`=NOT(logical) \n logical → kondisi yang diuji`}
      usageImage="/src/assets/contoh/not1.png"
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
              Tugas kamu adalah menentukan apakah seorang siswa <strong>TIDAK LULUS</strong> 
              dengan menggunakan rumus <strong>NOT</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi NOT</strong> (bukan logika manual).</li>
              <li>Syarat: Nilai Matematika &gt;= 70 → LULUS, gunakan NOT untuk membalikkan hasil.</li>
              <li>Tulis rumus pada <strong>cell yang sudah disediakan</strong>.</li>
              <li>Jika benar, Excel akan menampilkan status <strong>TIDAK LULUS</strong>.</li>
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
              src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQS9VLd8hXnzSqwkxEM4Hbf4AchT6rkLR4iY_oKNgldog60?em=2&AllowTyping=True&ActiveCell='Sheet1'!C2&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"
            />
          )}
        </div>
      }
    >

      {/* CONTOH KASUS */}
      <div className="space-y-5 w-full">
        <div>
          <h3 className="font-semibold text-lg mb-1">Membalikkan Kondisi</h3>
          <p className="text-sm text-gray-600">
            Perhatikan contoh data nilai siswa di Excel berikut. Kita ingin menentukan apakah siswa TIDAK LULUS dengan membalikkan kondisi menggunakan rumus NOT.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={Not2}
            alt="Contoh penggunaan rumus NOT di Excel"
            className="max-h-72 rounded-xl border shadow-sm object-contain cursor-pointer"
            onClick={() => setZoom(true)}
          />
        </div>

        {zoom && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setZoom(false)}
          >
            <img
              src={Not2}
              alt="Zoomed contoh NOT"
              className="max-h-[95vh] max-w-[95vw] object-contain"
            />
          </div>
        )}

        <div className="bg-gray-50 rounded-xl p-4 border">
          <p className="text-sm text-gray-600 mb-2">Rumus yang digunakan:</p>
          <code className="block bg-white rounded-lg px-4 py-2 text-sm text-indigo-600 font-medium">
            =NOT(C2&gt;=70)
          </code>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
          <span className="font-medium text-indigo-700">Hasil Perhitungan</span>
          <span className="text-lg font-bold text-indigo-700">FALSE → TIDAK LULUS</span>
        </div>

        <div className="text-xs text-gray-500 leading-relaxed">
          💡 <strong>Catatan: </strong> fungsi NOT akan membalikkan hasil logika dari kondisi yang diuji.
        </div>
      </div>
    </RumusTemplate>
  );
}