import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function TimelinePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/history" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад до історії</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Інтерактивна карта історії України</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Подорож крізь час</h2>
          <div className="space-y-4">
            {[
              { year: "3000 до н.е. - 2000 до н.е.", event: "Трипільська культура", description: "Одна з найдавніших землеробських культур Європи" },
              { year: "882 - 1240", event: "Київська Русь", description: "Середньовічна держава у Східній Європі" },
              { year: "1648 - 1764", event: "Козацька доба", description: "Період існування української козацької держави" },
              { year: "1917 - 1921", event: "Українська революція", description: "Період визвольних змагань українського народу" },
              { year: "1991 - сьогодення", event: "Незалежна Україна", description: "Період після проголошення незалежності України" }
            ].map((period, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold">{period.year}</h3>
                <h4 className="text-lg font-medium text-blue-600">{period.event}</h4>
                <p className="text-gray-600">{period.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Культурний Всесвіт України.</p>
        </div>
      </footer>
    </div>
  )
}