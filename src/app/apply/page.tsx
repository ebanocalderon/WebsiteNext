'use client'

import { useState } from "react"
import Link from "next/link"

const debtRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $75,000",
  "$75,000+",
]

export default function Apply() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-slate-900">Application Submitted!</h1>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Thank you for applying. A DebtSettle specialist will contact you within 24 hours to discuss your options.
          </p>
          <Link href="/" className="mt-8 inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Apply for Debt Relief</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Take the first step toward financial freedom. Fill out the form below and a specialist will contact you.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= s ? "bg-primary text-white" : "bg-slate-200 text-muted"
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-primary" : "bg-slate-200"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900">Personal Information</h2>
              <p className="mt-1 text-sm text-muted">Please provide your contact details so we can reach you.</p>
              <form onSubmit={(e) => { e.preventDefault(); setStep(2) }} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">First Name</label>
                    <input type="text" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Last Name</label>
                    <input type="text" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Email Address</label>
                    <input type="email" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Phone Number</label>
                    <input type="tel" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Zip Code</label>
                  <input type="text" required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">
                    Next Step
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900">Debt Information</h2>
              <p className="mt-1 text-sm text-muted">Tell us about your debt so we can prepare the best solution.</p>
              <form onSubmit={(e) => { e.preventDefault(); setStep(3) }} className="mt-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Total Debt Amount</label>
                  <select required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                    <option value="">Select a range...</option>
                    {debtRanges.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-900">Debt Types (select all that apply)</label>
                  {["Credit Cards", "Medical Bills", "Personal Loans", "Collection Accounts", "Other"].map((type) => (
                    <label key={type} className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary" />
                      <span className="text-sm text-muted">{type}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Brief Description of Your Situation</label>
                  <textarea rows={3} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" />
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={() => setStep(1)} className="px-6 py-3 text-sm font-medium text-muted hover:text-slate-900 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">
                    Next Step
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900">Financial Overview</h2>
              <p className="mt-1 text-sm text-muted">Help us understand your financial situation.</p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Employment Status</label>
                    <select required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                      <option value="">Select...</option>
                      <option>Employed Full-Time</option>
                      <option>Employed Part-Time</option>
                      <option>Self-Employed</option>
                      <option>Unemployed</option>
                      <option>Retired</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-1">Monthly Income</label>
                    <select required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                      <option value="">Select a range...</option>
                      <option>Under $2,000</option>
                      <option>$2,000 - $4,000</option>
                      <option>$4,000 - $6,000</option>
                      <option>$6,000 - $8,000</option>
                      <option>$8,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">Housing Status</label>
                  <select required className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                    <option value="">Select...</option>
                    <option>Own Home</option>
                    <option>Rent</option>
                    <option>Live with Family</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-900">Reason for Debt</label>
                  {["Medical Emergency", "Job Loss", "Divorce", "Overspending", "Education Expenses", "Other"].map((reason) => (
                    <label key={reason} className="flex items-center gap-3">
                      <input type="radio" name="reason" required className="w-4 h-4 text-primary border-slate-300 focus:ring-primary" />
                      <span className="text-sm text-muted">{reason}</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={() => setStep(2)} className="px-6 py-3 text-sm font-medium text-muted hover:text-slate-900 transition-colors">
                    Back
                  </button>
                  <button type="submit" className="px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
