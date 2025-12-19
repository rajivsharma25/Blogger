import Image from "next/image";
import React from "react";

const BlogDetail = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://jsonfakery.com/blogs/${id}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return (
      <div className="bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 py-10 h-screen flex items-center justify-center flex-col gap-4 bg-white dark:bg-gray-950">
          <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">
            Blog Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Sorry, this blog could not be found.
          </p>
        </div>
      </div>
    );
  }

  const data = await response.json();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white dark:bg-gray-950 border border-black dark:border-white shadow-[-5px_5px_0px_#000000] dark:shadow-[-5px_5px_0px_#fff]">
      {data.featured_image && (
        <Image
          src={data.featured_image}
          alt={data.title}
          width={800}
          height={400}
          className="w-full h-72 object-cover border-b border-black dark:border-white mb-6"
          priority
        />
      )}
      <div className="mb-4">
        <span className="inline-block bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 mr-2">
          {data.category}
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-300">
          {data.user?.first_name && (
            <>
              By {data.user.first_name} {data.user.last_name}
              &nbsp;&middot;&nbsp;
            </>
          )}
          {data.created_at &&
            new Date(data.created_at).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
        </span>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
        {data.title}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        {data.summary}
      </p>
      <div
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: data.main_content || "" }}
      />
    </div>
  );
};

export default BlogDetail;
