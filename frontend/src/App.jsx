import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import './index.css'
import{ Signup } from "./Pages/Signup.tsx"
import{ Signin } from "./Pages/Signin";


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
