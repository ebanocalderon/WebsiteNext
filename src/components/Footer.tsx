import Link from "next/link"

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Blog" },
  ],
  support: [
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
    { href: "/apply", label: "Apply Now" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Disclaimer" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <span className="text-xl font-bold text-white">DebtSettle</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Helping individuals and families regain financial freedom through professional debt settlement services.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-2">Contact</p>
              <p className="text-sm text-slate-400">1-800-DEBT-FREE</p>
              <p className="text-sm text-slate-400">info@debtsettle.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700">
          <p className="text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} DebtSettle. All rights reserved. | 
            This is a fictional company for demonstration purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}
