
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/AboutUs' element={<AboutUs/>}/> */}
      {/* <Route path='/ContactUs' element={<ContactUs/>}/> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
