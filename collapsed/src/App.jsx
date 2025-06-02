import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container'
/*
Create a Container component that renders its children within a div tag.
Have the div tag use a white background and a red border.
Add a title prop that will contain the title value to be displayed before the children.
Make the container collapsible, so that when the title is clicked the children are either hidden of shown again.
Use the useState hook to keep track of the collapsed state.
*/
function App() {

  return (
    <>
       <Container title="Questo è l'h1">
        {collapsed && <h2>Questo è l'h2</h2>}
       </Container>
    </>
  )
}

export default App
