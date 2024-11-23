import React from "react";

const BlogsContainer = () => {
  return (
    <div className="w-full px-4 lg:px-20 py-10 bg-gray-100">
      {/* Article Title */}
      <h1 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800">
        Title of Article, Title of Article, Title of Article, Title of Article
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Large Image */}
        <div className="col-span-2 bg-gray-300 h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-xl">Image</span>
        </div>
        {/* Small Images */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image</span>
          </div>
          <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <p className="text-gray-700 mb-10 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      {/* Recommended Articles */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recommended Articles
      </h2>
      <div className="space-y-4">
        {/* Article Item */}
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4"
          >
            {/* Article Image */}
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 text-sm">Image</span>
            </div>
            {/* Article Text */}
            <p className="text-gray-800">
              Title of Article, Title of Article, Title of Article, Title of
              Article
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsContainer;
