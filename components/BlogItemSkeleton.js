const BlogItemSkeleton = () => {
    return (
      <div className="bg-white dark:bg-gray-950 border border-black dark:border-white overflow-hidden animate-pulse">
        {/* Image */}
        <div className="w-full h-52 bg-gray-200 dark:bg-gray-800 border-b border-black dark:border-white" />
  
        <div className="p-5 flex flex-col gap-3">
          {/* Category */}
          <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700" />
  
          {/* Title */}
          <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700" />
  
          {/* Author & Date */}
          <div className="flex gap-2">
            <div className="h-4 w-28 bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800" />
          </div>
  
          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-800" />
          </div>
  
          {/* Read more */}
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 mt-2" />
        </div>
      </div>
    );
  };
  
  export default BlogItemSkeleton;
  