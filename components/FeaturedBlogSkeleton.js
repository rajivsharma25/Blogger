const FeaturedBlogSkeleton = () => {
    return (
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center bg-white dark:bg-gray-950 border border-black dark:border-white shadow-[-5px_5px_0px_#000000] dark:shadow-[-5px_5px_0px_#fff] p-6 my-10 animate-pulse">
            
            {/* Image Skeleton */}
            <div className="w-full md:w-2/5 h-72 bg-gray-200 dark:bg-gray-800 border border-black dark:border-white" />
  
            {/* Content Skeleton */}
            <div className="w-full md:w-3/5 flex flex-col gap-3">
              
              {/* Badges */}
              <div className="flex gap-2">
                <div className="h-5 w-20 bg-gray-300 dark:bg-gray-700" />
                <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700" />
              </div>
  
              {/* Title */}
              <div className="h-7 w-3/4 bg-gray-300 dark:bg-gray-700" />
  
              {/* Author & Date */}
              <div className="flex gap-2">
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800" />
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800" />
              </div>
  
              {/* Summary */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800" />
                <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-800" />
              </div>
  
              {/* Read More Button */}
              <div className="h-8 w-28 bg-gray-300 dark:bg-gray-700 mt-2" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedBlogSkeleton;
  