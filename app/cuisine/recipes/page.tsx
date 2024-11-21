import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function RecipesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/cuisine" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад до гастрономії</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Українські рецепти</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Борщ", ingredients: "Буряк, капуста, морква, цибуля, картопля, м'ясо", time: "2 години" },
            { name: "Вареники", ingredients: "Тісто, картопля, сир, вишні", time: "1 година" },
            { name: "Голубці", ingredients: "Капустяне листя, рис, м'ясний фарш, морква, цибуля", time: "1.5 години" },
            { name: "Котлета по-київськи", ingredients: "Куряче філе, вершкове масло, яйця, панірувальні сухарі", time: "45 хвилин" },
            { name: "Деруни", ingredients: "Картопля, цибуля, яйця, борошно", time: "30 хвилин" },
            { name: "Узвар", ingredients: "Сушені яблука, груші, сливи, мед", time: "1 година" }
          ].map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
              <p className="text-gray-600 mb-2"><strong>Інгредієнти:</strong> {recipe.ingredients}</p>
              <p className="text-gray-600 mb-4"><strong>Час приготування:</strong> {recipe.time}</p>
              <Button variant="outline">Детальний рецепт</Button>
            </div>
          ))}
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