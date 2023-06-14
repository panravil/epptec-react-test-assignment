import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Post = ({ feedPost }) => {
  const [isShowFeedPostBody, setIsShowFeedPostBody] = useState(true);
  const [isShowButton, setIsShowButton] = useState(true);

  const showMore = () => {
    setIsShowFeedPostBody(false);
    setIsShowButton(false);
  };

  return (
    <div className="px-8 pt-3">
      <div className="post-container m-auto border-2 p-3">
        <Link to={`/detail/${feedPost.id}`} state={{ feedPost }}>
          <h1 className="text-left text-2xl text-ellipsis overflow-hidden">
            <b>{feedPost.title}</b>
          </h1>
        </Link>
        <Link to={`/users/${feedPost.userId}`}>
          <p className="text-left text-base text-ellipsis overflow-hidden">
            <u>
              <i>{feedPost.username}</i>
            </u>
          </p>
        </Link>
        {isShowFeedPostBody ? (
          <p className="text-left h-12 w-120 truncate">{feedPost.body}...</p>
        ) : (
          <p className="text-left text-ellipsis overflow-hidden">
            {feedPost.body}
          </p>
        )}
        <Outlet />
        <div className="flex justify-between">
          {isShowButton ? (
            <button
              className="text-ellipsis overflow-hidden"
              onClick={showMore}
            >
              <u>
                <i>Show more...</i>
              </u>
            </button>
          ) : (
            <p></p>
          )}
          <p className="text-ellipsis overflow-hidden">
            <u>
              <i>Comments ({feedPost.commentsNumber})</i>
            </u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
