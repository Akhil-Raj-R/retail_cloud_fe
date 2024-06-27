import axios from "axios";

const baseURL = "http://localhost:8080/";

class Service {
  login(model) {
    return axios.post(baseURL + "department/login", model);
  }

  viewAllDepartment() {
    return axios.get(baseURL + "department/viewall");
  }

  viewAllEmployees() {
    return axios.get(baseURL + "employee/viewall");
  }

  viewDepartmentEmployees(depId) {
    return axios.get(baseURL + "employee/view?id=" + depId);
  }

  update(formData) {
    return axios.put(baseURL + "employee/update", formData);
  }

  delete(id) {
    return axios.delete(baseURL + `employee/delete/${id}`);
  }
  deleteDpt(id) {
    return axios.delete(baseURL + `department/delete/${id}`);
  }
  addemp(formData) {
    return axios.post(baseURL + "employee/add", formData);
  }
}

const service = new Service();
export default service;
