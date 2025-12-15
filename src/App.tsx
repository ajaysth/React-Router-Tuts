import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Profiles from "./pages/Profiles"
import ProfileDetails from "./pages/ProfileDetails"
import NewProfile from "./pages/NewProfile"
import NotFound from "./pages/NotFound"


function App() {

  return (
    <>
      <div className="nav bg-amber-500 flex justify-center h-12 items-center">
        <ul className="w-full flex justify-evenly">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="/profiles/new">New Profile</Link></li>
        </ul>
      </div>



      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/profiles/:id" element={<ProfileDetails />} />
        <Route path="/profiles/new" element={<NewProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
