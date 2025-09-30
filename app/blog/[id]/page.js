"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import { useParams } from "next/navigation"

// This would typically come from a database or API
const blogPosts = [
  // Same array as above
];

export default function BlogPost() {
  const params = useParams()
  const postId = parseInt(params.id)
  const post = blogPosts.find(post => post.id === postId)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-gray-500">{post.date}</span>
          <h1 className="text-3xl font-bold mt-2 mb-6">{post.title}</h1>
          
          {/* Placeholder for featured image */}
          <div className="h-64 bg-gray-200 mb-8 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Featured Image</span>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}