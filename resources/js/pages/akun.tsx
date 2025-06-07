import { Head, Link, usePage } from '@inertiajs/react';

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 inline-block mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A9.004 9.004 0 0112 15a9.004 9.004 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function Akun() {
  const { auth } = usePage().props;

  return (
    <>
      <Head title="Akun Saya" />

      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 border-b-[3px] border-yellow-500 bg-black shadow-md">
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Sicukur Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-bold text-yellow-500 font-playfair">Sicukur</h1>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href={route('booking')}
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold transition flex items-center"
            >
              Booking
            </Link>
            <Link
              href={route('akun')}
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 font-semibold transition flex items-center"
              title="Akun Saya"
            >
              <UserIcon />
              Akun
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="pt-[96px] px-4 sm:px-8 lg:px-16 py-10 flex-grow max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-500 font-playfair">Pengaturan Akun</h3>
          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold transition text-white"
          >
            Logout
          </Link>
        </main>

        <footer className="bg-gray-900 border-t-[2px] border-yellow-500 text-center py-6 mt-auto">
          <p className="text-yellow-500">© 2025 Sicukur. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
