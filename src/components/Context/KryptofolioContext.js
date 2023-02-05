import { createContext, useReducer, useState } from "react";
import kryptofolioReducer from "./KryptofolioReducer";

const KryptofolioContext = createContext();

export const KryptofolioProvider = ({ children }) => {
  const [trending, setTrending] = useState();
  const [searchData, setSearchData] = useState({});
  const [coinInfoData, setCoinInfoData] = useState();
  const [marketCoins, setMarketCoins] = useState();
  const [homeCoins, setHomeCoins] = useState()
  const [loading, setLoading] = useState(true);

  // initialising reducer
  const initialState = {
    coinData: {}, 
    allCoins: [],
  };

  const [state, dispatch] = useReducer(kryptofolioReducer, initialState);

  //......Api to display chart in home
  const getCoins = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_KRYPTOFOLIO_URL}/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=true`
    );
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setHomeCoins(data);

    // dispatch({
    //   type: "GET_COINS",
    //   payload: data,
    // });
  };

  // .....Api to fetch all coins in market......
  const fetchAllCoins = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_KRYPTOFOLIO_URL}/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=true`
    );
    const data = await response.json();
    console.log(data);
    
      setLoading(false);
      setMarketCoins(data);

      // dispatch({
      //   type: "FETCH_COINS",
      //   payload: data,
      // });
  };

  //.....Api to Fetch Trending Coins 
  const fetchTrending = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_KRYPTOFOLIO_URL}/v3/search/trending`
    );
    const data = await response.json();

    setTrending(data.coins);
    console.log(data.coins);
  };

  //....Api to Fetch searched Coins
  const fetchSearch = async (text) => {
    const params  = new URLSearchParams({
      q: text,
    })
    const response = await fetch(
       `${process.env.REACT_APP_KRYPTOFOLIO_URL}/v3/search?${params}`
    );
    const data = await response.json();
    setSearchData(data.coins);
    console.log(data.coins);
  }

  //..........Api For Fetching Coin Info
  //..........fetch [site url] from coinInfo page
  const fetchCoinInfoData = async (site) => {
    const response = await fetch(site)
    const data = await response.json();

    setCoinInfoData(data);
    console.log(data);
  }

  return ( 
    <KryptofolioContext.Provider
      value={{
        //..Reducers..//
        coinData: state.coinData,
        allCoins: state.allCoins,
        //..State..//
        trending,
        searchData,
        coinInfoData,
        loading,
        marketCoins,
        homeCoins,
        //..Functions..//
        fetchAllCoins,
        getCoins,
        fetchTrending,
        fetchSearch,
        fetchCoinInfoData,
      }}
    >
      {children}
    </KryptofolioContext.Provider>
  );
};
export default KryptofolioContext;
