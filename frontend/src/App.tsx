import RootPage from './Root'
import './App.css'
import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootPage/>}>
         
      </Route>
    )
)

  return (
    <RouterProvider router={router}/>
  )
}

export default App
