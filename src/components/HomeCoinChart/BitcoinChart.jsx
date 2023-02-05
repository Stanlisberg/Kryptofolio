import React, { useContext, useEffect } from "react";
import KryptofolioContext from "../Context/KryptofolioContext";
import BitcoinChartItem from "./BitcoinChartItem";

function BitcoinChart() {
  const { homeCoins, getCoins } = useContext(KryptofolioContext);

  useEffect(() => {
    getCoins();
  }, []);
 
  return (
    <>
     <div className='bit-div grid lg:grid-cols-3 mx-auto gap-4 px-4'>
      {homeCoins &&
        homeCoins.length > 0 &&
        homeCoins.map((coin, index) => (
          <BitcoinChartItem coin={coin} key={index}/>
        ))}
      </div>
    </>
  );
}
export default BitcoinChart;
