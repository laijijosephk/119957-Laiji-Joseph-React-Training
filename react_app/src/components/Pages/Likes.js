import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Likes() {
  const [posts, setposts] = useState();

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/pankkap/LiveDBServer/posts")
      .then((res) => {
        let postData = res.data;
        postData = postData.filter(
          (post) => post.likes == true && post.dislikes == false
        );

        setposts(postData);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h4 className="text-center text-success mt-2">Likes Posts</h4>
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
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
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
