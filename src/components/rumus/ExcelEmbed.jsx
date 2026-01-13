export default function ExcelEmbed({ src }) {
  return (
    <div className="w-full h-[520px] rounded-xl overflow-hidden border shadow">
      <iframe
        src={src}
        className="w-full h-full"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title="Excel Online"
      />
    </div>
  );
}
