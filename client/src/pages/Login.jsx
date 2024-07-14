import React, { useState } from "react";
import { Link } from "react-router-dom";
import SummeryApi from "../API/Summary";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleFetchData = async () => {
    const response = await fetch(SummeryApi.login.url, {
      method: SummeryApi.login.method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const dataResponse = await response.json();
    if (dataResponse.success) {
      toast.success(dataResponse.message);
      navigate("/");
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };
  const handelOnSubmit = (e) => {
    e.preventDefault();
    handleFetchData();
  };
  const handelOnchange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <section className="rag">
      <div className="main">
        <div className="img">
          <img src="Login.png" alt="" className="Limg" />
        </div>
        <div className="login">
          <form className="form" onSubmit={(e) => handelOnSubmit(e)}>
            <p className="title">Login</p>
            <label>
              <input
                required=""
                placeholder=""
                type="email"
                className="input"
                name="email"
                onChange={handelOnchange}
              />
              <span>Email</span>
            </label>

            <label>
              <input
                required=""
                placeholder=""
                type="password"
                className="input"
                name="password"
                onChange={handelOnchange}
              />
              <span>Password</span>
            </label>
            <button className="submit">Submit</button>
            <p className="signin">
              Create New acount ? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
