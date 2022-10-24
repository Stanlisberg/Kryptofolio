import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/layouts/Navbar'
import SignIn from "./components/pages/SignIn"
import SignUp from "./components/pages/SignUp"

function AppendSigninAndSignup() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} /> 
        </Routes>
    </Router>
    </>
  )
}

export default AppendSigninAndSignup