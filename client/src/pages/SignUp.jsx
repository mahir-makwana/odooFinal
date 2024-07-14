import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SummeryApi from "../API/Summary";
import { toast } from "react-toastify";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleFetchData = async () => {
    const response = await fetch(SummeryApi.signup.url, {
      method: SummeryApi.signup.method,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    const dataResponse = await response.json();
    console.log("dataResponse", dataResponse);
    if (dataResponse.success) {
      toast.success(dataResponse.message);
      navigate("/login");
    }
    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleFetchData();
  };

  const handleOnChange = (e) => {
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
          <img src="Regestore.png" alt="" className="Rimg" />
        </div>
        <div className="sign">
          <form className="form" onSubmit={handleOnSubmit}>
            <p className="title">Register</p>
            <p className="message">
              Signup now and get full access to our app.
            </p>
            <div className="flex">
              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  name="name"
                  className="input"
                  id="firstname"
                  onChange={(e) => handleOnChange(e)}
                />
                <span>Name</span>
              </label>
            </div>

            <label>
              <input
                required=""
                placeholder=""
                type="email"
                className="input"
                name="email"
                onChange={(e) => handleOnChange(e)}
              />
              <span>Email</span>
            </label>

            <label>
              <input
                required=""
                placeholder=""
                type="password"
                className="input"
                id="password"
              />
              <span>Password</span>
            </label>
            <label>
              <input
                required=""
                placeholder=""
                type="password"
                className="input"
                id="confirmpassword"
                name="password"
                onChange={(e) => handleOnChange(e)}
              />
              <span>Confirm password</span>
            </label>
            <button className="submit" type="submit">
              Submit
            </button>
            <p className="signin">
              Already have an acount ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
