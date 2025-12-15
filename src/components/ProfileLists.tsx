import { Link, Outlet } from 'react-router-dom'

const ProfileLists = () => {
  return (
    <>
          <ul className='text-3xl border rounded-2xl'>
              <li><Link to="/profiles/1">Profile 1</Link></li>
              <li><Link to="/profiles/2">Profile 2</Link></li>
              <li><Link to="/profiles/3">Profile 3</Link></li>
          </ul>
          <Outlet />
    </>
  )
}

export default ProfileLists