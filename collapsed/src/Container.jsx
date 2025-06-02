import React from 'react'
import { useState } from 'react'
const Container = ({children, title}) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapse = () =>{
    setCollapsed((prev)=> !prev )
  }


  return (
    <div style={{border: "2px solid red", background:"white", color:"black"}}>
    <h1 onClick={toggleCollapse}>{title}</h1>
    {collapsed && <div>{children}</div>}
    </div>
  )
}

export default Container