import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
   await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  {
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  }
);

    formRef.current.reset();
    alert("Pesan berhasil dikirim ✉️");
  } catch (error) {
    console.error(error);
    alert("Gagal mengirim pesan 😥");
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      id="contact"
      className="scroll-mt-20 py-16 bg-gray-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
         Suaramu Penting Buat Kami 💬
        </h2>

        <p className="text-gray-600 mb-12">
         Ada saran, kritik, atau ide seru?
Jangan ragu kirim pesan ke kami. Bersama, kita bikin belajar Excel jadi makin menyenangkan 🚀
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-8"
        >
          {/* Nama & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <FloatingInput name="name" label="Nama" />
            <FloatingInput name="email" label="Email" type="email" />
          </div>

          {/* Subject */}
          <FloatingInput name="subject" label="Subjek" />

          {/* Message */}
          <FloatingTextarea name="message" label="Pesan" />

          {/* Button */}
          <motion.button
  whileHover={!loading ? { scale: 1.05 } : {}}
  whileTap={!loading ? { scale: 0.95 } : {}}
  disabled={loading}
  type="submit"
  className={`flex items-center justify-center gap-2
    bg-indigo-600 text-white py-3 rounded-full
    font-semibold shadow transition
    ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
>
  {loading ? (
    <>
      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      Mengirim...
    </>
  ) : (
    <>
      <Mail size={18} />
      Kirim Pesan
    </>
  )}
</motion.button>

        </form>
      </motion.div>
    </section>
  );
}

/* ===================== */
/* FLOATING INPUT */
/* ===================== */

function FloatingInput({ label, name, type = "text" }) {
  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required
        placeholder=" "
        className="peer w-full px-4 py-3
                   rounded-lg border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
     <label
  className="absolute left-4 top-3
             bg-gray-50 px-1
             text-gray-500 pointer-events-none transition-all

             peer-placeholder-shown:top-3
             peer-placeholder-shown:text-base
             peer-placeholder-shown:text-gray-400

             peer-focus:-top-2
             peer-focus:text-xs
             peer-focus:text-indigo-600

             peer-not-placeholder-shown:-top-2
             peer-not-placeholder-shown:text-xs
             peer-not-placeholder-shown:text-indigo-600"
>
  {label}
</label>

    </div>
  );
}

/* ===================== */
/* FLOATING TEXTAREA */
/* ===================== */

function FloatingTextarea({ label, name }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        rows="5"
        required
        placeholder=" "
        className="peer w-full px-4 py-3
                   rounded-lg border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
           <label
  className="absolute left-4 top-3
             bg-gray-50 px-1
             text-gray-500 pointer-events-none transition-all

             peer-placeholder-shown:top-3
             peer-placeholder-shown:text-base
             peer-placeholder-shown:text-gray-400

             peer-focus:-top-2
             peer-focus:text-xs
             peer-focus:text-indigo-600

             peer-not-placeholder-shown:-top-2
             peer-not-placeholder-shown:text-xs
             peer-not-placeholder-shown:text-indigo-600"
>
  {label}
</label>
    </div>
  );
}
