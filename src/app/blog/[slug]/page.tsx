import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-posts"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">&larr; Back to Blog</Link>
          <span className="ml-4 text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">{post.category}</span>
          <h1 className="mt-4 text-3xl lg:text-4xl font-bold text-white">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
            <span>By {post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-slate-900 mt-10 mb-4">{line.slice(3)}</h2>
              }
              if (line.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-semibold text-slate-900 mt-8 mb-3">{line.slice(4)}</h3>
              }
              if (line.startsWith("- **")) {
                const match = line.match(/- \*\*(.+?)\*\*: (.+)/)
                if (match) {
                  return (
                    <p key={i} className="text-muted leading-relaxed mb-2">
                      <strong className="text-slate-900">{match[1]}:</strong> {match[2]}
                    </p>
                  )
                }
              }
              if (line.startsWith("- ")) {
                return <li key={i} className="text-muted ml-6 list-disc mb-1">{line.slice(2)}</li>
              }
              if (line.trim() === "") {
                return <div key={i} className="h-4" />
              }
              return <p key={i} className="text-muted leading-relaxed mb-4">{line}</p>
            })}
          </div>
        </div>
      </article>
    </>
  )
}
