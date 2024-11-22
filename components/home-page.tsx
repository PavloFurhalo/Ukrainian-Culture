"use client"

import React from 'react'
import { Menu, Search, User, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 text-gray-600" />
            <h1 className="text-2xl font-bold text-blue-600">Культурний Всесвіт України</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" onClick={() => handleNavigation('/history')}>Історія</Button>
            <Button variant="ghost" onClick={() => handleNavigation('/traditions')}>Традиції</Button>
            <Button variant="ghost" onClick={() => handleNavigation('/art')}>Мистецтво</Button>
            <Button variant="ghost" onClick={() => handleNavigation('/cuisine')}>Гастрономія</Button>
            <Button variant="ghost" onClick={() => handleNavigation('/modern')}>Сучасність</Button>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => handleNavigation('/search')}>
              <Search className="h-6 w-6 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleNavigation('/profile')}>
              <User className="h-6 w-6 text-gray-600" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Відкрийте багатство української культури</h2>
          <p className="text-xl text-gray-600 mb-8">Подорожуйте крізь час, традиції та мистецтво нашої прекрасної країни</p>
          <Button size="lg" onClick={() => handleNavigation('/explore')}>Почати подорож</Button>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Історія культури", icon: "🏛️", description: "Досліджуйте багату історію України через інтерактивні карти та захоплюючі статті.", path: "/history" },
            { title: "Народні традиції", icon: "🎭", description: "Пізнайте українські обряди та навчіться традиційним ремеслам.", path: "/traditions" },
            { title: "Мистецтво та музика", icon: "🎨", description: "Насолоджуйтесь віртуальними галереями та колекціями української музики.", path: "/art" },
            { title: "Гастрономія", icon: "🍲", description: "Відкрийте для себе смаки України через рецепти та кулінарні тури.", path: "/cuisine" },
            { title: "Сучасна культура", icon: "🎬", description: "Будьте в курсі останніх подій у світі українського мистецтва та розваг.", path: "/modern" },
            { title: "Освітній центр", icon: "📚", description: "Перевірте свої знання та поглибте розуміння української культури.", path: "/education" }
          ].map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{section.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <Button variant="outline" className="group" onClick={() => handleNavigation(section.path)}>
                Дізнатися більше
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Про нас</h4>
              <p className="text-gray-400">Культурний Всесвіт України - ваш путівник у світ української культури, традицій та мистецтва.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакти</h4>
              <p className="text-gray-400">Email: info@culturalukraine.com</p>
              <p className="text-gray-400">Телефон: +380 44 123 4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Слідкуйте за нами</h4>
              <div className="flex space-x-4">
                <Button variant="link" className="text-gray-400 hover:text-white" onClick={() => window.open('https://facebook.com', '_blank')}>Facebook</Button>
                <Button variant="link" className="text-gray-400 hover:text-white" onClick={() => window.open('https://instagram.com', '_blank')}>Instagram</Button>
                <Button variant="link" className="text-gray-400 hover:text-white" onClick={() => window.open('https://twitter.com', '_blank')}>Twitter</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Культурний Всесвіт України.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}