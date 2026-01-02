import BlogItem from "./BlogItem";

export const dynamic = "force-dynamic";

const LatestBlogs = async () => {
  try {
    const response = await fetch(
      "https://jsonfakery.com/blogs/paginated?page=1",
      { cache: "no-store" }
    );

    // ❌ API failed
    if (!response.ok) {
      console.error("LatestBlogs API failed:", response.status);
      return null;
    }

    // Read as text first (prevents JSON crash)
    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("LatestBlogs JSON parse error:", text);
      return null;
    }

    // ❌ Invalid response structure
    if (!data?.data || !Array.isArray(data.data)) {
      console.error("LatestBlogs invalid data:", data);
      return null;
    }

    return (
      <div className="bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 text-center py-8">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            Our Latest Blogs
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Stay updated with our newest posts. Explore the latest thoughts,
            trends, and insights from our team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16 max-w-7xl mx-auto px-4">
          {data.data.slice(0, 8).map((post) => (
            <BlogItem
              key={post.id}
              id={post.id}
              author={`${post.user?.first_name ?? ""} ${post.user?.last_name ?? ""}`}
              created_at={post.created_at}
              title={post.title}
              description={post.summary}
              image={post.featured_image}
              category={post.category}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("LatestBlogs server error:", error);
    return null;
  }
};

export default LatestBlogs;
