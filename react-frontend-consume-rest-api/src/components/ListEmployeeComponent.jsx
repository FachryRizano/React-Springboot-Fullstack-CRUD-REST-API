import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            employees:[]
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployee().then(res=>{
            this.setState({
                employees : res.data
            })
        });
    }

    addEmployee(){
        this.props.history.push("/add-employee/-1")
    }



    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res=>{
            this.setState({
                employees:this.state.employees.filter(employee=> employee.id !== id)
            })
        })
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`)
    }
    
    render() {
        console.log(this.state.employees)
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Employee First Name</td>
                                <td>Employee Last Name</td>
                                <td>Employee Email Id</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                    

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee=>
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>
                                            <button onClick={()=>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.viewEmployee(employee.id)} className="btn btn-success">View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;