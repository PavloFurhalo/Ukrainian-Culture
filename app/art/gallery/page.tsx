import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'

export default function VirtualGalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/art" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад до мистецтва</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Віртуальна галерея українського мистецтва</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Шедеври українського мистецтва</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Козак Мамай", artist: "Невідомий художник", year: "18 століття", image: "/placeholder.svg?height=300&width=400" },
              { title: "Катерина", artist: "Тарас Шевченко", year: "1842", image: "/placeholder.svg?height=300&width=400" },
              { title: "Чорний квадрат", artist: "Казимир Малевич", year: "1915", image: "/placeholder.svg?height=300&width=400" },
              { title: "Соняшники", artist: "Катерина Білокур", year: "1950-ті", image: "/placeholder.svg?height=300&width=400" },
              { title: "Сині птахи у квітах", artist: "Марія Приймаченко", year: "1983", image: "/placeholder.svg?height=300&width=400" },
              { title: "Вже догорає", artist: "Іван Марчук", year: "1990-ті", image: "/placeholder.svg?height=300&width=400" }
            ].map((artwork, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <Image src={artwork.image} alt={artwork.title} width={400} height={300} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{artwork.title}</h3>
                  <p className="text-gray-600">{artwork.artist}</p>
                  <p className="text-gray-500">{artwork.year}</p>
                </div>
              </div>
            ))}
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