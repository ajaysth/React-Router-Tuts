import { Link } from "react-router-dom"


const Profiles = () => {
  return (
    <>
      <h1>Profiles</h1>
      <ul>
        <li><Link to="/profiles/1">Profile 1</Link></li>
        <li><Link to="/profiles/2">Profile 2</Link></li>
        <li><Link to="/profiles/3">Profile 3</Link></li>
      </ul>
    </>
  )
}

export default Profiles