import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
  });

  const [users, setusers] = useState();
  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/pankkap/LiveDBServer/users"
      )
      .then((res) => setusers(res.data))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(users);

  function loginprocess() {
    // console.log(loginDetails);

    let foundUser = users.find((u) => u.email === loginDetails.email);

    if (foundUser) {
      if (foundUser.password === loginDetails.password) {
        if (foundUser.role === "Author") {
          sessionStorage.setItem("role", "Author");
          navigate("/home");
        } else {
          sessionStorage.setItem("role", "Visitor");
          navigate("/home");
        }
      } else {
        alert("Password is Wrong");
      }
    } else {
      alert("User not exist");
    }
  }
  return (
    <div className="container mt-4">
      <h2 className="mt-2 text-center">Login Details</h2>
      <div className="row">
        <div className="offset-md-4 col-md-4 mt-2">
          <label htmlFor="">Email</label>
          <input
            type="text"
            required
            className="form-control my-2"
            onChange={(e) =>
              setloginDetails({ ...loginDetails, email: e.target.value })
            }
          />
          <label htmlFor="">Password</label>
          <input
            required
            type="password"
            className="form-control my-2"
            onChange={(e) =>
              setloginDetails({ ...loginDetails, password: e.target.value })
            }
          />
          <button className="btn btn-success" onClick={loginprocess}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
