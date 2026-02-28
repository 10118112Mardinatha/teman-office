import RumusTemplate from "../../components/rumus/RumusTemplate";
import contohKasusSum from "/src/assets/contoh/sum-case.png";   
import ExcelEmbed from "./ExcelEmbed";
import { useState } from "react";

export default function SumPage() {
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
      title="SUM"
      functionDesc=" Fungsi SUM digunakan untuk menjumlahkan angka dalam satu atau beberapa sel di Excel. Fungsi ini adalah rumus paling dasar dan paling sering digunakan dalam pekerjaan sehari-hari seperti laporan, keuangan, dan rekap data."
      templaterumus={`=> =SUM(Data)  \n => Data = Diisi Range atau Sel yang ingin dijumlahkan`} 
      usage="Gunakan SUM saat kamu ingin menghitung total nilai, seperti total penjualan, jumlah nilai siswa, total pengeluaran, atau rekap data numerik lainnya. Dengan cara sederhana, kamu tinggal memasukkan range sel yang ingin dijumlahkan. seperti Contoh dibawah ini : gunakan SUM(RANGE)."
      example="=SUM(B2:B5)"
      usageImage="/src/assets/contoh/sum.png"
      videoUrl="https://www.youtube.com/embed/ZF9BndGYndY"
      test={
        <div className="mt-4 space-y-6 w-full">
          {/* SOAL UJI COBA */}
          <div className="p-5 space-y-4 w-full">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              📝 Soal 
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Perhatikan data harga barang yang tersedia di Excel.  
              Tugas kamu adalah menghitung <strong>total harga barang tertentu</strong>
              menggunakan rumus <strong>SUM</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>Gunakan <strong>fungsi SUM</strong> (bukan penjumlahan manual).</li>
              <li>Jumlahkan <strong>harga barang Pensil dan Buku</strong>.</li>
              <li>Tulis rumus pada <strong>cell yang sudah disediakan</strong>.</li>
              <li>Jika benar, Excel akan menampilkan status <strong>BENAR</strong>.</li>
            </ul>
            <div className="bg-white border rounded-lg p-3 text-xs text-gray-500">
              💡 Tips: Gunakan tanda <strong> ; (titik koma) atau , (koma) </strong> untuk menggunakan rumus tergantung versi excel kalian
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
              src="https://1drv.ms/x/c/7e81b692dc16e3ee/IQR5k8SkFz0QTosdx5R2u6MhAd87t6eWinzuwt5f-IuTC5o?em=2&AllowTyping=True&ActiveCell=%27Sheet1%27!B5&wdDownloadButton=True"
            />
          )}
        </div>
      }
    >

      {/* CONTOH KASUS */}
      <div className="space-y-5 w-full">
        {/* JUDUL */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Menjumlahkan Data Tertentu</h3>
          <p className="text-sm text-gray-600">
            Perhatikan contoh data harga barang di Excel berikut. dimana yang ingin
            kita hitung adalah total nilai barang pensil dan buku saja menggunakan rumus SUM.
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
            =SUM(B2,B4)
          </code>
        </div>

        {/* HASIL */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3 gap-2 text-center sm:text-left">
          <span className="font-medium text-indigo-700">Hasil Perhitungan</span>
          <span className="text-lg font-bold text-indigo-700">9000</span>
        </div>

        {/* CATATAN TAMBAHAN */}
        <div className="text-xs text-gray-500 leading-relaxed">
          💡 <strong>Catatan: </strong> jangan lupa menggunakan ',' untuk pemisah antara cell yang ingin dijumlahkan.
        </div>
      </div>
    </RumusTemplate>
  );
}