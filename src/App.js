import { useState, useEffect, createContext } from "react";
import "./App.css";
import Feed from "./pages/Feed";
import Detail from "./pages/Detail";
import User from "./components/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const BlogContext = createContext();

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchInit = async () => {
      Promise.all([
        setPosts(
          await (
            await fetch("https://jsonplaceholder.typicode.com/posts")
          ).json()
        ),
        setComments(
          await (
            await fetch("https://jsonplaceholder.typicode.com/comments")
          ).json()
        ),
        setUsers(
          await (
            await fetch("https://jsonplaceholder.typicode.com/users")
          ).json()
        ),
      ]);
    };
    fetchInit();
  }, []);

  //get data for feedposts
  const feedPosts = [];

  posts.forEach((element) => {
    for (let i = 0; i < users.length; i++) {
      if (element.userId === users[i].id) {
        element.username = users[i].name;
      }
    }
    let countComments = 0;

    for (let i = 0; i < comments.length; i++) {
      if (element.id === comments[i].postId) {
        countComments++;
      }
    }
    element.commentsNumber = countComments;
    feedPosts.push(element);
  });

  return (
    <BlogContext.Provider value={comments}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Feed feedPosts={feedPosts} itemsPerPage={10} authed={true} />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail itemsPerPage={10} authed={true} />}
          />
          <Route
            path="/users/:userId"
            element={<User users={users} authed={true} />}
          />
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
  );
};

export default App;
