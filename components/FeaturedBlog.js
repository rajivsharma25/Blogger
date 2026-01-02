import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import ReadMore from "./ReadMore";

export const dynamic = "force-dynamic";

const FeaturedBlog = async () => {
  try {
    const response = await fetch(
      "https://jsonfakery.com/blogs/random",
      {
        cache: "no-store",
      }
    );

    // ❌ If API fails
    if (!response.ok) {
      console.error("FeaturedBlog API failed:", response.status);
      return null;
    }

    // ❌ If response is not JSON
    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("FeaturedBlog JSON parse error:", text);
      return null;
    }

    // ❌ If invalid data
    if (!data || !data.title) {
      console.error("FeaturedBlog invalid data:", data);
      return null;
    }

    return (
      <div className="w-full bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-gray-950 border border-black dark:border-white shadow-[-5px_5px_0px_#000000] dark:shadow-[-5px_5px_0px_#fff] p-6">
            
            {data.featured_image && (
              <Image
                src={data.featured_image}
                width={600}
                height={288}
                quality={75}
                alt={data.title}
                priority
                className="w-full md:w-2/5 h-72 object-cover border border-black dark:border-white"
              />
            )}

            <div className="w-full md:w-3/5 flex flex-col gap-2">
              <div className="flex gap-2 mb-2">
                {data.category && (
                  <span className="inline-block bg-black text-white text-xs px-2 py-1 w-fit dark:bg-white dark:text-black">
                    {data.category}
                  </span>
                )}
                <span className="bg-yellow-400 text-black text-xs px-2 py-1 w-fit flex items-center gap-1">
                  <Star className="size-3" />
                  Featured
                </span>
              </div>

              <h2 className="text-2xl font-semibold mb-2 dark:text-white">
                {data.title}
              </h2>

              <div className="flex items-center gap-2 mb-1">
                {data.user?.first_name && (
                  <span className="text-xs text-gray-600 dark:text-gray-300">
                    By {data.user.first_name} {data.user.last_name}
                  </span>
                )}
                {data.created_at && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(data.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                )}
              </div>

              {data.summary && (
                <p className="text-gray-700 dark:text-gray-200 text-base mb-2 line-clamp-3">
                  {data.summary}
                </p>
              )}

              <ReadMore url={`/blogs/${data.id}`} />
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("FeaturedBlog server error:", error);
    return null;
  }
};

export default FeaturedBlog;
