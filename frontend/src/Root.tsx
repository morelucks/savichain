import HomePage from "./pages/HomePage"
import Footer from "./components/components/Footer"
import NavBar from "./components/components/NavBar"
import { Outlet } from "react-router-dom"
const RootPage = () => {
  return (
    <div className="">
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootPage
