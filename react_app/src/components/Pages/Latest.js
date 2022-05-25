import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Latest() {
  const [posts, setposts] = useState();

  useEffect(() => {
    getPostData();
  }, []);

  function getPostData() {
    axios
      .get("https://my-json-server.typicode.com/pankkap/LiveDBServer/posts")
      .then((res) => {
        let postData = res.data;
        postData = postData.filter(
          (post) => post.oldest == false && post.latest == true
        );

        setposts(postData);
      })
      .catch((err) => console.log(err));
  }

  function LikePost(post) {
    // console.log(post);
    post.latest = false;
    post.oldest = true;
    post.likes = true;

    axios
      .put(`http://127.0.0.1:3003/posts/${post.id}`, post)
      .then(() => {
        getPostData();
      })
      .catch((err) => console.log(err));
  }

  function DislikePost(post) {
    post.latest = false;
    post.oldest = true;
    post.dislikes = true;

    axios
      .put(`http://127.0.0.1:3003/posts/${post.id}`, post)
      .then(() => {
        getPostData();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <h4 className="text-center text-success mt-2">Latest Posts</h4>
      <table className="mt-2 table table-bordered table-striped ">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts ? (
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => LikePost(post)}
                  >
                    Like
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => DislikePost(post)}
                  >
                    Dislike
                  </button>
                </td>
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
