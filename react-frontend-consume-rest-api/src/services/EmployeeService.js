import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{
    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' +id);
    }

    updateEmployeeById(employee,employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee)
    }
}

export default new EmployeeService();