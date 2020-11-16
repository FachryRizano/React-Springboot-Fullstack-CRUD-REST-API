import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            //step 2
            id:this.props.match.params.id,
            firstName:"",
            lastName:"",
            email:""
        }
    }

    //step 3
    componentDidMount(){
        //step 4
        if(this.state.id === -1){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then(res=>{
                let employee = res.data;
                this.setState({
                    firstName:employee.firstName,
                    lastName:employee.lastName,
                    email:employee.email
                })
            })
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

    saveOrUpdateEmployee = e=>{
        e.preventDefault();
        let employee = {
            "firstName":this.state.firstName,
            "lastName":this.state.lastName,
            "email":this.state.email
        }
        console.log(employee);
        //step 5
        if(this.state.id===-1){
            EmployeeService.createEmployee(employee).then(res=>{
                this.props.history.push("/employees")
            })   
        }else{
            EmployeeService.updateEmployeeById(employee,this.state.id).then(res=>{
                this.props.history.push('/employees');
            })
        }

        
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
                            <h3 className="text-center">{this.state.id=== -1? 'Add Employee': 'Update Employee'}</h3>
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

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee.bind(this)}>Save</button>
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