// src/app/components/WhatsAppIcon.js
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
  const phoneNumber = "6282337175785";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-3 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-110 md:bottom-16 md:right-4 md:p-3 lg:p-4"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp className="text-xl md:text-2xl" />
    </a>
  );
}
