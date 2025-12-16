import { Route, Routes } from 'react-router-dom'
import ProfileDetails from '../pages/ProfileDetails'
import ProfileLists from '../components/ProfileLists'
import Profiles from '../pages/Profiles'
import NewProfile from '../pages/NewProfile'

const ProfileRoute = () => {
  return (
    <>
    <ProfileLists/>
    <Routes>
          <Route index element={<Profiles />} />
          <Route path=":id" element={<ProfileDetails />} />
          <Route path="/new" element={<NewProfile />} />
    </Routes>
    </>
  )
}

export default ProfileRoute