"use client"

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ModernPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад на головну</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Сучасна культура України</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Україна сьогодні</h2>
          <p className="text-gray-600 mb-4">
            Сучасна українська культура - це динамічний сплав традицій та інновацій. Від літератури до кіно, від музики до візуального мистецтва, українські митці створюють роботи, які резонують як на національному, так і на міжнародному рівні.
          </p>
          <Button onClick={() => router.push('/modern/events')}>Дізнатися про останні події</Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Сучасні українські митці</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Сергій Жадан</li>
              <li>Джамала</li>
              <li>Олег Сенцов</li>
              <li>Руслана Лижичко</li>
              <li>Андрій Курков</li>
              <li>Оксана Забужко</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Культурні події</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Книжковий Арсенал</li>
              <li>Одеський міжнародний кінофестиваль</li>
              <li>Atlas Weekend</li>
              <li>ГогольFest</li>
              <li>Львівський форум видавців</li>
              <li>Kyiv Art Week</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Культурний Всесвіт України.</p>
        </div>
      </footer>
    </div>
  )
}