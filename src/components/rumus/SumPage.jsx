import RumusTemplate from "../../components/rumus/RumusTemplate";

export default function SumPage() {
  return (
    <RumusTemplate
      title="SUM"
      functionDesc="Fungsi SUM digunakan untuk menjumlahkan beberapa angka dalam satu atau lebih range sel."
      usage="Digunakan untuk menghitung total nilai seperti total penjualan atau nilai siswa."
      example="=SUM(A1:A10)"
      videoUrl="https://www.youtube.com/embed/VIDEO_ID"
    >
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-600 mb-4">
          Contoh tabel penjumlahan:
        </p>

        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Nilai</th>
            </tr>
          </thead>
          <tbody>
            {[10, 20, 30].map((v, i) => (
              <tr key={i}>
                <td className="border px-3 py-2">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-4 font-medium text-indigo-600">
          Total: 60
        </p>
      </div>
    </RumusTemplate>
  );
}
