import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Blog from './pages/blog'
import BlogDetails from './pages/BlogDetails'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/:id' element={<BlogDetails/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
