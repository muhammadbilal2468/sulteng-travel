// src/app/article/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";

// Data dummy untuk artikel
const articlesData = {
  "wisata-alam-terbaik-sulawesi-tengah": {
    id: 1,
    slug: "wisata-alam-terbaik-sulawesi-tengah",
    title: "Wisata Alam Terbaik di Sulawesi Tengah",
    description: `Sulawesi Tengah menawarkan pesona alam yang luar biasa indah. Dari pantai berpasir putih, danau yang jernih, hingga hutan tropis yang masih asri. Setiap sudut provinsi ini menyimpan keunikan dan keindahan yang tak terlupakan.

## Taman Nasional Lore Lindu
Salah satu warisan dunia UNESCO yang menyimpan kekayaan biodiversitas dan situs megalitikum yang misterius. Di sini Anda dapat menemukan patung-patung batu purba yang masih menjadi teka-teki bagi para arkeolog.

## Danau Poso
Danau terbesar ketiga di Indonesia dengan air yang sangat jernih dan berwarna biru kehijauan. Danau ini dikelilingi oleh pegunungan yang hijau dan menjadi habitat bagi berbagai species ikan endemic.

## Kepulauan Togean
Gugusan pulau-pulau kecil di jantung Teluk Tomini yang menawarkan pemandangan bawah laut menakjubkan. Perfect untuk snorkeling dan diving dengan terumbu karang yang masih sangat terjaga.

Setiap lokasi menawarkan pengalaman wisata yang berbeda dan memukau. Jangan lupa untuk mempersiapkan perjalanan dengan baik dan menghormati budaya lokal setempat.`,
    image: "/article1.jpg",
    date: "15 Jan 2024",
    author: "Admin SultengTravel",
    category: "Wisata Alam",
    readTime: "5 min read",
  },
  "tips-rental-mobil-palu": {
    id: 2,
    slug: "tips-rental-mobil-palu",
    title: "Tips Rental Mobil di Palu",
    description: `Menyewa mobil di Palu bisa menjadi pengalaman yang menyenangkan jika Anda mengetahui tips dan triknya. Berikut panduan lengkap untuk Anda:

## 1. Pilih Perusahaan Terpercaya
- Cek reputasi melalui review online
- Pastikan memiliki izin usaha resmi
- Bandingkan beberapa penyedia jasa

## 2. Periksa Kondisi Kendaraan
- Test drive sebelum menyewa
- Cek kelengkapan dokumen (STNK, Kir)
- Pastikan kondisi mesin dan ban baik

## 3. Pahami Terms & Conditions
- Kebijakan bahan bakar
- Batas kilometer harian
- Asuransi dan deductible

Dengan mengikuti tips ini, pengalaman rental mobil Anda di Palu akan lebih aman dan nyaman.`,
    image: "/article2.jpg",
    date: "12 Jan 2024",
    author: "Tim Rental SultengTravel",
    category: "Tips & Trik",
    readTime: "3 min read",
  },
  // ... tambahkan data untuk artikel lainnya dengan slug yang sesuai
};

export default async function ArticleDetail({ params }) {
  // Tunggu params selesai di-resolve
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  // Fungsi untuk memformat teks dengan markdown sederhana
  const formatContent = (content) => {
    return content.split("\n").map((paragraph, index) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="text-2xl font-bold mt-8 mb-4 text-gray-800"
          >
            {paragraph.replace("## ", "")}
          </h2>
        );
      }
      if (paragraph.startsWith("- ")) {
        return (
          <li
            key={index}
            className="ml-6 list-disc text-gray-700 leading-relaxed"
          >
            {paragraph.replace("- ", "")}
          </li>
        );
      }
      if (paragraph.trim() === "") {
        return <br key={index} />;
      }
      return (
        <p key={index} className="mb-4 text-gray-700 leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition duration-300"
              >
                Beranda
              </Link>
            </li>
            <li>→</li>
            <li>
              <Link
                href="/article"
                className="hover:text-blue-600 transition duration-300"
              >
                Artikel
              </Link>
            </li>
            <li>→</li>
            <li className="text-gray-900 font-medium truncate">
              {article.title}
            </li>
          </ol>
        </nav>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Artikel */}
          <div className="bg-linear-to-r from-blue-600 to-red-600 text-white p-8">
            <div className="mb-4">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center">
                <span className="font-semibold">Oleh: {article.author}</span>
              </div>
              <div className="flex items-center">
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Content Artikel */}
          <div className="p-8">
            <div className="prose max-w-none">
              <div className="text-lg leading-relaxed">
                {formatContent(article.description)}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/article"
                className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
              >
                ← Kembali ke Daftar Artikel
              </Link>

              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                  Bagikan
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(articlesData)
              .filter((a) => a.slug !== article.slug)
              .slice(0, 2)
              .map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/article/${relatedArticle.slug}`}
                  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-4"
                >
                  <h3 className="font-semibold text-lg mb-2 text-gray-800 hover:text-blue-600 transition duration-300">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {relatedArticle.category} • {relatedArticle.date}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {relatedArticle.description.substring(0, 100)}...
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Generate static params untuk SEO
export async function generateStaticParams() {
  return [
    { slug: "wisata-alam-terbaik-sulawesi-tengah" },
    { slug: "tips-rental-mobil-palu" },
    { slug: "kuliner-khas-sulteng-wajib-dicoba" },
    { slug: "festival-budaya-lore-lindu" },
    { slug: "panduan-wisata-pulau-togean" },
    { slug: "transportasi-umum-sulawesi-tengah" },
    { slug: "penginapan-murah-kota-poso" },
    { slug: "spot-foto-instagramable-danau-poso" },
  ];
}

// Metadata untuk SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan - SultengTravel",
    };
  }

  return {
    title: `${article.title} - SultengTravel`,
    description: article.description.substring(0, 160),
  };
}
