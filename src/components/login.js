import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/login.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: [input.value] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/api/auth";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      localStorage.setItem("token", 123);
      window.location = "/";
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="login">
      <div className="left">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Enter Email</label>
          <input
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={data.email}
          />{" "}
          <br />
          <label htmlFor="">Enter Password</label>
          <input
            type="password"
            // minLength={8}
            required
            name="password"
            onChange={handleChange}
            value={data.password}
          />{" "}
          {error && <div className="error-message">{error}</div>}
          <br />
          <br />
          <br />
          <input type="submit" value="LOGIN" id="login-btn" />
        </form>
      </div>
      <div className="right">
        <h1>Not a registered User?</h1>

        <Link to="/register">
          <button className="register-btn">REGISTER</button>
        </Link>
        <h1>Or back to HomePage</h1>
        <Link to="/">
          <button className="home-btn">HOMEPAGE</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
