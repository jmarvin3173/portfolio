import React, { useRef, useState } from "react";
import { sendEmail } from '../service/email';

function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const name = form.current[0].value.trim();
    const email = form.current[1].value.trim();
    const message = form.current[2].value.trim();

    try {
      const res = await sendEmail({ name, email, message });
      if (res.ok) {
        setStatus("✅ Message sent! Check your inbox for confirmation.");
        form.current.reset();
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      setStatus("❌ Failed to send message. Try again later.");
    }
    setSending(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-lg"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="your.email@example.com"
          className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-lg"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Tell me about your project..."
          className="w-full p-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 focus:border-white/50 transition-all duration-300 text-lg resize-vertical"
          required
        ></textarea>
        <button
          type="submit"
          disabled={sending}
          className={`w-full bg-gradient-to-r from-white to-gray-100 text-forest-green font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl text-lg sm:text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-gray-50 hover:to-white transition-all duration-300 border-2 border-white/20 ${sending ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status && <p className="mt-4 text-center text-white">{status}</p>}
    </div>
  );
}

export default ContactForm;