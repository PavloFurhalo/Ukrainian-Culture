import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function TraditionsCalendarPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/traditions" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад до традицій</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Календар українських традицій</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Річний цикл українських традицій</h2>
          <div className="space-y-6">
            {[
              { month: "Січень", traditions: ["Різдво", "Щедрий вечір", "Водохреща"] },
              { month: "Лютий", traditions: ["Стрітення", "Колодій"] },
              { month: "Березень", traditions: ["Масляна", "Сорок святих"] },
              { month: "Квітень", traditions: ["Благовіщення", "Вербна неділя", "Великдень"] },
              { month: "Травень", traditions: ["Проводи", "День матері"] },
              { month: "Червень", traditions: ["Зелені свята", "Івана Купала"] },
              { month: "Липень", traditions: ["Петра і Павла", "Жнива"] },
              { month: "Серпень", traditions: ["Маковія", "Спаса", "Успіння Богородиці"] },
              { month: "Вересень", traditions: ["Різдво Богородиці", "Воздвиження"] },
              { month: "Жовтень", traditions: ["Покрова"] },
              { month: "Листопад", traditions: ["День пам'яті", "Пилипівка"] },
              { month: "Грудень", traditions: ["Андрія", "Миколая", "Святвечір"] }
            ].map((month, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">{month.month}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {month.traditions.map((tradition, tIndex) => (
                    <li key={tIndex}>{tradition}</li>
                  ))}
                </ul>
              </div>
            ))}
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