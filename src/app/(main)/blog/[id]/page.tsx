"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

const blogDatabase = {
  "choosing-right-university": {
    title: "How to Choose the Right University Abroad",
    excerpt: "A step-by-step guide to finding your perfect international university match.",
    image: "/blog/university-selection.jpg",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Admissions",
    content: `
      <p class="text-gray-700 mb-6 leading-relaxed">Choosing the right university abroad is one of the most important decisions you'll make in your academic journey. With thousands of institutions worldwide, the selection process can feel overwhelming.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Identify Your Academic Goals</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">Before browsing universities, clearly define what you want to study and your long-term career objectives.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Evaluate University Rankings</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">While rankings shouldn't be your only criteria, they provide valuable insights into academic reputation.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Consider Location Factors</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">Think about climate, cost of living, safety, and cultural aspects of potential locations.</p>
    `
  },
};

export default function BlogDetail({ params }: { params: { id: string } }) {
  const unwrappedParams = use(params);
  const blogId = unwrappedParams.id;
  const blog = blogDatabase[blogId as keyof typeof blogDatabase];

  if (!blog) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="sticky top-0 bg-white border-b py-4 z-10">
        <div className="container px-4 mx-auto">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </nav>

      <article className="container px-4 mx-auto py-12 max-w-3xl">
        <div className="mb-10">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center text-gray-500 text-sm gap-4 mb-8">
            <span>{blog.date}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-10">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
            />
          </div>
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        <div className="mt-16">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            ← View All Articles
          </Link>
        </div>
      </article>
    </div>
  );
} 