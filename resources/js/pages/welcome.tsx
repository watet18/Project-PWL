import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Welcome() {
    const { auth } = usePage().props;

    // Intersection Observer untuk animasi galeri
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        const hiddenGalleries = document.querySelectorAll('.galeri-item');
        hiddenGalleries.forEach(el => observer.observe(el));

        return () => {
            hiddenGalleries.forEach(el => observer.unobserve(el));
        };
    }, []);

    const navItems = [
        { href: '#', label: 'Beranda' },
        { href: '#layanan', label: 'Layanan' },
        { href: '#galeri', label: 'Galeri' },
        { href: '#kontak', label: 'Kontak' },
        { href: '#lokasi', label: 'Lokasi' },
    ];

    return (
        <>
            <Head title="Sicukur">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
                <style>
                    {`
                        body {
                            font-family: 'Instrument Sans', sans-serif;
                        }
                        h1, h2, h3, .font-playfair {
                            font-family: 'Playfair Display', serif;
                        }
                        .galeri-item {
                            opacity: 0;
                            transition: opacity 0.5s ease-in-out;
                        }
                        .galeri-item.show {
                            opacity: 1;
                        }
                    `}
                </style>
            </Head>
            <div className="min-h-screen bg-black text-white">
                {/* Header */}
                <header className="flex items-center justify-between px-8 py-4 border-b-[3px] border-yellow-500 bg-black shadow-md">
                    <div className="flex items-center space-x-2">
                        <img src="/images/logo.png" alt="Sicukur Logo" className="h-10 w-auto" />
                        <h1 className="text-2xl font-bold text-yellow-500 font-playfair">Sicukur</h1>
                    </div>
                    <nav className="flex items-center gap-6">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-yellow-500 font-medium relative group hover:text-yellow-300"
                            >
                                <span className="transition-all duration-200 group-hover:underline group-hover:underline-offset-4">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                        <Link
                            href={route('login')}
                            className="ml-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold transition"
                        >
                            Masuk
                        </Link>
                        <Link
                            href={route('register')}
                            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold transition"
                        >
                            Daftar
                        </Link>
                    </nav>
                </header>

                {/* Main Content */}
                <main>
                    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-10 lg:py-20">
                        <div className="max-w-lg text-center lg:text-left">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4 italic font-playfair">Welcome to</h2>
                            <p className="text-xl sm:text-3xl mb-6">
                                Cukur rapi, gaya pasti. Sicukur hadir dengan pelayanan terbaik, barber profesional, dan kenyamanan ekstra untuk setiap kunjunganmu.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                            <img
                                src="/images/barber.png"
                                alt="Barber Ilustrasi"
                                className="max-h-[500px] ml-40 object-contain rounded-lg"
                            />
                        </div>
                    </section>

                    <section id="galeri" className="px-4 sm:px-8 lg:px-16 py-10 bg-black text-center">
                        <h2 className="text-3xl font-bold text-yellow-500 mb-8 font-playfair">Testimoni</h2>
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-center gap-6">
                                <img src="/images/galeri1.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 1" />
                                <img src="/images/galeri2.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 2" />
                                <img src="/images/galeri3.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 3" />
                            </div>
                            <div className="flex justify-center gap-6">
                                <img src="/images/galeri4.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 4" />
                                <img src="/images/galeri5.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 5" />
                                <img src="/images/galeri6.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 6" />
                            </div>
                            <div className="flex justify-center gap-6">
                                <img src="/images/galeri7.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 7" />
                                <img src="/images/galeri8.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 8" />
                                <img src="/images/galeri9.png" className="galeri-item w-64 h-64 object-cover rounded-lg" alt="Testimoni 9" />
                            </div>
                        </div>
                    </section>

                    <section id="pricelist" className="px-4 sm:px-10 lg:px-32 py-16 bg-black text-white">
                        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12 tracking-wide font-playfair">Pricelist</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[
                                { title: "Gentlemen Grooming", price: "70K", desc: "A complete men’s grooming service. Dimulai dengan membersihkan wajah dengan handuk dingin kemudian potong rambut lalu keramas, selanjutnya membersihkan wajah dengan handuk hangat, mendapatkan pijat kepala, leher dan bahu lalu diakhiri dengan pengaplikasian tonic dan pomade untuk styling." },
                                { title: "Premium Grooming", price: "100K", desc: "Dimulai dengan membersihkan wajah dengan handuk dingin kemudian potong rambut lalu keramas, selanjutnya membersihkan wajah dengan handuk hangat, mendapatkan pijat kepala, leher dan bahu lalu diakhiri dengan pengaplikasian tonic dan pomade untuk styling." },
                                { title: "Gentlemen's Premium Package", price: "120K - 130K", desc: "Solusi perawatan rambut & wajah eksklusif. Treatment yang kamu dapatkan: grooming, hair spa, sheet mask & hair loss serum." },
                                { title: "Gentlemen's Premium Package", price: "160K", desc: "Solusi perawatan rambut & wajah eksklusif. Treatment yang kamu dapatkan: grooming, hair spa, sheet mask & hair loss serum." },
                                { title: "Gentlemen Classy Package", price: "140K - 150K", desc: "Solusi perawatan rambut & wajah eksklusif. Treatment yang kamu dapatkan: grooming (cukur & keramas), hair spa, black mask & hair loss serum." },
                                { title: "Gentlemen Classy Package", price: "180K", desc: "Solusi perawatan rambut & wajah eksklusif. Treatment yang kamu dapatkan: grooming (cukur & keramas), hair spa, black mask & hair loss serum." },
                                { title: "Gentlemen Royale Package", price: "210K - 220K", desc: "Detail layanan paket Royale..." },
                                { title: "Black Hair Coloring", price: "150K", desc: "Pewarnaan rambut hitam berkualitas tinggi." }
                            ].map((item, index) => (
                                <div key={index} className="border-2 border-yellow-500 p-6 bg-black rounded-md shadow-md transition-transform hover:scale-[1.02]">
                                    <h3 className="text-lg font-semibold italic text-yellow-500 font-playfair">
                                        {item.title} <span className="font-bold">{item.price}</span>
                                    </h3>
                                    <p className="mt-2 text-white text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="lokasi" className="px-4 sm:px-10 lg:px-32 py-16 bg-black text-white font-playfair">
                        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12 tracking-wide font-playfair">Lokasi</h2>
                        <div className="flex flex-col items-center gap-6">
                            <iframe
                                title="Lokasi Sicukur"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.760682000483!2d106.8594490737811!3d-6.295149261610502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed80b84ac47d%3A0x640561dd89719c88!2sUniversitas%20Indraprasta%20PGRI%20(UNINDRA)%2C%20Kampus%20B!5e0!3m2!1sid!2sid!4v1748183248217!5m2!1sid!2sid"
                                width="100%"
                                height="400"
                                className="rounded-lg border-2 border-yellow-500"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <p className="text-sm text-gray-300 mt-4 text-center max-w-xl">
                                Kunjungi kami di lokasi strategis dan nyaman. Nikmati pelayanan terbaik dari barber profesional Sicukur.
                            </p>
                        </div>
                    </section>
                </main>

                <footer className="bg-gray-900 border-t-[2px] border-yellow-500 text-center py-6 mt-auto">
                    <p className="text-yellow-500">© 2025 Sicukur. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}
