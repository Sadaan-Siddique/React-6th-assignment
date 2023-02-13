import React, { useState } from 'react'
import '../App.css';
function TodoChild(props) {
    let data = props.data;
    const [svg, setSvg] = useState('');
    function hoverFirstFunc() {
        setSvg(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>,'hhhhh')

    }
    function hoverSecondFunc() {
        setSvg(' ');
    }
    
    return (
        <>
            <tr>
                <td className="" onMouseEnter={hoverFirstFunc} onMouseLeave={hoverSecondFunc} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style={{ cursor: 'pointer' }}>{data}<span onClick={()=>{

                }}>{svg}</span></td>
            </tr>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog bg-light rounded">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit List</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Selected List:</label>
                                    <input type="text" className="mt-1 form-control" id="recipient-name" placeholder={data.inptData} />
                                </div>
                            </form>
                        </div>
                        <div style={{ marginTop: "0px", marginRight: '35px' }} className=" modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoChild