import React, { useState } from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import service from "../service/Service";

function Homepage() {
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();
    const respo = await service.login(formData);
    // console.log(respo.data);
    if (respo.data.status === "Success") {
      console.log(respo.data.departmentId);

      // alert("Login Sucessfully!!");

      navigate("/register", {
        state: {
          id: respo.data.id,
          departmentHead: respo.data.departmentHead,
          departmentName: respo.data.departmentName,
          departmentId: respo.data.departmentId,
          email: respo.data.email,
        },
      });
    } else {
      alert("Invalid Credentials!!");
    }
  };

  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-left">
          <button className="nav-button">Home</button>
          <button className="nav-button">Signup</button>
          <button className="nav-button">About Us</button>
        </div>
      </nav>

      <div className="background">
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form">
            <label>
              Username:
              <input type="text" name="email" onChange={handleInput} />
            </label>

            <label>
              Password:
              <input type="password" name="password" onChange={handleInput} />
            </label>
            <button onClick={handleChange} className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
