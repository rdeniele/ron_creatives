import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function MyFirstBlog() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center py-20">
        <div className="w-full max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">How AI is Changing the Way I Study (and How Wisker Helps Me Learn Smarter)</h1>
          <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80" alt="Student studying at desk" className="w-full h-64 object-cover rounded-xl mb-6" />
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Introduction</h2>
            <p className="text-gray-600 mb-2">I’ve always struggled to keep my study materials organized. PDFs scattered across folders, notes that never made sense at first glance, and endless hours spent flipping between textbooks and digital resources—it was overwhelming. Revising for exams felt like climbing a mountain with no clear path. That’s when I started exploring AI tools to help me study smarter, not harder.</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">The Role of AI in Modern Studying</h2>
            <ul className="list-disc list-inside text-gray-600 mb-2 space-y-1">
              <li>Generate summaries of long notes or PDFs – Instead of reading hundreds of pages, AI can condense information into digestible summaries.</li>
              <li>Create quizzes and flashcards for practice – Perfect for self-testing and making sure you actually remember what you study.</li>
              <li>Convert raw study material into structured, easy-to-follow formats – AI organizes messy notes into something you can review quickly.</li>
              <li>Save time and reduce cognitive load – Less time spent on organizing, more time on learning and retention.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">How Wisker Specifically Helps</h2>
            <img src="/assets/wisker_landingpage.png" alt="Wisker App Screenshot" className="w-full h-64 object-cover rounded-xl mb-4" />
            <p className="text-gray-600 mb-2">I’ve been using <span className="font-semibold">Wisker</span>, and it’s been a total game-changer for my study routine. Here’s what I love about it:</p>
            <ul className="list-disc list-inside text-gray-600 mb-2 space-y-1">
              <li>Upload PDFs → automatically turn them into notes – No more manually typing or rewriting everything.</li>
              <li>Generate quizzes/flashcards → easy self-testing – Helps me actively recall information and retain it longer.</li>
              <li>Summaries → quick review before exams – I can go over the key points in minutes, instead of hours.</li>
            </ul>
            <div className="my-4">
              <p className="text-gray-700 mb-2 font-medium">Curious how Wisker works in practice? Check out this quick demo ad to see how easy it is to turn your study materials into powerful, organized notes and quizzes:</p>
              <video controls poster="/assets/wisker.png" className="w-full rounded-xl shadow-lg">
                <source src="/assets/Wisker demo_ad.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-xs text-gray-500 mt-2">Watch: Wisker in action</p>
            </div>
            <p className="text-gray-600 mb-2">If you want to try it yourself, check out <a href="https://www.wisker.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">Wisker</a> – it’s how I streamline my study workflow.</p>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Tips for Using AI to Study Effectively</h2>
            <ul className="list-disc list-inside text-gray-600 mb-2 space-y-1">
              <li>Don’t just rely on AI—use it to complement active recall and spaced repetition.</li>
              <li>Combine AI-generated notes with your own annotations to make them personal and memorable.</li>
              <li>Test yourself with AI-generated quizzes instead of passively reading summaries. This is where real learning happens.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Conclusion / Call to Action</h2>
            <p className="text-gray-600 mb-2">AI isn’t here to replace students—it’s here to make studying more efficient, less stressful, and even a bit more enjoyable. Tools like <span className="font-semibold">Wisker</span> show how technology can take the busywork out of learning, leaving you free to focus on understanding and retaining knowledge.</p>
            <p className="text-gray-600 mb-2">If you’re curious, try <a href="https://www.wisker.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-500">Wisker here</a> and see how AI can transform your study routine.</p>
          </section>
          <p className="text-gray-400 text-sm">Published: November 2025</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
