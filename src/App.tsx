import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home" 
import Introduction from "./pages/Introduction"
import Layout from "./layout/Layout"
import MenuFood from "./pages/MenuFood"

function App() {   
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index path="" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<Introduction/>}/>
        <Route path="menu" element={<MenuFood/>}/>
      </Route>
    </Routes>
  )
}

export default App
