export default function SecondBlog() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white font-sans flex flex-col items-center py-20">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">My Second Blog Post</h1>
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="My Second Blog" className="w-full h-64 object-cover rounded-xl mb-6" />
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-300 mb-2">Stay tuned for more articles about productivity, technology, and personal growth. More content is on the way!</p>
        </section>
        <p className="text-gray-400 text-sm">Published: March 11, 2026</p>
      </div>
    </div>
  );
}
