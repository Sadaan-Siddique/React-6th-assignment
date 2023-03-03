import React, { useState, useRef } from 'react'

function Todo() {
    const [arr, setArr] = useState([]);
    const [editValue, setEditValue] = useState('')
    // const [checkValue, setCheckValue] = useState('');
    // const [newCheck, setNewCheck] = useState('');
    const [editCheck, setEditCheck] = useState(false);
    // const [strikeCheck, setStrikeCheck] = useState(false);
    const [deleteBtn, setDeleteBtn] = useState(false);
    const inptValue = useRef();
    const btnfunc = () => {
        if (inptValue.current.value === '') {
            alert('Please Write something')
        } else {
        setDeleteBtn(true);
            if (editCheck) {
                arr[editValue] = inptValue.current.value;
                setArr(arr)
                setEditCheck(false)
                inptValue.current.value = '';
            } else {
                setArr([...arr, inptValue.current.value])
                console.log(arr)
                inptValue.current.value = '';

            }

        }
    }

    const deletefunc = (index) => {
        let newArr = [...arr]
        newArr.splice(index, 1)
        console.log(newArr)
        setArr(newArr)
    }

    const editfunc = (index) => {
        inptValue.current.value = arr[index];
        setEditValue(index)
        setEditCheck(true)
    }

    // const checkfunc = (item, index) => {
    //     setStrikeCheck(true)
    //     setCheckValue(item);
    //     let tempCheck = checkValue;
    //     tempCheck.strike();
    //     setNewCheck(tempCheck)
    //     console.log(newCheck);
    //     // newCheck.strike();
    //     setStrikeCheck(false)

    // }

    const deleteAllFunc = () => {
        setArr([]);
        setDeleteBtn(false);
    }
    return (
        <>
            <h1 className='text-center mt-5'>Todo List</h1>
            <div className='mt-4 todo-div container text-center'>
                <input type="text" ref={inptValue} placeholder='Enter Something' className='ps-2 py-1' />
                <button onClick={btnfunc}>Add</button>
                <ul>
                    {
                        arr.map((item, index) => {
                            return (
                                <>
                                <hr />
                                    <li key={index}>
                                        <span>{index + 1}. </span>
                                        {item}
                                        {/* {strikeCheck ?
                                            (newCheck) :
                                            (item)
                                        } */}
                                        <i
                                            onClick={() => { deletefunc(index) }} class="bi bi-trash-fill">
                                        </i>
                                        <i
                                            onClick={() => { editfunc(index) }} class="bi bi-pencil-square">
                                        </i>
                                        {/* <i
                                            onClick={() => { checkfunc(item, index) }} class="bi bi-check-circle">
                                        </i> */}
                                    </li>
                                    <hr />
                                </>
                            )
                        })
                    }
                </ul>
                { deleteBtn ? 
                    <button className='mb-3' onClick={deleteAllFunc}>Delete All</button> :
                    ''
                }
            </div>
        </>
    )
}


export default Todo