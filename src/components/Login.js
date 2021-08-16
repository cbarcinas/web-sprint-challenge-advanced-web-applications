import React, { useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  //   const error = "";

  const { push } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", form)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        push("/bubbles");
      })
      .catch((err) => setError(err.response.data.error));
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login</h2>
        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={form.username}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={form.password}
            />
          </label>
          <input type="submit"></input>
        </form>
        {/* Login Form end */}

        <p id="error" className="error">
          {error}
        </p>
      </div>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
