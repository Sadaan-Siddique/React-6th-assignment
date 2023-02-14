import React, { useState, useEffect } from 'react'
import '../App.css';
function TodoChild(props) {
    const [svgOne, setSvgOne] = useState('');
    const [svgTwo, setSvgTwo] = useState('');
    let data = props.data;
    //  (<tr>
    //     <td className="" onMouseEnter={hoverFirstFunc} onMouseLeave={hoverSecondFunc}>
    //         <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever='@mdo'>{props.data}</button>
    //         <span onClick={() => {
    //             data = '';
    //             setDelet(data);
    //             console.log(delet);
    //         }}>{svg}</span>
    //     </td>
    // </tr>);
    const [delet, setDelet] = useState(data);
    function hoverFirstFunc() {
        setSvgOne(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>)
        setSvgTwo(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>)
        console.log('fire')
    }
    function hoverSecondFunc() {
        setSvgOne(' ');
        setSvgTwo(' ');
    }

    return (
        <>
            <tr>
                <td onMouseEnter={hoverFirstFunc} onMouseLeave={hoverSecondFunc}>
                    <span style={{left:'10%'}} onClick={() => {
                        data = '';
                        setDelet(data);
                        console.log(delet);
                    }}>{svgTwo}</span>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever='@mdo'>{delet}</button>
                    <span style={{left:'90%'}} onClick={() => {
                        data = '';
                        setDelet(data);
                        console.log(delet);
                    }}>{svgOne}</span>
                </td>
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
                                    <input type="text" className="mt-1 form-control" id="recipient-name" value={delet} />
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