import Post from "../components/Post";
import { useState } from "react";

const Feed = ({ feedPosts, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(feedPosts.length / itemsPerPage);
  let itemsToShow = [];
  let paginations = [];

  for (let i = 1; i <= totalPages; i++) {
    paginations.push(i);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePagination = (index) => {
    setCurrentPage(index + 1);
  };

  if (totalPages > 1) {
    // Slice the feedPosts array to return only items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    itemsToShow = feedPosts.slice(startIndex, endIndex);
  } else {
    itemsToShow = feedPosts;
  }

  return (
    <div>
      <div className="px-72 py-1">
        <div className="container border-2 m-auto min-h-screen">
          {itemsToShow.map((feedPost, index) => {
            return <Post key={index} feedPost={feedPost} />;
          })}
        </div>
      </div>
      <div className="text-center my-6">
        {currentPage > 1 && <button onClick={handlePrevPage}>{`<`}</button>}
        &nbsp;&nbsp;
        {totalPages > 1 &&
          paginations.map((pagination, index) => {
            return (
              <>
                <span
                  className={
                    currentPage == index + 1 ? "p-2 rounded bg-gray-300" : "p-2"
                  }
                  onClick={() => handlePagination(index)}
                  key={index}
                >
                  {pagination}
                </span>
                &nbsp;
              </>
            );
          })}
        &nbsp;&nbsp;
        {currentPage < totalPages && (
          <button onClick={handleNextPage}>{`>`}</button>
        )}
      </div>
    </div>
  );
};

export default Feed;
