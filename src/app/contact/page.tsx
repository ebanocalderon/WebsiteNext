'use client'

import type { Metadata } from "next"
import { useState } from "react"
import Link from "next/link"

const contactInfo = [
  { label: "Phone", value: "1-800-DEBT-FREE" },
  { label: "Email", value: "info@debtsettle.com" },
  { label: "Hours", value: "Mon-Fri 8am-8pm ET, Sat 9am-5pm ET" },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Have questions? Our team is here to help. Reach out and we will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-surface border border-slate-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="mt-2 text-muted">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">Full Name</label>
                      <input type="text" id="name" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">Email Address</label>
                      <input type="email" id="email" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-1">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">Message</label>
                    <textarea id="message" rows={5} required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" />
                  </div>
                  <button type="submit" className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div className="bg-surface rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label}>
                      <p className="text-sm font-medium text-slate-900">{info.label}</p>
                      <p className="text-sm text-muted">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-surface rounded-2xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Ready to Get Started?</h3>
                <p className="text-sm text-muted mb-4">Apply online for a free debt consultation.</p>
                <Link href="/apply" className="inline-flex px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
