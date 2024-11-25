"use client"

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HistoryPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад на головну</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Історія культури України</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Подорож крізь віки</h2>
          <p className="text-gray-600 mb-4">
            Україна має багату та різноманітну культурну історію, що сягає глибоко в минуле. Від скіфських курганів до козацької доби, від княжої Русі до сучасної незалежної держави - кожен період залишив свій унікальний слід у культурній спадщині нашої країни.
          </p>
          <Button onClick={() => router.push('/history/timeline')}>Дослідити інтерактивну карту</Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Ключові історичні періоди</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Трипільська культура</li>
              <li>Київська Русь</li>
              <li>Козацька доба</li>
              <li>Українське національне відродження</li>
              <li>Радянський період</li>
              <li>Незалежна Україна</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Видатні діячі культури</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Тарас Шевченко</li>
              <li>Леся Українка</li>
              <li>Іван Франко</li>
              <li>Михайло Грушевський</li>
              <li>Олександр Довженко</li>
              <li>Ліна Костенко</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Культурний Всесвіт України.</p>
        </div>
      </footer>
    </div>
  )
}