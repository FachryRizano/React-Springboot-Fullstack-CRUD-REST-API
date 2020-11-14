import React, { Component } from 'react';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            employees:[]
        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div classname="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Employee First Name</td>
                                <td>Employee Last Name</td>
                                <td>Employee Email Id</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                    </table>

                    <tbody>
                        {
                            this.state.employees.map(
                                employee=>
                                <tr key = {employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;