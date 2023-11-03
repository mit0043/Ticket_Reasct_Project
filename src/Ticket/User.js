import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

function User() {

    const [user, setUser]=useState([]);
    const [departmentdropDown, SetDepartmentDropDown]=useState([]);
    
    const [roledropDown, SetRoleDropDown]=useState([]);

    const [adduser, setAddUser]=useState({

        vUserName:'',
        vAddress:'',
        vEmail:'',
        vPassword:'',
        dRegistrationDate:'',
        dExpireDate:'',
        dRefreshDate:'',
        iDepartmentId:'',
        iRoleId:'',

    });

    useEffect(() => {
        GetDepartment();
    }, []);

    const GetDepartment = async () => {
        try{
            const response = await axios.get("https://localhost:7079/api/User/Department");
            SetDepartmentDropDown(response.data);
        }
        catch(error)
        {
            console.error('Error fatching Department:', error);
        }
    };

    useEffect(() => {
        GetAllUser();
    }, []);

    const GetAllUser= async ()=> {
        try{
            const response = await axios.get("https://localhost:7079/api/User");
            setUser(response.data);
            console.log(response.data);
        }
        catch(error)
        {
            console.error('Error fatching User:', error);
        }
    };


  return (
    <div>

        <div className='row'>
            <div className='col-6 mt-4' >
                <h2 className='text-info'>User List</h2>
            </div>
            <div className='col-6 mt-4'>
                <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Add User</button>
            </div>
        </div>

        <div className='container rounded border mt-4'>
            <table className='table table-info table-bordered table-stripped table-active'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>RegistrationDate</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* API */}
                </tbody>
            </table>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header bg-info">
                    <h5 className="modal-title">Add New User</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">

                    <div className='form-group row'>
                        <label className='col-4'>Name</label>
                        <div className='col-8'>
                            <input name='name' placeholder='Enter Name' className='form-control'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Address</label>
                        <div className='col-8'>
                            <input name='address' placeholder='Enter Address' className='form-control'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Email</label>
                        <div className='col-8'>
                            <input name='name' placeholder='Enter Email' className='form-control'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Passsword</label>
                        <div className='col-8'>
                            <input name='name' placeholder='Enter Password' className='form-control'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Registration Date</label>
                        <div className='col-8'>
                            <input name='name' placeholder='Enter Registration Date' className='form-control'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Department</label>
                        <div className='col-8'>

                            <select name="selectList" id="selectList" className='form-control'>
                              <option value="option 0">Select Department</option>
                              <option value="option 1">Option 1</option>
                              <option value="option 2">Option 2</option>
                          </select>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Role</label>
                        <div className='col-8'>
                        <select name="selectList" id="selectList" className='form-control'>
                              <option value="option 0">Select Role</option>
                              <option value="option 1">Option 1</option>
                              <option value="option 2">Option 2</option>
                          </select>
                        </div>
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default User