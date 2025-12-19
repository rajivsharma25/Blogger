"use client";
import React, { useEffect, useState } from "react";
import BlogItemSkeleton from "@/components/BlogItemSkeleton";
import BlogItem from "@/components/BlogItem";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonfakery.com/blogs/paginated?page=${page}`
        );
        const data = await response.json();
        setPosts(data.data);
        setLastPage(data.last_page);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);


  const handleChange = (e) =>{
    setSearch(e.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // 500ms debounce
  
    return () => clearTimeout(timer);
  }, [search]);
  

  const filterPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );
  

  return (
    <div className="bg-white dark:bg-gray-950">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center py-8">
        <h1 className="text-4xl font-bold mb-2 dark:text-white">Explore Our Blogs</h1>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Stay updated with our newest posts. Explore the latest thoughts,
          trends, and insights from our team.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          className="w-full border border-black px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black shadow-[-5px_5px_0px_#000] bg-white text-black dark:bg-gray-950 dark:text-white dark:border-white dark:focus:ring-white dark:shadow-[-5px_5px_0px_#fff]"
          placeholder="Search blogs..."
          onChange={handleChange}
          value={search}
        />
      </div>
      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10 max-w-7xl mx-auto px-4">
        {loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <BlogItemSkeleton key={i} />
            ))
          : filterPosts.map((post) => (
              <BlogItem
                key={post.id}
                id={post.id}
                author={`${post.user.first_name} ${post.user.last_name}`}
                created_at={post.created_at}
                title={post.title}
                description={post.summary}
                image={post.featured_image}
                category={post.category}
              />
            ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 pb-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-6 py-2 border cursor-pointer border-black bg-white text-black font-semibold transition
            hover:bg-gray-100 shadow-[-5px_5px_0px_#000] dark:bg-gray-950 dark:text-white dark:border-white dark:shadow-[-5px_5px_0px_#fff] dark:hover:bg-gray-900
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span className="px-4 py-2 font-semibold dark:text-white">
          Page {page} of {lastPage}
        </span>

        <button
          disabled={page === lastPage}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-6 py-2 border cursor-pointer border-black bg-white text-black font-semibold transition
            hover:bg-gray-100 shadow-[-5px_5px_0px_#000] dark:bg-gray-950 dark:text-white dark:border-white dark:shadow-[-5px_5px_0px_#fff] dark:hover:bg-gray-900
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
