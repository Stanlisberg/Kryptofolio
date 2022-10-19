import React from "react";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import BitcoinChart from "../HomeCoinChart/BitcoinChart";
import KryptofolioContext from "../Context/KryptofolioContext";
// import HomeImage from "../image/HomeImage";
const LazyAbout = React.lazy(() => import("../image/HomeImage"));

function Home() {
  const { searchData, fetchSearch, loading } = useContext(KryptofolioContext);
  const grabSearch = useRef();
  const [signIn, setSignIn] = useState(true);
  const [signUp, setSignUp] = useState(true);

  return (
    <>
      <section className="input-container">
        {/* <div className="input-wrapper mt-100 ">
          <h1 className='input-head'></h1>
          <div className="input-box">
            <table className="table-container">
              <thead>
                <tr>
                  <td className="table-data">
                    <i className="search-icon fa-solid fa-magnifying-glass "></i>
                  </td>
                  <td>
                    <input
                      ref={grabSearch}
                      onChange={() => fetchSearch(grabSearch.current.value)}
                      type="text"
                      placeholder="Search Coins"
                      className="input-search"
                    />
                  </td>  
                </tr>
              </thead>
            </table>
          </div>
        </div> */}
        {/* {searchData &&
          searchData.length > 0 &&
          searchData.map((value) => {
            if (grabSearch.length < 1) {
              return "";
            } else if (
              value.id
                .toLowerCase()
                .includes(grabSearch.current.value.toLowerCase())
            ) {
              return (
                <div className="font-xs absolute top-28 right-4 z-10 bg-gray-700 h-auto max-h-60 w-2/3 overflow-y-scroll p-2 rounded-lg sm:w-1/2 lg:w-1/3 lg:right-10">
                  <div className="flex flex-row-reverse justify-between items-center my-2 border border-transparent border-b-gray-100 border-opacity-50 py-2">
                    <p>{value?.name}</p>
                    <img src={value?.thumb} alt={value?.id} />
                  </div>
                </div>
              );
            }
          })} */}
          {/* <div className="name pt-3 grid items-center justify-center h-screen ease-in duration-300">
          <div className=" contents md:hidden ">
            <Link to="/" className="primary-color link pl-5 ">
              Home
            </Link>
            <Link to="/About" className="primary-color link pl-5 ">
              About
            </Link>
            <Link to="/Contact" className="primary-color link pl-5 ">
              Contact
            </Link>
            <Link to="/Market" className="primary-color link-market pb-2 pl-5 ">
              Coin-Market
            </Link>
          </div>
          </div> */}
        <div className="flex justify-end mr-4 mt-3">
          <button className={signIn ? "sign-in" : "sign-up"}>Sign In</button>
          <button className={signUp ? "sign-up" : "sign-in"}>Sign Up</button>
        </div>
        <div className="overview-container grid lg:grid-cols-2 lg:gap-x-16 lg:mt-10 overflow-hidden">
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
            {/* <HomeImage /> */}
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          </div>
        </div>
      </section>
      <div className="top-container text-start pl-5 xl:px-12 lg:pt-10 lg:py-50">
        <div className="top-element">Top coins.</div>
        <div className="mkt-element">Market Cap sparkline chart.</div>
      </div>
      {loading && (
        <div className="loading text-center font-bold">Loading...</div>
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
