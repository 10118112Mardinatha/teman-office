import RumusTemplate from "../../components/rumus/RumusTemplate";
import Ifs2 from "/src/assets/contoh/if2.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function IfsPage() {
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
      title="IFS"
      functionDesc="Fungsi IFS digunakan untuk menguji beberapa kondisi sekaligus tanpa harus menulis IF bertingkat. Hasilnya akan mengikuti kondisi pertama yang bernilai TRUE."
      usage="Gunakan IFS saat kamu ingin membuat keputusan dengan banyak syarat. Misalnya, menentukan kategori nilai: A jika ≥ 85, B jika ≥ 70, C jika ≥ 50, dan D jika < 50."
      example='=IFS(C2>=85,"A",C2>=70,"B",C2>=50,"C",C2<50,"D")'
      templaterumus={`=IFS(logical_test1, value_if_true1, [logical_test2, value_if_true2], ...) \n logical_test → kondisi yang diuji \n value_if_true → hasil jika kondisi benar`}
      usageImage="/src/assets/contoh/ifs1.png"
      videoUrl="https://www.youtube.com/embed/4jzvYwV0i2g"
      test={
        <div className="mt-4 space-y-6 w-full">
          <div className="p-5 space-y-4 w-full">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📝 Soal 
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Perhatikan data nilai siswa di Excel.  
              Tugas kamu adalah menentukan <strong>kategori nilai</strong> 
              dengan menggunakan rumus <strong>IFS</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi IFS</strong> (bukan IF bertingkat manual).</li>
              <li>Kategori: A jika ≥ 85, B jika ≥ 70, C jika ≥ 50, D jika &lt; 50.</li>
              <li>Tulis rumus pada <strong>cell yang sudah disediakan</strong>.</li>
              <li>Jika benar, Excel akan menampilkan kategori sesuai nilai.</li>
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
          <h3 className="font-semibold text-lg mb-1">Menentukan Kategori Nilai</h3>
          <p className="text-sm text-gray-600">
            Perhatikan contoh data nilai siswa di Excel berikut. Kita ingin menentukan kategori nilai berdasarkan skor menggunakan rumus IFS.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={Ifs2}
            alt="Contoh penggunaan rumus IFS di Excel"
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
              src={Ifs2}
              alt="Zoomed contoh IFS"
              className="max-h-[95vh] max-w-[95vw] object-contain"
            />
          </div>
        )}

        <div className="bg-gray-50 rounded-xl p-4 border">
          <p className="text-sm text-gray-600 mb-2">Rumus yang digunakan:</p>
          <code className="block bg-white rounded-lg px-4 py-2 text-sm text-indigo-600 font-medium">
            =IFS(C2&gt;=85,"A",C2&gt;=70,"B",C2&gt;=50,"C",C2&lt;50,"D")
          </code>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
          <span className="font-medium text-indigo-700">Hasil Perhitungan</span>
          <span className="text-lg font-bold text-indigo-700">Kategori B</span>
        </div>

        <div className="text-xs text-gray-500 leading-relaxed">
          💡 <strong>Catatan: </strong> fungsi IFS memudahkan penulisan banyak kondisi tanpa harus membuat IF bertingkat.
        </div>
      </div>
    </RumusTemplate>
  );
}