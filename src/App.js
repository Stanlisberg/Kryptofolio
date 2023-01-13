import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home";
import Market from "./components/pages/Market";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import CoinInfo from "./components/CoinDesc/CoinInfo";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Profile from "./components/pages/Profile";
import ForgetPassword from "./components/pages/ForgetPassword";
import { KryptofolioProvider } from "./components/Context/KryptofolioContext";
import { AuthProvider } from "./components/Context/AuthContext";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./components/layouts/Footer";
import Icons from "./components/layouts/icons";

function App() {
  return (
    <>
      <KryptofolioProvider>
          <Router>
          <AuthProvider>
          <div className="app">
            {/* with the Router component, we are enabling the react routing mechanism */}
            {/* <Router> */}
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Market" element={<Market />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Forget-password" element={<ForgetPassword />} />
                <Route path="/coin/:coinId" element={<CoinInfo />}>
                  <Route path=":coinId" />
                </Route>
              </Routes>
            {/* </Router> */}

            <div className="footer-div  flex flex-col items-center">
              <Icons />
              <Footer />
              <div className="gecko footer md:mt-3 md:contents hidden border font-mono">
                Powered by Coingecko.
              </div>
            </div>
          </div>
           </AuthProvider>
          </Router>
      </KryptofolioProvider>
      <ToastContainer />
    </>
  );
}

export default App;
