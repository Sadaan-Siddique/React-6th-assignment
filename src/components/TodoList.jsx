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
    return (
        <>
            <div className='todo-div container text-center mt-4 ps-5 pe-5'>
                <h1> React Todo List  </h1>
                <label></label>
                <input ref={inptValue} type="text" />
                <button onClick={btnfunc} className=''>Click</button>
                <table className='table text-center'>
                    <tbody>
                        {inptArr.map((item) => {
                            return (<>
                                <TodoChild key={item} data={item} />
                            </>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TodoList