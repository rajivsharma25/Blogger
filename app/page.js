import { Suspense } from "react";
import BlogGridSkeleton from "@/components/BlogGridSkeleton";
import DownloadApp from "@/components/DownloadApp";
import FeaturedBlog from "@/components/FeaturedBlog";
import FeaturedBlogSkeleton from "@/components/FeaturedBlogSkeleton";
import LatestBlogs from "@/components/LatestBlogs";

export default function Home() {
  return (
    <>
      <Suspense fallback={<FeaturedBlogSkeleton />}>
        <FeaturedBlog />
      </Suspense>
      <Suspense fallback={<BlogGridSkeleton />}>
        <LatestBlogs />
      </Suspense>

      <DownloadApp />
    </>
  );
}
