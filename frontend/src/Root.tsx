import HomePage from "./pages/HomePage"
import NavBar from "./components/components/NavBar"
import { Outlet } from "react-router-dom"
const RootPage = () => {
  return (
    <div className="">
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default RootPage
