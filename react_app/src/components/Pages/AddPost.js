import axios from "axios";
import React, { useState } from "react";

//UseNavigate Hook for navigation
import { useNavigate } from "react-router-dom";
export default function AddPost() {
    //Create a Reference of useNavigate
    const navigate = useNavigate();
  const [postDetails, setpostDetails] = useState({
    title: "",
    body: "",

    latest: true,
    oldest: false,
    likes: false,
    dislikes: false,
  });

  const addPost = () => {
    axios
      .post(
        "https://my-json-server.typicode.com/pankkap/LiveDBServer/posts",
        postDetails
      )
      .then(() => {
        alert("Post is Created Successfully");
        // Navigate to a Route
        navigate("/posts/latest");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="container mt-4 ">
      <h3 className="text-primary">Add New Post</h3>
      <div className="row mt-4">
        <div className="col-md-12">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) =>
              setpostDetails({ ...postDetails, title: e.target.value })
            }
          />
          <label>Body</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) =>
              setpostDetails({ ...postDetails, body: e.target.value })
            }
          />

          <button className="btn btn-success mt-4 " onClick={addPost}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
