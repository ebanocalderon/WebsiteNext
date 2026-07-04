import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DebtSettle's mission, team, and commitment to helping clients achieve financial freedom.",
}

const values = [
  { title: "Transparency", description: "We believe in clear, honest communication. No hidden fees, no surprises." },
  { title: "Compassion", description: "We understand how stressful debt can be. We treat every client with respect and empathy." },
  { title: "Results", description: "We are driven by outcomes. Our success is measured by the debt we resolve for our clients." },
  { title: "Integrity", description: "We operate with the highest ethical standards and comply with all industry regulations." },
]

const team = [
  { name: "James Mitchell", role: "CEO & Founder", bio: "Over 20 years in the debt relief industry. Founded DebtSettle to provide ethical, transparent debt solutions." },
  { name: "Dr. Lisa Park", role: "Chief Financial Advisor", bio: "Certified financial planner with expertise in debt management and personal finance education." },
  { name: "Marcus Williams", role: "Head of Negotiations", bio: "Led negotiations on over $500M in consumer debt. Known for achieving industry-best settlement rates." },
  { name: "Rachel Torres", role: "Client Success Director", bio: "Dedicated to ensuring every client has a positive experience and achieves their financial goals." },
]

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Our Mission</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            To provide every individual and family burdened by debt with a clear, affordable path to financial freedom.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Story</h2>
              <p className="mt-4 text-muted leading-relaxed">
                DebtSettle was founded in 2010 by James Mitchell after watching close friends struggle under the weight of credit card debt. He saw how aggressive collection tactics and confusing financial options left people feeling hopeless.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                James built DebtSettle on a simple principle: everyone deserves a fair chance at financial freedom. Over the past 15 years, we have helped over 50,000 clients resolve more than $250 million in debt, saving families an average of 52% on what they owed.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Today, DebtSettle is one of the most trusted names in debt settlement, known for our ethical practices, transparent pricing, and outstanding results.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl font-bold text-primary">{s.value}</p>
                    <p className="text-sm text-muted mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Values</h2>
            <p className="mt-4 text-lg text-muted">The principles that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Leadership Team</h2>
            <p className="mt-4 text-lg text-muted">Experienced professionals dedicated to your financial success.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">{member.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-primary-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Write Your Success Story?</h2>
          <p className="mt-4 text-lg text-blue-200">Join over 50,000 clients who have regained their financial freedom.</p>
          <Link href="/apply" className="mt-8 inline-flex items-center px-6 py-3 text-base font-semibold text-primary bg-white rounded-lg hover:bg-slate-100 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}

const stats = [
  { label: "Debt Resolved", value: "$250M+" },
  { label: "Clients Helped", value: "50,000+" },
  { label: "Avg. Savings", value: "52%" },
  { label: "Years in Business", value: "15+" },
]
