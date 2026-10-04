import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import './index.css'
import{ Signup } from "./Pages/Signup.tsx"
import{ Signin } from "./Pages/Signin";
import { Dashboard } from "./Pages/Dashboard.tsx";
import { SendMoney } from "./Pages/SendMoney.tsx";


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
         <Route path="/sendmoney" element={<SendMoney />}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
