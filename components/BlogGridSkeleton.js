import BlogItemSkeleton from "./BlogItemSkeleton";

const BlogGridSkeleton = () => (
  <>
    <div className="max-w-7xl mx-auto px-4 text-center my-8">
      <h2 className="text-3xl font-bold mb-2 dark:text-white">Our Latest Blogs</h2>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        Stay updated with our newest posts. Explore the latest thoughts,
        trends, and insights from our team.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto px-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <BlogItemSkeleton key={i} />
      ))}
    </div>
  </>
);

export default BlogGridSkeleton;
