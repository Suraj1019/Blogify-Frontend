import { useState } from "react";

// Mock icons (you can replace with your preferred icon library)
const SearchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="21 21l-4.35-4.35" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const mockPosts = [
  {
    id: "1",
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build and design websites, from automated code generation to intelligent user experiences.",
    date: "Dec 15, 2024",
    tags: ["Artificial Intelligence", "Web Development", "Future Tech"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "2",
    title: "Building Responsive Layouts with Modern CSS",
    excerpt:
      "Master the art of creating beautiful, responsive layouts using CSS Grid, Flexbox, and the latest CSS features that make development easier.",
    date: "Dec 12, 2024",
    tags: ["CSS", "Frontend", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
  {
    id: "3",
    title: "React Performance Optimization Tips",
    excerpt:
      "Learn proven techniques to make your React applications faster and more efficient, including memoization, lazy loading, and bundle optimization.",
    date: "Dec 10, 2024",
    tags: ["React", "Performance", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: "4",
    title: "The Complete Guide to TypeScript",
    excerpt:
      "From basic types to advanced patterns, discover how TypeScript can improve your development workflow and catch bugs before they reach production.",
    date: "Dec 8, 2024",
    tags: ["TypeScript", "JavaScript", "Development"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  },
  {
    id: "5",
    title: "Designing User Interfaces That Convert",
    excerpt:
      "Explore the psychology behind effective UI design and learn practical techniques to create interfaces that engage users and drive conversions.",
    date: "Dec 5, 2024",
    tags: ["UI Design", "UX", "Conversion"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
  },
  {
    id: "6",
    title: "Getting Started with Three.js",
    excerpt:
      "Dive into 3D web development with Three.js and learn how to create stunning interactive 3D experiences that run smoothly in the browser.",
    date: "Dec 3, 2024",
    tags: ["Three.js", "3D", "WebGL"],
    image:
      "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?w=800&q=80",
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Latest Articles
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover insights on web development, design trends, and emerging
          technologies
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 font-medium">
            {mockPosts.length} articles
          </span>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full cursor-pointer hover:bg-blue-200 transition-colors">
              All
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              React
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              Design
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
              AI
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex h-11 w-64 rounded-xl border border-gray-200 bg-white px-4 py-2 pl-10 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent shadow-sm transition-all"
            />
          </div>

          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-11 px-6 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <PlusIcon />
            Write Article
          </button>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {post.title}
              </h3>

              <p
                className="text-gray-600 mb-4"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 border-transparent bg-blue-50 text-blue-700 hover:bg-blue-100"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Empty State for Additional Posts */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-4">No more posts to show</p>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900 h-10 px-4 py-2">
          Load More Posts
        </button>
      </div>
    </main>
  );
};

export default Home;
