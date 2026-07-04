import Link from "next/link"

const stats = [
  { label: "Debt Resolved", value: "$250M+" },
  { label: "Clients Helped", value: "50,000+" },
  { label: "Avg. Savings", value: "52%" },
  { label: "Years in Business", value: "15+" },
]

const steps = [
  { number: "01", title: "Free Consultation", description: "Speak with a debt specialist who will review your financial situation and explain your options." },
  { number: "02", title: "Custom Plan", description: "We create a personalized debt settlement plan tailored to your unique financial needs and goals." },
  { number: "03", title: "We Negotiate", description: "Our expert negotiators work with your creditors to settle your debts for less than you owe." },
  { number: "04", title: "Debt Free", description: "You pay the reduced settlements and become debt-free. Start rebuilding your financial future." },
]

const benefits = [
  { title: "Reduce Debt by Up to 60%", description: "Our skilled negotiators work to get you the best possible settlement on every debt." },
  { title: "No Upfront Fees", description: "Under FTC regulations, we only charge fees after we've successfully settled a debt for you." },
  { title: "Dedicated Negotiator", description: "You're assigned a personal negotiator who handles all creditor communications." },
  { title: "Free Credit Analysis", description: "We provide a comprehensive credit analysis to help you understand your options." },
]

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Break Free from Debt.
              <span className="block text-accent">Start Living Again.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl">
              DebtSettle helps thousands of people resolve their debt each year. Our proven negotiation process has saved clients millions. Let us help you too.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-accent rounded-lg hover:bg-amber-600 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-slate-400 rounded-lg hover:border-white transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-lg text-muted">Our streamlined process makes debt settlement simple and stress-free.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <span className="text-6xl font-bold text-primary/10">{step.number}</span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Why Choose DebtSettle?</h2>
            <p className="mt-4 text-lg text-muted">We are committed to helping you achieve financial freedom.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to Become Debt-Free?</h2>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
              Take the first step toward financial freedom. Your free consultation is just a click away.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors">
                Start Your Free Consultation
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:border-white/60 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
