import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Course from './pages/Course'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import Kids from './pages/Kids'
import Women from './pages/Women'
import Men from './pages/Men'
import CourseDetail from './pages/CourseDetail'

const App = () => {
  return (
    <div className="h-screen bg-blck text-white">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        {/*Start Nested Routes */}
         {/* Nested Routes are used to render child components based on the parent route. */}
        <Route path='/product' element={<Product />}>
          <Route path='kids' element={<Kids />} />
          <Route path='women' element={<Women />} />
          <Route path='men' element={<Men/>} />
        </Route>
       {/* End Nested Routes */}
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Course />} />
        <Route path='/course/:id' element={<CourseDetail/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
