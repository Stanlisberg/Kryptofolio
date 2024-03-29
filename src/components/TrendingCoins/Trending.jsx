import KryptofolioContext from "../Context/KryptofolioContext";
import { useContext, useEffect } from "react";
import TrendingItem from "./TrendingItem";

function Trending() {
  const { fetchTrending, trending } = useContext(KryptofolioContext);

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="trend-container my-10 mb-10 py-4  pb-10 mx-4 xl:mx-auto rounded-lg ">
      <h1 className=" py-4 pl-4 ml-1"
           style={{
              fontSize: "30px", 
              color: "#64ffda" 
           }}
      >
         Trending Coins. 
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-70 px-4 ">
        {trending &&
          trending.length > 0 &&
          trending.map((coin, index) => 
          <TrendingItem coin={coin}  key={index}/>
          )}
      </div>
    </div>
  );
}
export default Trending;
