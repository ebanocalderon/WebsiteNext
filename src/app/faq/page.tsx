'use client'

import type { Metadata } from "next"
import { useState } from "react"
import { faqs } from "@/lib/faqs"

const categories = [...new Set(faqs.map((f) => f.category))]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Everything you need to know about debt settlement and how DebtSettle can help.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-surface text-muted hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-medium text-slate-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-muted shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
