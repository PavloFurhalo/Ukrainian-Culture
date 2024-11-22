import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/modern" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад до сучасної культури</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Культурні події України</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Книжковий Арсенал", date: "Травень 2024", location: "Київ", description: "Міжнародний фестиваль книговидання та літератури" },
            { name: "Одеський міжнародний кінофестиваль", date: "Липень 2024", location: "Одеса", description: "Щорічний кінофестиваль, що представляє найкращі українські та міжнародні фільми" },
            { name: "Atlas Weekend", date: "Липень 2024", location: "Київ", description: "Один з найбільших музичних фестивалів Східної Європи" },
            { name: "ГогольFest", date: "Вересень 2024", location: "Маріуполь", description: "Фестиваль сучасного мистецтва, що об'єднує театр, музику, кіно та візуальне мистецтво" },
            { name: "Львівський форум видавців", date: "Вересень 2024", location: "Львів", description: "Найбільший книжковий ярмарок в Україні" },
            { name: "Kyiv Art Week", date: "Травень 2024", location: "Київ", description: "Тиждень сучасного мистецтва, що представляє роботи українських та міжнародних художників" }
          ].map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-1"><strong>Дата:</strong> {event.date}</p>
              <p className="text-gray-600 mb-2"><strong>Місце:</strong> {event.location}</p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <Button variant="outline">Детальніше про подію</Button>
            </div>
          ))}
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