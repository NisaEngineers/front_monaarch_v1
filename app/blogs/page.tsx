import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/footer";

const posts = [
  {
    id: 1,
    title: "The Future of Music Production with AI",
    description:
      "Discover how AI and advanced data analysis are reshaping the music industry. From smart vocal removal to intricate chord extractions, learn how Monaarch empowers your musical creativity.",
    image: "/images/blog1.jpg",
    date: "October 1, 2023",
  },
  {
    id: 2,
    title: "Revolutionizing Audio Separation: Monaarch's Innovations",
    description:
      "Explore the groundbreaking techniques behind Monaarch's advanced audio separation tools. Unveil how our stem splitting and vocal isolation methods transform professional music production.",
    image: "/images/blog2.jpg",
    date: "September 15, 2023",
  },
  {
    id: 3,
    title: "Harmonizing Creativity and Technology",
    description:
      "Dive into the dynamic fusion of art and cutting-edge science. See how Monaarch’s machine learning-driven mastering, chord extraction, and audio editing tools empower creators to innovate.",
    image: "/images/blog3.jpg",
    date: "September 1, 2023",
  },
];

export default function BlogsPage() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-indigo-600 mb-12">
            Latest Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{post.date}</span>
                    <Link
                      href="#"
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
