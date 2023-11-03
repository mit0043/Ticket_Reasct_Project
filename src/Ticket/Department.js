import React from 'react'
import { useEffect, useState} from 'react';

import axios from 'axios';

import { eventWrapper } from '@testing-library/user-event/dist/utils';

function Department() {

    const [iDepartmentId, setId] = useState("");
    const [vDepartmentName, setName] = useState("");
    const [department, setDepartment] = useState([]);

    useEffect(()=> {
        (async () => await Load())();

    }, []);

    async function Load(){
        const result = await axios.get("https://localhost:7079/api/Department");
        setDepartment(result.data);
        console.log(result.data);
    }

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("https://localhost:7079/api/Department", {
            vDepartmentName:vDepartmentName,
      
          });
          alert("Registration Successfully");
          setId("");
          setName("");
          Load();
        } catch (err){
            alert(err);
          }
      }

      async function editDepartment(depart){
        setName(depart.vDepartmentName);
        setId(depart.iDepartmentId);
      }

      async function update(event)
      {
        event.preventDefault();
        try
        {
            await axios.put("https://localhost:7079/api/Department/UpdateDepartment/"+ department.find((dep) => dep.iDepartmentId === iDepartmentId).iDepartmentId || iDepartmentId,
            {
                           
                iDepartmentId:iDepartmentId,
                vDepartmentName:vDepartmentName,
            }
            );
            alert("Department Updated Successfully");
            setId("");
            setName("");
            Load();
        }
        catch(err)
        {
            alert(err);
        }
    }

    async function DeleteDepartment(id)
    {
        await axios.delete("https://localhost:7079/api/Department/" + id);
        alert("Department Deleted Successfully");
        setId("");
        setName("");

        Load();
    }

  return (
    <div>
        <div className='row'>
            <div className='col-6 mt-4' >
                <h2 className='text-info'>Department List</h2>
            </div>
            <div className='col-6 mt-4'>
                <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Add Department</button>
            </div>
        </div>
        
        <div className='container rounded border mt-4'>
            <table className='table table-info table-bordered table-stripped table-active'>
                <thead>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    {department.map(function fn(dep) {
                        return (
                        <tbody>
                            <tr>
                                {/* <th scope='row'>{dep.iDepartmentId}</th> */}
                                <td>{dep.vDepartmentName}</td>
                                <td>
                                    <button type='button' className='btn btn-warning m-4' data-toggle="modal" data-target="#EditModal" onClick={() => editDepartment(dep)} >Edit</button>

                                    <button type='button' className='btn btn-danger' onClick={()=>DeleteDepartment(dep.iDepartmentId)} >Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    );
                    
                })}
                
            </table>
        </div>

    {/* Save Modal */}

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header bg-info">
                    <h5 className="modal-title">Add Department</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <div class="form-group">
            
                            <input type="text" class="form-control" id="id" hidden value={iDepartmentId} onChange={(event) => {setId(event.target.value);}} />
                    </div>
                    <div className='form-group row'>
                        <label className='col-4'>Name</label>
                        <div className='col-8'>
                            <input name='name' placeholder='enter name' className='form-control' value={vDepartmentName} onChange={(event) => {setName(event.target.value);}}></input>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={save}>Save</button>
                </div>
                </div>
            </div>
        </div>
       

    {/* Update Modal */}

        <div className="modal fade" id="EditModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header bg-info">
                    <h5 className="modal-title">Add Department</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <div class="form-group">
            
                            <input type="text" class="form-control" id="id" hidden value={iDepartmentId} onChange={(event) => {setId(event.target.value);}} />
                    </div>
                    <div className='form-group row'>
                        <label className='col-4'>Name</label>
                        <div className='col-8'>
                            <input name='name' placeholder='enter name' className='form-control' value={vDepartmentName} onChange={(event) => {setName(event.target.value);}}></input>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={update}>Update</button>
                </div>
                </div>
            </div>
        </div>      
          

    </div>
    
  );
}

export default Department