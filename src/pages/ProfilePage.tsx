import { useAuth0 } from "@auth0/auth0-react"
import React from "react"

const ProfilePage: React.FC = () => {
  const { user } = useAuth0()
  if (!user) {
    return null
  }
  return (
    <>
      <div className="min-h-80 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full md:w-2/3 lg:w-1/2">
          <p className="text-lg font-semibold">Welcome {user.nickname}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
