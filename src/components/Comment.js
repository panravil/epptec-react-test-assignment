const Comment = ({ comments }) => {
  return (
    <>
      <div className="my-2">
        <div className="post-container m-auto border-2 p-4">
          <p className="text-left text-ellipsis overflow-hidden">
            <i><b>{comments.email}</b></i>
          </p>
          <p className="text-left text-ellipsis overflow-hidden">
            {comments.body}
          </p>
        </div>
      </div>
    </>
  );
};

export default Comment;
