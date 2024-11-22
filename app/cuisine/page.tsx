"use client"

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CuisinePage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад на головну</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Українська гастрономія</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Смаки України</h2>
          <p className="text-gray-600 mb-4">
            Українська кухня - це не просто їжа, це історія, традиції та культура нашого народу на тарілці. Від наваристого борщу до ніжних вареників, кожна страва розповідає свою унікальну історію.
          </p>
          <Button onClick={() => router.push('/cuisine/recipes')}>Переглянути рецепти</Button>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Популярні українські страви</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Борщ</li>
              <li>Вареники</li>
              <li>Голубці</li>
              <li>Котлета по-київськи</li>
              <li>Деруни</li>
              <li>Узвар</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Регіональні кухні України</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Галицька кухня</li>
              <li>Полтавська кухня</li>
              <li>Кримськотатарська кухня</li>
              <li>Закарпатська кухня</li>
              <li>Одеська кухня</li>
              <li>Волинська кухня</li>
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