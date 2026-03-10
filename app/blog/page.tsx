import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center py-20">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="w-full max-w-2xl flex flex-col gap-8 justify-center">
          <Link href="/blog/my-first-blog" className="block w-full">
            <div className="bg-[#f5f5f7] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col md:flex-row border border-gray-200">
              <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80" alt="How AI is Changing the Way I Study" className="w-full md:w-60 h-48 object-cover md:rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none" />
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2">How AI is Changing the Way I Study</h2>
                <p className="text-gray-600 mb-2">Discover how AI tools like Wisker are transforming my study habits, making learning smarter and more efficient.</p>
                <span className="text-sm text-blue-600 hover:underline">Read more →</span>
              </div>
            </div>
          </Link>
          <Link href="/blog/my-second-blog" className="block w-full">
            <div className="bg-[#f5f5f7] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col md:flex-row border border-gray-200">
              <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="My Second Blog" className="w-full md:w-60 h-48 object-cover md:rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none" />
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2">My Second Blog Post</h2>
                <p className="text-gray-600 mb-2">Stay tuned for more articles about productivity, technology, and personal growth. More content is on the way!</p>
                <span className="text-sm text-blue-600 hover:underline">Read more →</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
