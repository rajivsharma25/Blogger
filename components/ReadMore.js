import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ReadMore = ({url}) => {
  return (
    <Link
      href={url}
      className="group flex items-center gap-1 px-3 py-2 font-semibold text-center text-black dark:text-white cursor-pointer transition w-fit bg-gray-100 dark:bg-gray-900 hover:shadow-[-5px_5px_0px_#000000] dark:hover:shadow-[-5px_5px_0px_#fff]"
    >
      Read more{" "}
      <ArrowRight
        size={18}
        className="group-hover:translate-x-0.5 transition-transform duration-200"
      />
    </Link>
  );
};

export default ReadMore;
