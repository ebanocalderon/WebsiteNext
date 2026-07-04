export interface Testimonial {
  id: number
  name: string
  location: string
  debtAmount: string
  savedAmount: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Phoenix, AZ",
    debtAmount: "$24,500",
    savedAmount: "$14,200",
    content: "I was drowning in credit card debt and didn't know where to turn. DebtSettle helped me negotiate with my creditors and settle my debts for much less than I owed. I'm finally debt-free!",
    rating: 5,
  },
  {
    id: 2,
    name: "James R.",
    location: "Columbus, OH",
    debtAmount: "$47,000",
    savedAmount: "$26,800",
    content: "After a medical emergency left me with massive bills, DebtSettle stepped in. Their team handled everything and saved me over $26,000. I can't recommend them enough.",
    rating: 5,
  },
  {
    id: 3,
    name: "Maria G.",
    location: "Miami, FL",
    debtAmount: "$18,200",
    savedAmount: "$10,500",
    content: "I was skeptical at first, but the team at DebtSettle was transparent about the process and realistic about what they could do. They exceeded my expectations.",
    rating: 4,
  },
  {
    id: 4,
    name: "David L.",
    location: "Seattle, WA",
    debtAmount: "$35,000",
    savedAmount: "$19,300",
    content: "The stress of debt was affecting my health and relationships. DebtSettle gave me a clear path forward and the support I needed to see it through. Life-changing experience.",
    rating: 5,
  },
  {
    id: 5,
    name: "Linda K.",
    location: "Austin, TX",
    debtAmount: "$12,800",
    savedAmount: "$7,600",
    content: "Fast, professional, and effective. They settled my debts in just 18 months. I wish I had called them sooner instead of trying to handle it on my own.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert T.",
    location: "Denver, CO",
    debtAmount: "$52,000",
    savedAmount: "$31,000",
    content: "Lost my job during the recession and fell behind on everything. DebtSettle negotiated settlements on over $50k in debt. I paid pennies on the dollar and can finally start over.",
    rating: 5,
  },
]
