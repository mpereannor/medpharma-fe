import "./App.css"
import { useAuth0 } from "@auth0/auth0-react"
import { Route, Routes } from "react-router"
import MainPage from "./pages/MainPage"
import ProfilePage from "./pages/ProfilePage"
import ConsultationPage from "./pages/ConsultationPage"

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <div>Med Pharma Loading...</div>
  }
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/consultation" element={<ConsultationPage />} />
      <Route path="/consultation/:id" element={<ConsultationPage />} />

    </Routes>
  )
}

export default App
