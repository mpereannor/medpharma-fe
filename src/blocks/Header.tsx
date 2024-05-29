import { useAuth0 } from "@auth0/auth0-react"
import MobileNav from "./MobileNav"
import MainNav from "./MainNav"

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    })
  }

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    })
  }

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    })
  }
  return (
    <header className="w-full ">
      <div className="flex h-14 items-center px-4">
        <MobileNav
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
        />
        <MainNav
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
          handleLogin={handleLogin}
          handleSignUp={handleSignUp}
        />
      </div>
    </header>
  )
}

export default Header
