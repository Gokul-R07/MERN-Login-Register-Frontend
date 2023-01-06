import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/register.css";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://mern-login-register-backend.vercel.app/api/users";
      const { data: res } = await axios.post(url, data);
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="register">
      <div className="left">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Enter Name</label>
          <input
            type="text"
            required
            name="name"
            onChange={handleChange}
            value={data.name}
          />{" "}
          <br />
          <label htmlFor="">Enter Phone Number</label>
          <input
            type="text"
            // minLength={10}
            required
            name="phone"
            onChange={handleChange}
            value={data.phone}
          />{" "}
          <br />
          <label htmlFor="">Enter Email</label>
          <input
            type="email"
            required
            name="email"
            onChange={handleChange}
            value={data.email}
          />{" "}
          <br />
          {error && <div className="error-message">{error}</div>}
          <label htmlFor="">Enter Password</label>
          <input
            type="password"
            // minLength={8}
            required
            name="password"
            onChange={handleChange}
            value={data.password}
          />{" "}
          <br />
          <br />
          <br />
          <input type="submit" value="REGISTER" id="register-btn" />
        </form>
      </div>
      <div className="right">
        <h1>Already a registered User?</h1>

        <Link to="/login">
          <button className="login-btn">LOGIN</button>
        </Link>
        <h1>Or back to HomePage</h1>
        <Link to="/">
          <button className="home-btn">HOMEPAGE</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
