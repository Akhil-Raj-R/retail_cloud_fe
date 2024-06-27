import React, { useState } from "react";
import "./Form.css";
import service from "../service/Service";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    joiningDate: "",
    salary: "",
    place: "",
    departmentId: "",
    repotingManger: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await service.addemp(formData);
      console.log(response);

      if (response.data === "success") {
        console.log("Employee registered successfully");
        alert("Employee registered successfully");
        // Handle success, e.g., clear the form or show a success message
        setFormData({
          name: "",
          dateOfBirth: "",
          joiningDate: "",
          salary: "",
          place: "",
          departmentId: "",
          repotingManger: "",
          role: "",
        });
        console.log(formData);
      } else {
        console.error("Failed to register employee");
        alert("Failed to register employee");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    }
  };

  return (
    <div className="bgimg">
      <div className="register-form-container">
        <h1>Employee Registration Form</h1>
        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <label htmlFor="joiningDate">Joining Date:</label>
          <input
            type="date"
            id="joiningDate"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            required
          />
          <label htmlFor="salary">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
          />
          <label htmlFor="departmentId">Department ID:</label>
          <input
            type="text"
            id="departmentId"
            name="departmentId"
            value={formData.departmentId}
            onChange={handleChange}
            required
          />
          <label htmlFor="reportingManger">Reporting Manager:</label>
          <input
            type="text"
            id="reportingManger"
            name="repotingManger"
            value={formData.repotingManger}
            onChange={handleChange}
            required
          />
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button> <br />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
