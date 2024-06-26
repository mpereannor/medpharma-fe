import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "../../@/components/ui/sheet"
import {Button} from "../../@/components/ui/button"
import { Menu as MenuIcon } from "lucide-react"

const mobileItemsAuth = ["Home", "Profile", "Consultation"]
const MobileNav = ({
  isAuthenticated,
  handleSignUp,
  handleLogin,
  handleLogout,
}: any) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="flex flex-col items-start">
          {!isAuthenticated && (
            <>
              <Button
                variant="link"
                onClick={() => {
                  handleSignUp()
                  setOpen(false)
                }}
              >
                SignUp
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  handleLogin()
                  setOpen(false)
                }}
              >
                Login
              </Button>
            </>
          )}
          {isAuthenticated && (
            <>
              {mobileItemsAuth.map((item) => (
                <Button
                  key={item}
                  variant="link"
                  onClick={() => {
                    setOpen(false)
                  }}
                >
                  {item}
                </Button>
              ))}
              <Button onClick={handleLogout}>Logout</Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
