import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "Debt settlement tips, financial advice, and resources to help you achieve debt freedom.",
}

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">Our Blog</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Expert advice, tips, and resources to help you navigate your debt relief journey.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-full flex flex-col transition-shadow hover:shadow-md">
                  <span className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full w-fit">{post.category}</span>
                  <h2 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-muted">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
