import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore DebtSettle's comprehensive debt settlement and financial relief services designed to help you become debt-free.",
}

const services = [
  {
    title: "Credit Card Debt Settlement",
    description: "Reduce credit card debt by negotiating with issuers for lower payoff amounts. Average savings of 40-60% on enrolled balances.",
    features: ["Visa, Mastercard, Amex, Discover", "Store credit cards", "Personal credit lines"],
  },
  {
    title: "Medical Debt Settlement",
    description: "Medical bills are one of the leading causes of debt in America. We negotiate with hospitals and collection agencies to reduce what you owe.",
    features: ["Hospital bills", "Emergency room visits", "Surgical & specialist fees"],
  },
  {
    title: "Personal Loan Settlement",
    description: "Struggling with personal loan payments? We negotiate with lenders to settle your loans for less than the full balance.",
    features: ["Unsecured personal loans", "Installment loans", "Signature loans"],
  },
  {
    title: "Collection Account Resolution",
    description: "If your debt has gone to collections, we can negotiate with collection agencies to settle accounts for a fraction of the original amount.",
    features: ["Third-party collections", "Charge-off accounts", "Old delinquent accounts"],
  },
]

const process = [
  { number: "01", title: "Financial Review", description: "We analyze your debt, income, and expenses to determine if settlement is right for you." },
  { number: "02", title: "Program Enrollment", description: "You enroll and begin making affordable monthly deposits into a dedicated settlement account." },
  { number: "03", title: "Creditor Negotiation", description: "Our negotiators engage your creditors to reach settlement agreements, typically 40-60% below balance." },
  { number: "04", title: "Settlement & Savings", description: "You approve each settlement, and we handle the payment. Debts are marked as satisfied." },
]

export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Our Services</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Comprehensive debt relief solutions tailored to your unique financial situation.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.title} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">{service.title}</h2>
                  <p className="mt-4 text-muted leading-relaxed">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-muted">
                        <svg className="w-5 h-5 text-secondary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-surface rounded-2xl p-8 border border-slate-200 ${i % 2 === 1 ? "lg:order-first" : ""}`}>
                  <p className="text-5xl font-bold text-primary">{70 - i * 5}%</p>
                  <p className="mt-2 text-muted">Average savings on {service.title.toLowerCase()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Process</h2>
            <p className="mt-4 text-lg text-muted">A proven, step-by-step approach to debt resolution.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.number} className="text-center">
                <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Not Sure Which Service You Need?</h2>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
              Our debt specialists will evaluate your situation and recommend the best solution at no cost.
            </p>
            <Link href="/apply" className="mt-8 inline-flex items-center px-6 py-3 text-base font-semibold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
