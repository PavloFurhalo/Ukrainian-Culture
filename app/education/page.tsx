"use client"

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function EducationPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад на головну</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Освітній центр</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Пізнавай Україну</h2>
          <p className="text-gray-600 mb-4">
            Наш освітній центр пропонує широкий спектр можливостей для вивчення української культури, історії та традицій. Від онлайн-курсів до інтерактивних тестів, ми допоможемо вам поглибити ваші знання про Україну.
          </p>
          <div className="space-y-4">
            <Button onClick={() => router.push('/education/courses')}>Розпочати навчання</Button>
            <Button onClick={() => router.push('/education/test')} variant="outline">Пройти тест з української культури</Button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Доступні курси</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Історія України від найдавніших часів до сьогодення</li>
              <li>Українська література: класика і сучасність</li>
              <li>Українське народне мистецтво</li>
              <li>Українська мова для початківців</li>
              <li>Культура та традиції регіонів України</li>
              <li>Сучасна Україна: політика, економіка, суспільство</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Інтерактивні матеріали</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Віртуальні екскурсії музеями України</li>
              <li>Інтерактивна карта історичних подій</li>
              <li>Тести на знання української культури</li>
              <li>Аудіо-уроки української мови</li>
              <li>Відео-лекції від провідних експертів</li>
              <li>Онлайн-квести з української історії</li>
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