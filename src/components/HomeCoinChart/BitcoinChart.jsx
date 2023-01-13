import React, { useContext, useEffect } from "react";
import KryptofolioContext from "../Context/KryptofolioContext";
import BitcoinChartItem from "./BitcoinChartItem";

function BitcoinChart() {
  const { coinData, getCoins } = useContext(KryptofolioContext);

  useEffect(() => {
    getCoins();
  }, []);
 
  return (
    <>
     <div className='bit-div grid lg:grid-cols-3 mx-auto gap-4 px-4'>
      {coinData &&
        coinData.length > 0 &&
        coinData.map((coin, index) => (
          <BitcoinChartItem coin={coin} key={index}/>
        ))}
      </div>
    </>
  );
}
export default BitcoinChart;
