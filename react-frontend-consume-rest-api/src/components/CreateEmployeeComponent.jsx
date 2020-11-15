import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            email:""
        }
    }

    changeFirstNameHandle= e=>{
        this.setState({
            firstName:e.target.value
        });
    }

    changeLastNameHandle= e=>{
        this.setState({
            lastName:e.target.value
        });
    }

    changeEmailHandle= e=>{
        this.setState({
            email:e.target.value
        });
    }

    saveEmployee = e=>{
        e.preventDefault();
        let employee = {
            "firstName":this.state.firstName,
            "lastName":this.state.lastName,
            "email":this.state.email
        }
        console.log(employee);

        EmployeeService.createEmployee(employee).then(res=>{
            this.props.history.push("/employees")
        })
    }

    cancel(){
        this.props.history.push("/employees")
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandle.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandle.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandle.bind(this)}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee.bind(this)}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} syle={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;