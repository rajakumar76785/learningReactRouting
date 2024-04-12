
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import { MainHeader } from "./components/MainHeader";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/service">Our Services</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<MainHeader/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='*' element={<NotFoundPage/>} />
          </Route>
        </Routes>
      </div>
  )
}

export default App
