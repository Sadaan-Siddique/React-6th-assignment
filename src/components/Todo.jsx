import React, { useState, useRef, useEffect } from 'react'

function Todo() {
    const [arr, setArr] = useState([]);
    const [editValue, setEditValue] = useState('');
    const [editCheck, setEditCheck] = useState(false);
    const [deleteBtn, setDeleteBtn] = useState(false);
    const [checked, setChecked] = useState([]);

    const inptValue = useRef();

    const reloadTrigger = true; // Constant variable with a value that won't change
    useEffect(() => {
        const todo_items_string = localStorage.getItem('Todo_Items');
        const todo_items_arr = JSON.parse(todo_items_string);
        console.log(todo_items_arr);
        if (todo_items_arr) {
            console.log('ni aaye');
        } else {
            console.log('aagaye');
            setArr(todo_items_arr);
            setDeleteBtn(true);
        }
    }, [reloadTrigger]);

    const addItem = (text) => {
        setArr([...arr, text]);
        setChecked([...checked, false]);
    };

    const deletefunc = (index) => {
        let newArr = [...arr]
        newArr.splice(index, 1)
        console.log(newArr)
        setArr(newArr)
        // setDeleteBtn(false);
    }

    const editfunc = (index) => {
        inptValue.current.value = arr[index];
        setEditValue(index)
        setEditCheck(true)
    }

    const toggleChecked = (index) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
    };

    const deleteAllFunc = () => {
        setArr([]);
        setDeleteBtn(false);
    }

    const btnfunc = () => {
        if (inptValue.current.value === '') {
            alert('Please Write something')
        } else {
            setDeleteBtn(true);
            if (editCheck) {
                arr[editValue] = inptValue.current.value;
                setArr(arr);
                setEditCheck(false)
                inptValue.current.value = '';
            } else {
                addItem(inptValue.current.value)
                inptValue.current.value = '';
            }
        }
    }

    useEffect(() => {
        localStorage.setItem('Todo_Items', JSON.stringify(arr))
        if (arr.length === 0){
            setDeleteBtn(false);
        }else{
            setDeleteBtn(true);
        }
    }, [arr])

    return (
        <>
            <div className='p-3'>
                <h1 className='text-center mt-3'>React Todo App</h1>
            </div>
            <div className='mt-4 todo-div container text-center'>
                <input type="text" ref={inptValue} placeholder='Enter Something' className='ps-2 py-1' />
                <button type='submit' onClick={btnfunc}>Add</button>
                <ul>
                    <hr />
                    {
                        arr.map((item, index) => {
                            return (
                                <>
                                    {/* <hr /> */}
                                    <li key={index}>
                                        <span>{index + 1}. </span>
                                        <span
                                            className='li_span'
                                            style={{
                                                textDecoration: checked[index] ? "line-through" : "none",
                                                display: 'inline-block',
                                                // width: '29vw',
                                                maxHeight: '24px',
                                                overflow: 'auto',
                                                overflowX: 'hidden',
                                                whiteSpace: 'pre-wrap',
                                                wordWrap: 'break-word',
                                            }}
                                        >
                                            {item}
                                        </span>


                                        <i
                                            onClick={() => { deletefunc(index) }} className="bi bi-trash-fill">
                                        </i>
                                        <i
                                            onClick={() => { editfunc(index) }} className="bi bi-pencil-square">
                                        </i>
                                        <i
                                            checked={checked[index]}
                                            onClick={() => toggleChecked(index)} className="bi bi-check-circle">
                                        </i>
                                    </li>
                                    <hr />
                                </>
                            )
                        })
                    }
                </ul>
                {deleteBtn ?
                    <button className='mb-3' onClick={deleteAllFunc}>Delete All</button> :
                    ''
                }
            </div>
        </>
    )
}
export default Todo