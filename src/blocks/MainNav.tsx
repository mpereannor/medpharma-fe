import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

interface MainNavProps {
  isAuthenticated: boolean
  handleSignUp: () => void
  handleLogin: () => void
  handleLogout: () => void
}

const MainNav: React.FC<MainNavProps> = ({
  isAuthenticated,
  handleSignUp,
  handleLogin,
  handleLogout,
}) => {
  return (
    <div className="mr-4  gap-2 md:hidden">
      {!isAuthenticated ? (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="#" onClick={handleLogin}>
                Login
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="#" onClick={handleSignUp}>
                Sign Up
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ) : (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/profile">Profile</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/consultation">Consultation</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </div>
  )
}

export default MainNav
