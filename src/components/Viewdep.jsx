import React, { useEffect, useState } from "react";
import service from "../service/Service";
import { useNavigate } from "react-router-dom";

export const Viewdep = () => {
  const navigate = useNavigate();

  const dlt = async (id) => {
    await service.deleteDpt(id);

    // console.log("Delete executer");
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  const [dptData, setdptData] = useState([]);
  const init = async () => {
    const response = await service.viewAllDepartment();
    console.log(response.data);
    setdptData(response.data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <form>
        <table border={"3px solid rgb(0, 0, 0)"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>departmentHead</th>
              <th>departmentName</th>
              <th>Department Id</th>
              <th>creationDate</th>
              <th>email</th>
              <th>password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dptData.map((dpt) => (
              <tr key={dpt.id}>
                <td>{dpt.id}</td>
                <td>{dpt.departmentHead}</td>
                <td>{dpt.departmentName}</td>
                <td>{dpt.departmentId}</td>
                <td>{dpt.creationDate}</td>
                <td>{dpt.email}</td>
                <td>{dpt.password}</td>
                <div>
                  <td>
                    <button className="buttons">update</button>
                  </td>
                  <td>
                    <button onClick={() => dlt(dpt.id)} className="buttons">
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleLogout} className="add-button">
          LogOut
        </button>
      </form>
    </>
  );
};
