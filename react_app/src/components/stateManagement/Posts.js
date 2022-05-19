import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setposts] = useState();
  const [post, setpost] = useState();
  const [showEditForm, setshowEditForm] = useState(false);
  const [newPostRecord, setnewPostRecord] = useState({
    id: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3003/posts")
      .then((res) => setposts(res.data))
      .catch((err) => console.log(err));
  }, []);

  function editPostDetails(postInfo) {
    console.log(postInfo);
    setpost(postInfo);
    setshowEditForm(true);
  }
  console.log(post);

  function updateRecord() {
    // console.log(newPostRecord);
    axios
      .put(`http://localhost:3003/posts/${post.id}`, newPostRecord)
      .then((res) => {
        alert("Post Updated Succesfully");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function deleteRecord(postInfo) {
    if (window.confirm("Are you sure to Delete this Post ?")) {
      axios
        .delete(`http://localhost:3003/posts/${postInfo.id}`)
        .then((res) => {
          alert("Post Delete Successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div>
      <h2>List of Posts</h2>

      {showEditForm ? (
        <form>
          <label>ID</label>
          <input
            type="text"
            className="form-control"
            defaultValue={post.id}
            onChange={(e) =>
              setnewPostRecord({ ...newPostRecord, id: e.target.value })
            }
          />
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            defaultValue={post.title}
            onChange={(e) =>
              setnewPostRecord({ ...newPostRecord, title: e.target.value })
            }
          />
          <label>Body</label>
          <input
            type="text"
            className="form-control"
            defaultValue={post.body}
            onChange={(e) =>
              setnewPostRecord({ ...newPostRecord, body: e.target.value })
            }
          />
          <button
            type="button"
            className="btn btn-primary mt-2 "
            onClick={updateRecord}
          >
            Update
          </button>
        </form>
      ) : (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
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
                      className="btn btn-success btn-sm"
                      onClick={() => editPostDetails(post)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteRecord(post)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Loading.....</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
