import { useParams } from "react-router-dom"

interface ProfileParams extends Record<string, string | undefined> {
    id: string;
}

const ProfileDetails = () => {
    const { id } = useParams<ProfileParams>();
    return (
        <>
            <div>ProfileDetails</div>
            <h1>Profile ID: {id}</h1>
        </>)}

export default ProfileDetails