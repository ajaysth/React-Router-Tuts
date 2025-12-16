import { Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import ProfileRoute from "./routes/ProfileRoute"
import UserRoute from "./routes/UserRoute"
import UserDetails from "./pages/UserDetails"
import Users from './pages/Users';
import Books from "./pages/Books"
import BookDetails from "./pages/BookDetails"



function App() {

  return (
    <>
      <div className="nav bg-amber-500 flex justify-center h-12 items-center">
        <ul className="w-full flex justify-evenly">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><Link to="/profiles/new">New Profile</Link></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li><NavLink to="/books">Books</NavLink></li>
        </ul>
      </div>



      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profiles/*" element={<ProfileRoute />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<BookDetails />}/>

        <Route path="/users/*" element={<UserRoute />}>
          <Route index element={<Users />} />
          <Route path=":id" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
