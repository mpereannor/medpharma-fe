import { useAuth0 } from "@auth0/auth0-react"
import { useEffect } from "react"
import { Dashboard } from "../blocks/Dashboard"
import Header from "../blocks/Header"

const MainPage: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (isAuthenticated && user) {
      saveUserToDb(user)
    }
  }, [isAuthenticated, user])

  const saveUserToDb = async (user: any) => {
    let token = await getAccessTokenSilently()
    localStorage.setItem('token', token)
    localStorage.setItem('userId', user.sub)
    const res = await fetch(`${import.meta.env.VITE_REST_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: user.sub,
        username: user.nickname,
        email: user.email,
      }),
    })

    if (!res.ok) {
      console.error("Failed to save user to database")
    }
    const data = await res.json()
    return data
  }

  return (
    <>
      <Header />
      <Dashboard />
    </>
  )
}

export default MainPage
