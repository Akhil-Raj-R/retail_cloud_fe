import React, { useEffect, useState } from "react";

import "./Registerpage.css";
import { useLocation, useNavigate } from "react-router-dom";
import service from "./../service/Service";

function Register() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/addemployee");
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  const handleView = () => {
    navigate("/viewallEmp");
  };

  const handleViewDep = () => {
    navigate("/viewallDep");
  };

  // const Update = () => {

  //   const [formData, setFormData] = useState({
  //     name: '',
  //     dateOfBirth: '',
  //     joiningDate: '',
  //     salary: '',
  //     place: '',
  //     departmentId: '',
  //     reportingManager: '',
  //     role: '',
  //   });

  // const update = async (e) => {
  //   e.preventDefault();
  //   await service.update(formData);
  //   console.log("updated");
  // };

  const dlt = async (empId) => {
    await service.delete(empId);

    // console.log("Delete executer");
  };

  const [empData, setEmpData] = useState([]);
  const location = useLocation();
  const departmentHead = location.state?.departmentHead;
  const departmentId = location.state?.departmentId;
  const id = location.state?.id;
  const email = location.state?.email;
  const departmentName = location.state?.departmentName;

  const [loginData, setLoginData] = useState({
    departmentHead: departmentHead,
    departmentId: departmentId,
    id: id,
    email: email,
    departmentName: departmentName,
  });

  // console.log(departmentId);
  // console.log(departmentHead);

  const init = async () => {
    const response = await service.viewDepartmentEmployees(departmentId);
    setEmpData(response.data);
    // console.log(empData);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="backgroundimg">
      <h1>Department Details</h1>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #ff7e5f, #feb47b)",
          display: "flex",
          alignItems: "center",
          gap: "14vw",
          justifyContent: "center",
        }}
      >
        <h2>{loginData.departmentHead}</h2>
        <h2>{loginData.departmentName}</h2>

        <h3>Dept Id:{loginData.departmentId}</h3>

        <h3>{loginData.email}</h3>
      </div>
      <br /> <br />
      <h1>Employee Details</h1>
      <form>
        <table border={"3px solid rgb(0, 0, 0)"}>
          <thead>
            <tr>
              <th>EmpId</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Date of Joining</th>
              <th>Place</th>
              <th>Reporting Manager</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Department Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {empData.map((emp) => (
              <tr key={emp.empId}>
                <td>{emp.empId}</td>
                <td>{emp.name}</td>
                <td>{emp.dateOfBirth}</td>
                <td>{emp.joiningDate}</td>
                <td>{emp.place}</td>
                <td>{emp.repotingManger}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
                <td>{emp.departmentId}</td>
                <div>
                  <td>
                    <button
                      // onClick={() => update(formData)}
                      className="buttons"
                    >
                      update
                    </button>
                  </td>
                  <td>
                    <button onClick={() => dlt(emp.empId)} className="buttons">
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="adbutton">
          <button onClick={handleAdd} className="add-button">
            Add Employee
          </button>

          <button onClick={handleView} className="add-button">
            View Employees
          </button>
          <button onClick={handleViewDep} className="add-button">
            View Departments
          </button>
          <button onClick={handleLogout} className="add-button">
            LogOut
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
