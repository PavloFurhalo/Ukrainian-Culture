"use client"

import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

const questions = [
  {
    question: "Яка річка є найбільшою в Україні?",
    options: ["Дніпро", "Дністер", "Південний Буг", "Десна"],
    correctAnswer: 0
  },
  {
    question: "Хто є автором поеми 'Кобзар'?",
    options: ["Іван Франко", "Леся Українка", "Тарас Шевченко", "Михайло Коцюбинський"],
    correctAnswer: 2
  },
  {
    question: "Яке свято відзначають в Україні 24 серпня?",
    options: ["День Конституції", "День Незалежності", "День Соборності", "День Прапора"],
    correctAnswer: 1
  },
  {
    question: "Яка страва є традиційною для української кухні?",
    options: ["Піца", "Суші", "Борщ", "Паелья"],
    correctAnswer: 2
  },
  {
    question: "Хто є національним героєм України, лідером козацтва?",
    options: ["Богдан Хмельницький", "Іван Мазепа", "Петро Сагайдачний", "Всі перелічені"],
    correctAnswer: 3
  },
  {
    question: "Яка гора є найвищою в Україні?",
    options: ["Говерла", "Петрос", "Піп Іван", "Бребенескул"],
    correctAnswer: 0
  },
  {
    question: "Який музичний інструмент є символом української культури?",
    options: ["Гітара", "Бандура", "Скрипка", "Фортепіано"],
    correctAnswer: 1
  },
  {
    question: "Яке місто є столицею України?",
    options: ["Львів", "Одеса", "Харків", "Київ"],
    correctAnswer: 3
  },
  {
    question: "Яка тварина зображена на гербі Львова?",
    options: ["Ведмідь", "Орел", "Лев", "Вовк"],
    correctAnswer: 2
  },
  {
    question: "Який український винахідник створив першу в світі гасову лампу?",
    options: ["Ігнатій Лукасевич", "Іван Пулюй", "Борис Патон", "Ігор Сікорський"],
    correctAnswer: 0
  }
]

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => {
      if (answer === questions[index].correctAnswer) {
        return score + 1
      }
      return score
    }, 0)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-yellow-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/education" className="flex items-center space-x-2">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
            <span className="text-xl font-semibold text-gray-800">Назад до освітнього центру</span>
          </Link>
          <h1 className="text-2xl font-bold text-blue-600">Тест з української культури</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {!showResults ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Питання {currentQuestion + 1} з {questions.length}</h2>
            <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
            <RadioGroup value={answers[currentQuestion]?.toString()} onValueChange={(value) => handleAnswer(parseInt(value))}>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleNext} className="mt-4" disabled={answers[currentQuestion] === null}>
              {currentQuestion === questions.length - 1 ? "Завершити тест" : "Наступне питання"}
            </Button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Результати тесту</h2>
            <p className="text-lg mb-4">Ви відповіли правильно на {calculateScore()} з {questions.length} питань.</p>
            <Button onClick={() => {
              setCurrentQuestion(0)
              setAnswers(new Array(questions.length).fill(null))
              setShowResults(false)
            }}>
              Пройти тест знову
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Культурний Всесвіт України. Всі права захищені.</p>
        </div>
      </footer>
    </div>
  )
}