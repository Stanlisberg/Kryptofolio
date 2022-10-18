import KryptofolioContext from "../Context/KryptofolioContext";
import { useEffect, useContext } from "react";
import CoinInfoItem from "./CoinInfoItem";
import {useParams} from 'react-router-dom'

function CoinInfo() {
  const url = useParams()

  const site =  `https://api.coingecko.com/api/v3/coins/${url.coinId}?localization=false&sparkline=true`
  const { fetchCoinInfoData, coinInfoData } = useContext(KryptofolioContext);
  useEffect(() => {
    fetchCoinInfoData(site);
  }, []);

  return (                              
    <div className="">
      <CoinInfoItem coinInfoData={coinInfoData} />
    </div>
  );
}
export default CoinInfo;
