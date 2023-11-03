import React from 'react'

function Ticket() {
  return (
    <div>
        
        <div className='row'>
            <div className='col-6 mt-4' >
                <h2 className='text-info'>Ticket List</h2>
            </div>
            <div className='col-6 mt-4'>
                <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal">Add Ticket</button>
            </div>
        </div>

        <div className='container rounded border mt-4'>
            <table className='table table-info table-bordered table-stripped table-active'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Image</th>
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
                    <h5 className="modal-title">Add Ticket</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className='form-group row'>
                        <label className='col-4'>Ticket Name</label>
                        <div className='col-8'>
                            <input name='name' placeholder='Enter Name' className='form-control'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>Count</label>
                        <div className='col-8'>
                            <input name='name' placeholder='Enter Count' className='form-control'></input>
                        </div>
                    </div>

                    <div className='form-group row'>
                        <label className='col-4'>File Upload</label>
                        <div className='col-4'>
                            {/* <input name='name' placeholder='Enter Count' className='form-control'></input> */}

                            <input type="file" className='form-control' />
                        </div>
                        <div className='col-4'>
                            {/* <input name='name' placeholder='Enter Count' className='form-control'></input> */}

                            <button type="submit" className='btn btn-primary'>Upload</button>
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

export default Ticket