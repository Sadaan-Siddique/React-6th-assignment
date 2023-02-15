import React from 'react'
import { useEffect, useState, useRef } from 'react'
import TodoChild from './TodoChild';
import '../App.css';
function TodoList() {
    // React Hooks 
    const [inptData, setInptData] = useState([]);
    const [inptArr, setInptArr] = useState([]);
    const inptValue = useRef();
    

    // JS
    const btnfunc = (e) => {
        if (inptValue.current.value === '') {
            alert('Type Some Value String');
        } else {
            e.preventDefault()
            setInptData(inptValue.current.value);
        }
    }
    useEffect(() => {
        setInptArr([...inptArr, inptData])
        inptValue.current.value = '';
        console.log(inptData);
    }, [inptData])
    const deleteList = (key) =>{
        let newArr = [...inptArr];
        newArr.splice(key,1);
        setInptArr([...newArr]);
    }
    return (
        <>
            <form className='form todo-div container text-center mt-4 py-5 px-5'>
                <h1> React Todo List  </h1>
                <label></label>
                <input ref={inptValue} placeholder='Type something :' type="text" />
                <button onClick={btnfunc} className='list-btn'>Click</button>
                <table className='table text-center'>
                    <thead className='mt-2'>
                        <tr className='fw-bold mt-2'>
                            <td>S.No</td>
                            <td>List</td>
                            <td>Checked</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {inptArr.map((item,index) => {
                            return (<>
                                <TodoChild key={index} data={item} index={index} deleteList={deleteList}/>
                            </>)
                        })}
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default TodoList