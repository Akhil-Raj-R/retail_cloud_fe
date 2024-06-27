// import React, { useEffect, useState } from "react";
// import service from "../service/Service";
// import { useNavigate } from "react-router-dom";

// export const Viewemp = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/logout");
//   };

//   const dlt = async (empId) => {
//     await service.delete(empId);

//     // console.log("Delete executer");
//   };

//   const [empData, setEmpData] = useState([]);
//   const init = async () => {
//     const response = await service.viewAllEmployees();
//     console.log(response.data);
//     setEmpData(response.data);
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <div
//       className="bgimg"
//       style={{
//         backgroundImage: `D:\Kompetenz\Spring boot\RetailCloud\RetailCloud_FE\retailcloud\src\emp.jpg`,

//         position: "relative",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <form>
//         <table border={"3px solid rgb(0, 0, 0)"}>
//           <thead>
//             <tr>
//               <th>EmpId</th>
//               <th>Name</th>
//               <th>Date of Birth</th>
//               <th>Date of Joining</th>
//               <th>Place</th>
//               <th>Reporting Manager</th>
//               <th>Role</th>
//               <th>Salary</th>
//               <th>Department Id</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {empData.map((emp) => (
//               <tr key={emp.empId}>
//                 <td>{emp.empId}</td>
//                 <td>{emp.name}</td>
//                 <td>{emp.dateOfBirth}</td>
//                 <td>{emp.joiningDate}</td>
//                 <td>{emp.place}</td>
//                 <td>{emp.repotingManger}</td>
//                 <td>{emp.role}</td>
//                 <td>{emp.salary}</td>
//                 <td>{emp.departmentId}</td>
//                 <div>
//                   <td>
//                     <button className="buttons">update</button>
//                   </td>
//                   <td>
//                     <button onClick={() => dlt(emp.empId)} className="buttons">
//                       Delete
//                     </button>
//                   </td>
//                 </div>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={handleLogout} className="add-button">
//           Logout
//         </button>
//       </form>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import service from "../service/Service";
import { useNavigate } from "react-router-dom";

export const Viewemp = () => {
  const navigate = useNavigate();

  const [empData, setEmpData] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    empId: "",
    name: "",
    dateOfBirth: "",
    joiningDate: "",
    place: "",
    repotingManger: "",
    role: "",
    salary: "",
    departmentId: "",
  });

  const init = async () => {
    const response = await service.viewAllEmployees();
    console.log(response.data);
    setEmpData(response.data);
  };

  useEffect(() => {
    init();
  }, []);

  const handleEditClick = (event, emp) => {
    event.preventDefault();
    setEditRowId(emp.empId);
    setEditFormData({ ...emp });
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();
    await service.update(editFormData);
    console.log(editFormData);
    setEditRowId(null);
    init();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const dlt = async (empId) => {
    await service.delete(empId);
    init();
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div
      style={{
        backgroundImage: `url(D:\\Kompetenz\\Spring boot\\RetailCloud\\RetailCloud_FE\\retailcloud\\src\\emp.jpg)`,
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
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
                <td>
                  {editRowId === emp.empId ? (
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.name
                  )}
                </td>
                <td>
                  {editRowId === emp.empId ? (
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={editFormData.dateOfBirth}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.dateOfBirth
                  )}
                </td>
                <td>
                  {editRowId === emp.empId ? (
                    <input
                      type="date"
                      name="joiningDate"
                      value={editFormData.joiningDate}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.joiningDate
                  )}
                </td>
                <td>
                  {editRowId === emp.empId ? (
                    <textarea
                      name="place"
                      value={editFormData.place}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.place
                  )}
                </td>
                <td>
                  {editRowId === emp.empId ? (
                    <textarea
                      name="repotingManger"
                      value={editFormData.repotingManger}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.repotingManger
                  )}
                </td>
                <td>
                  {editRowId === emp.empId ? (
                    <textarea
                      name="role"
                      value={editFormData.role}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.role
                  )}
                </td>
                <td>
                  {editRowId === emp.empId ? (
                    <textarea
                      name="salary"
                      value={editFormData.salary}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.salary
                  )}
                </td>
                <td>
                  {editRowId === emp.empId ? (
                    <textarea
                      name="departmentId"
                      value={editFormData.departmentId}
                      onChange={handleChange}
                    />
                  ) : (
                    emp.departmentId
                  )}
                </td>
                <td>
                  {editRowId === emp.empId ? (
                    <button
                      onClick={(e) => handleSaveClick(e)}
                      className="buttons"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={(event) => handleEditClick(event, emp)}
                      className="buttons"
                    >
                      Update
                    </button>
                  )}
                  <button onClick={() => dlt(emp.empId)} className="buttons">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleLogout} className="add-button">
          Logout
        </button>
      </form>
    </div>
  );
};
