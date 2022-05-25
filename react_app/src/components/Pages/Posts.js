import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Dislikes from "./Dislikes";
import Latest from "./Latest";
import Likes from "./Likes";
import Oldest from "./Oldest";

export default function Posts() {
  return (
    <div className="container mt-2">
      <h2 className="text-primary mt-2 text-center">Posts</h2>

      <ul className="nav justify-content-center bg-dark">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="latest">
            Latest
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="oldest">
            Oldest
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="likes">
            Likes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link text-white"
            to="dislikes"
            aria-disabled="true"
          >
            Dislikes
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/latest" element={<Latest />} />
        <Route path="/oldest" element={<Oldest />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/dislikes" element={<Dislikes />} />
      </Routes>
    </div>
  );
}
