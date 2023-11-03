import React from 'react'

function Ticket_Book() {
  return (
    <div>

        <div className='row'>
            <div className='col-6 mt-4' >
                <h2 className='text-info'>Ticket_Book List</h2>
            </div>
            <div className='col-6 mt-4'>
                <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Add Ticket Book</button>
            </div>
        </div>

        <div className='container rounded border mt-4'>
            <table className='table table-info table-bordered table-stripped table-active'>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Ticket Name</th>
                        <th>Count</th>
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
                    <h5 className="modal-title">Book New Ticket </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">

                    
                <div className='form-group row'>
                        <label className='col-4'>User</label>
                        <div className='col-8'>

                            <select name="selectList" id="selectList" className='form-control'>
                              <option value="option 0">Select User</option>
                              <option value="option 1">Option 1</option>
                              <option value="option 2">Option 2</option>
                          </select>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Ticket</label>
                        <div className='col-8'>
                        <select name="selectList" id="selectList" className='form-control'>
                              <option value="option 0">Select Ticket</option>
                              <option value="option 1">Option 1</option>
                              <option value="option 2">Option 2</option>
                          </select>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Count</label>
                        <div className='col-8'>
                            <input name='name' placeholder='Enter Count' className='form-control'></input>
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

export default Ticket_Book