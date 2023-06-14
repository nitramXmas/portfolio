
import { Routes, Route } from "react-router-dom"

import './App.css'
import Main from './pages/Main'
import ProjectDetails from './pages/ProjectDetails'

function App() {

  

  return (

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />}></Route>
      </Routes>

  )
}

export default App 
