import RootPage from "./Root";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "./components/components/SignUp";
import HomePage from "./pages/HomePage";
import WaitList from "./components/components/WaitList";
import JoinGroup from "./components/components/JoinGroup";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route index element={<HomePage />} />
        <Route path="createAccount" element={<SignUp />} />
        <Route path="createWaitlist" element={<WaitList />} />
        <Route path="joingroup" element={<JoinGroup />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
