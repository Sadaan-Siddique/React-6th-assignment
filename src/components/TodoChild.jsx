import React from 'react'

function TodoChild(props) {
    let data = props.data
  return (
    <>
      <tr>
        <td>{data}</td>
      </tr>
    </>
  )
}

export default TodoChild