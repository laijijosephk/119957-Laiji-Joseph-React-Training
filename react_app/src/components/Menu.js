import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Menu() {
  const params = useParams();
  const navigate = useNavigate();
  const [role, setrole] = useState();
  useEffect(() => {
    let user_role = sessionStorage.getItem("role");
    setrole(user_role);
  }, [params]);

  function logout() {
    sessionStorage.removeItem("role");
    alert("Logout Successfully");
    navigate("/login");
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <Link className="text-white navbar-brand" to="/">
            Koenig
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {role ? (
                role == "Author" ? (
                  <>
                    <Link
                      className="text-white nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                    <Link className="text-white nav-link" to="/posts">
                      Posts
                    </Link>
                    {/* <Link className="text-white nav-link" to="/allposts">
                All Posts
              </Link> */}
                    <Link className="text-white nav-link" to="/addpost">
                      Add New Post
                    </Link>
                    <button className="btn btn-secondary" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      className="text-white nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                    <Link className="text-white nav-link" to="/posts">
                      Posts
                    </Link>
                    <button className="btn btn-secondary" onClick={logout}>
                      Logout
                    </button>
                  </>
                )
              ) : (
                <>
                  <Link className="text-white nav-link" to="/login">
                    Login
                  </Link>
                  <Link className="text-white nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
