import Image from "next/image";
import React from "react";
import Link from "next/link";
import ReadMore from "./ReadMore";

const BlogItem = ({
  title,
  description,
  category,
  image,
  id,
  author,
  created_at,
}) => {
  return (
      <div className="bg-white dark:bg-gray-950 border border-black dark:border-white hover:shadow-[-5px_5px_0px_#000000] dark:hover:shadow-[-5px_5px_0px_#fff] transition overflow-hidden">
        <Link href={`/blogs/${id}`}>
          <Image
            src={image}
            alt={title}
            width={400}
            height={220}
            className="border-b border-black dark:border-white w-full h-52 object-cover"
          />
        </Link>

        <div className="p-5">
          <span className="px-2 py-1 inline-block bg-black text-white text-xs w-fit mb-2 dark:bg-white dark:text-black">
            {category}
          </span>
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 truncate dark:text-white">
            {title}
          </h5>
          {/* Author and Created At */}
          <div className="flex items-center gap-2 mb-1">
            {author && (
              <span className="text-xs text-gray-600 dark:text-gray-300">By {author}</span>
            )}
            {created_at && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(created_at).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
          <p className="mb-3 tracking-tight text-sm text-gray-700 line-clamp-2 dark:text-gray-200">
            {description}
          </p>
          <ReadMore url={`/blogs/${id}`} />
        </div>
      </div>
  );
};

export default BlogItem;
