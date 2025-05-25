import React from 'react';
import { Link } from '@inertiajs/react';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Booking</h1>
        <p className="text-gray-400">Pilih layanan dan jadwal yang Anda inginkan</p>
      </header>

      {/* Form Booking */}
      <form className="space-y-4">
        {/* Nama */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Nama
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white p-2"
            placeholder="Masukkan nama Anda"
          />
        </div>

        {/* Layanan */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300">
            Layanan
          </label>
          <select
            id="service"
            name="service"
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white p-2"
          >
            <option value="">Pilih layanan</option>
            <option value="potong">Potong Rambut</option>
            <option value="cukur">Cukur Jenggot</option>
            <option value="paket">Paket Lengkap</option>
          </select>
        </div>

        {/* Tanggal */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-300">
            Tanggal
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white p-2"
          />
        </div>

        {/* Waktu */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-300">
            Waktu
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-white p-2"
          />
        </div>

        {/* Tombol Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Booking Sekarang
          </button>
        </div>
      </form>

      {/* Link Kembali */}
      <div className="mt-6 text-center">
        <Link href="/done-login" className="text-yellow-400 hover:underline">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
