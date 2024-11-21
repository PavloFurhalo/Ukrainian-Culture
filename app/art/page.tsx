"use client"

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ArtPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад на головну</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Мистецтво та музика України</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Українське мистецтво крізь віки</h2>
          <p className="text-gray-600 mb-4">
            Від традиційного народного мистецтва до сучасних авангардних форм, українське мистецтво та музика відображають багату культурну спадщину та інноваційний дух нашого народу.
          </p>
          <Button onClick={() => router.push('/art/gallery')}>Відвідати віртуальну галерею</Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Видатні українські митці</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Казимир Малевич</li>
              <li>Марія Приймаченко</li>
              <li>Олександр Архипенко</li>
              <li>Катерина Білокур</li>
              <li>Іван Марчук</li>
              <li>Ада Рибачук</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Музичні жанри України</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Народна музика</li>
              <li>Класична музика</li>
              <li>Сучасна поп-музика</li>
              <li>Рок</li>
              <li>Електронна музика</li>
              <li>Джаз</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Культурний Всесвіт України. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  )
}