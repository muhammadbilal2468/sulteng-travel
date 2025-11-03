// src/app/contact/page.js
import {
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Hubungi Kami</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Silakan hubungi kami melalui berbagai channel yang tersedia. Tim kami
          siap membantu Anda 24/7.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Informasi Kontak
            </h2>

            <div className="space-y-6">
              <div className="flex items-start p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-300">
                <FaWhatsapp className="text-green-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 text-lg font-medium">
                    +62 812-3456-7890
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Fast Response - Langsung chat kami
                  </p>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition duration-300"
                  >
                    Chat Sekarang
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition duration-300">
                <FaPhone className="text-blue-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Telepon
                  </h3>
                  <p className="text-gray-600 text-lg font-medium">
                    +62 451-12345
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Senin - Minggu, 08:00 - 22:00
                  </p>
                  <a
                    href="tel:+6245112345"
                    className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition duration-300"
                  >
                    Telepon Sekarang
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition duration-300">
                <FaInstagram className="text-pink-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Instagram
                  </h3>
                  <p className="text-gray-600 text-lg font-medium">
                    @sultengtravel
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Follow untuk update terbaru & promo
                  </p>
                  <a
                    href="https://instagram.com/sultengtravel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600 transition duration-300"
                  >
                    Follow Instagram
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
                <FaEnvelope className="text-red-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600 text-lg font-medium">
                    info@sultengtravel.com
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Customer Service & Pertanyaan
                  </p>
                  <a
                    href="mailto:info@sultengtravel.com"
                    className="inline-block mt-2 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition duration-300"
                  >
                    Kirim Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            {/* Alamat Kantor */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Lokasi Kantor
              </h2>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    Alamat Kantor Pusat
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Dr. Sutomo No. 123
                    <br />
                    Kec. Palu Selatan
                    <br />
                    Kota Palu, Sulawesi Tengah
                    <br />
                    94111
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      📍 <strong>Patokan:</strong> Seberang Mall Palu Central,
                      dekat dengan Bank BRI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Jam Operasional
              </h2>
              <div className="flex items-start">
                <FaClock className="text-purple-500 text-2xl mr-4 mt-1 flex-shrink-0" />
                <div className="w-full">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Senin - Jumat</span>
                      <span className="font-semibold text-blue-600">
                        08:00 - 22:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">Sabtu - Minggu</span>
                      <span className="font-semibold text-blue-600">
                        08:00 - 22:00
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Layanan Darurat</span>
                      <span className="font-semibold text-red-600">24/7</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    * Layanan darurat tersedia untuk keadaan mendesak melalui
                    WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-red-600 p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Butuh Bantuan Cepat?</h3>
              <p className="mb-4">
                Hubungi kami sekarang untuk konsultasi gratis!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+6245112345"
                  className="flex-1 bg-white text-blue-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Telepon
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Respon Cepat</h3>
              <p className="text-gray-600">
                Balas chat dalam hitungan menit, siap membantu 24/7
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaWhatsapp className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Multi Channel</h3>
              <p className="text-gray-600">
                Hubungi melalui WhatsApp, Telepon, atau Instagram
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-green-600 text-2xl" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Profesional</h3>
              <p className="text-gray-600">
                Tim customer service yang ramah dan berpengalaman
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
