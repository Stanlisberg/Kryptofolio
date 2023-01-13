import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import BitcoinChart from "../HomeCoinChart/BitcoinChart";
import KryptofolioContext from "../Context/KryptofolioContext";
import AuthContext from "../Context/AuthContext";
import HomeImage from "../image/HomeImage";
// const LazyAbout = React.lazy(() => import("../image/HomeImage"));

function Home() {
  const { searchData, fetchSearch, loading } = useContext(KryptofolioContext);
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(true);
  const [over, setOver] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const logOutProfile = () => {
    logOut();
  };

  return (
    <>
      <section className="input-container">
        {user?.email ? (
          <div className="flex justify-end mr-4 mt-3">
            <Link to="/Profile">
              <button
                className="profile"
                onMouseOver={() => setOver(true)}
                onMouseLeave={() => setOver(false)}
              >
                Profile
                <span className="ml-1">
                  <FaUser
                    size="14"
                    // color="#64ffda"
                    color='teal'
                    style={over ? { color: "#1f2937" } : ""}
                  />
                </span>
              </button>
            </Link>
            <button
              onClick={logOutProfile}
              className={signUp ? "sign-out" : "sign-up"}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex justify-end mr-4 mt-3">
            <Link to="sign-in">
              <button className={signIn ? "sign-up" : "sign-in"}>
                Sign In
              </button>
            </Link>
            <Link to="sign-up">
              <button className={signUp ? "sign-in" : "sign-up"}>
                Sign Up
              </button>
            </Link>
          </div>
        )}
        {/* <div className="overview-container grid lg:grid-cols-2 lg:gap-x-16 lg:mt-10 overflow-hidden"> */}
        <div className='flex overview-container'>
          <div className="overview-trans text-center mx-auto w-full lg:text-start overflow-hidden">
            <h1 className="overview-heading mx-auto overflow-x-hidden mt-10 lg:mt-0">
              Overview
            </h1>
            <p className="mt-3 text-center md:text-justify">
              A swift crypocurrency platform that to provides users a seemingly
              smooth user experience when it comes to seeking for information
              about any type of digital currency in the crypto ecosystem.
            </p>
            <div className="visit mx-auto lg:mx-0">
              <Link to="/Market">Visit Market</Link>
            </div>
          </div>
          <div className="lg:relative mt-10 lg:mt-0">
            <HomeImage />
            {/* <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense> */}
          </div>
        </div>
      </section>
      <div className="top-container text-start pl-5 xl:px-12 lg:pt-10 lg:py-50">
        <div className="top-element">Top coins.</div>
        <div className="mkt-element">Market Cap sparkline chart.</div>
      </div>
      {loading && (
        <div className="loading text-center font-bold pt-5">Loading...</div>
      )}
      <BitcoinChart />

      <div className="line-break mx-7 lg:ml-16"></div>
      <div className="logo-container bg-gray mx-12 my-12">
        <div className="text-center pt-4">
          <p className="font-mono">
            {" "}
            We are partnering with the best platform in the crypto ecosystem.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="mx-5">
            <img src="logos/chain.svg" width="120" />
          </div>
          <div className="mx-5">
            <img src="logos/bitbucket.svg" width="120" height="10" />
          </div>
          <div className="mx-5">
            <img src="logos/crypto.svg" width="120" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
