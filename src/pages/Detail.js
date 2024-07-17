import { Outlet, Link } from "react-router-dom";
import Comments from "../components/Comment.js";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { BlogContext } from "../App.js";

const Detail = ({ itemsPerPage }) => {
  let comments = useContext(BlogContext);
  const location = useLocation();
  const { feedPost } = location.state;
  const [currentPage, setCurrentPage] = useState(1);
  comments = comments.filter((comment) => comment.postId === feedPost.id);
  const totalPages = Math.ceil(comments.length / itemsPerPage);
  let itemsToShow = [];

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }

  if (totalPages > 1) {
    // Slice the comments array to return only items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    itemsToShow = comments.slice(startIndex, endIndex);
  } else {
    itemsToShow = comments;
  }

  return (
    <div>
      <div className="px-72 py-1">
        <div className="border-2 m-auto min-h-screen">
          <div className="px-4 py-2">
            <Link to="/">
              <u>
                <i>Back to main page</i>
              </u>
            </Link>
            <h1 className="text-left text-2xl mt-3 text-ellipsis overflow-hidden">
              <b>{feedPost.title}</b>
            </h1>
            <Link to={`/users/${feedPost.userId}`}>
              <p className="text-left text-base text-ellipsis overflow-hidden">
                <u>
                  <i>{feedPost.username}</i>
                </u>
              </p>
            </Link>
            <p className="text-left text-ellipsis overflow-hidden">
              {feedPost.body}
            </p>
            <h1 className="text-left text-xl text-ellipsis overflow-hidden">
              Comments
            </h1>
            {itemsToShow.map((element, index) => {
              return <Comments key={index} comments={element} />;
            })}
            <div className="text-center my-6">
              {currentPage > 1 && (
                <button onClick={handlePrevPage}>Previous</button>
              )}
              &nbsp;&nbsp;{totalPages > 1 && itemsPerPage}&nbsp;&nbsp;
              {currentPage < totalPages && (
                <button onClick={handleNextPage}>Next</button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Detail;
