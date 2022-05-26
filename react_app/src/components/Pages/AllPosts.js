import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllPosts() {
  const [posts, setposts] = useState();

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/pankkap/LiveDBServer/posts")
      .then((res) => setposts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-2">
      <h2 className="text-primary mt-2 text-center">Posts</h2>
      <table className="mt-2 table table-bordered table-striped ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts ? (
            posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <Link to={`/allposts/${post.id}`}>{post.id}</Link>
                </td>
                <td>{post.title}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
