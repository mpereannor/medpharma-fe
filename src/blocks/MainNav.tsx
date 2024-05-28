

const MainNav = ({
  isAuthenticated,
  handleSignUp,
  handleLogin,
  handleLogout,
}: any) => {
  return (
    <div className="className=mr-4 hidden gap-4 md:flex p-2  ">
      {!isAuthenticated && (
        <>
          <a
            onClick={handleLogin}
            className="text-sm font-medium text-muted-foreground"
          >
            Login
          </a>
          <a
            onClick={handleSignUp}
            className="text-sm font-medium text-muted-foreground"
          >
            Sign Up
          </a>
        </>
      )}
      {isAuthenticated && (
        <>
          <a href="/" className="text-sm font-medium text-muted-foreground">
            Home
          </a>
          <a
            href="/profile"
            className="text-sm font-medium text-muted-foreground"
          >
            Profile
          </a>
          <a
            href="/consultation"
            className="text-sm font-medium text-muted-foreground"
          >
            Consultation
          </a>
          <a
            onClick={handleLogout}
            className="text-sm font-medium text-muted-foreground"
          >
            Logout
          </a>
        </>
      )}
    </div>
  )
}

export default MainNav
