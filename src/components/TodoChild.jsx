import React, { useState, useEffect } from 'react'
import '../App.css';
function TodoChild(props) {
    const [svgOne, setSvgOne] = useState('');
    const [svgTwo, setSvgTwo] = useState('');
    let data = props.data;
    let newData = data.toString();
    console.log(typeof(data))
    console.log(typeof(newData))
    const [delet, setDelet] = useState([data]);
    function hoverFirstFunc() {
        setSvgOne(<svg style={{ visibility: 'visible' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
        </svg>)
        setSvgTwo(<svg style={{ visibility: 'visible' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>)
        console.log('fire')
    }
    function hoverSecondFunc() {
        setSvgOne(' ');
        setSvgTwo(' ');
    }
// create a react todo list delete function?                    
const deletHandler = (key) => {
    this.setState({
        todo: this.state.todo.filter((el) => el.id !== key),
    });
};




//Source: https://stackoverflow.com/questions/73211551



    return (
        <>
            <tr>
                <td>
                    <p>{props.index}</p>
                </td>
                <td style={{cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever='@mdo'>
                    {delet}
                </td>
                <td>
                    <span onClick={() => {
                        setDelet(newData.strike());
                        console.log(typeof (delet));
                    }}>
                        <svg style={{ visibility: 'visible' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                    </span>

                </td>
                <td>
                    <span onClick={ e=> {
                        props.deleteList(props.index)
                        }}>
                        <svg style={{ visibility: 'visible' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                        
                    </span>
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