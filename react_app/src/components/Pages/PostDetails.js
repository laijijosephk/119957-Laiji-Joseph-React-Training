import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setpost] = useState();
  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/pankkap/LiveDBServer/posts/${id}`
      )
      .then((res) => setpost(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(post);

  return (
    <div className="container mt-2">
      <h2 className="mt-2 text-danger">Id: {id}</h2>
      <table className="mt-2 table table-bordered table-striped ">
        <tbody>
          <tr>
            <th>Id:</th>
            <td>{post?.id}</td>
          </tr>
          <tr>
            <th>Title:</th>
            <td>{post?.title}</td>
          </tr>
          <tr>
            <th>Body:</th>
            <td>{post?.body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
