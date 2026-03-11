import "./App.css";
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard'
import Sidebar from './component/Sidebar'
import Portfolio from "./component/Portfolio";
import About from "./component/About";
import Contact from "./component/Contact";
import AddProducts from "./component/AddProducts";
import Blogs from "./component/Blogs";
import EditForm from "./component/editForm";


export const App = () => {
  return (
    <>
      <div className='container-fluid main_container'>
        <div className='row' style={{ height: "100vh", alignItems: "center"}} >
          <div className='col-lg-10 '>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/about' element={<About />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/contacts' element={<Contact />} />
              <Route path="/addProducts" element={<AddProducts />} />
              <Route path="/editForm/:id" element={<EditForm />} />
            </Routes>
          </div>
          <div className='col-lg-2 '>
            <Sidebar />

          </div>
        </div>
      </div>

    </>
  )
}
export default App