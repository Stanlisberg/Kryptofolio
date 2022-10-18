import KryptofolioContext from "../Context/KryptofolioContext";
import { useContext, useEffect } from "react";
import TrendingItem from "./TrendingItem";

function Trending() {
  const { fetchTrending, trending } = useContext(KryptofolioContext);

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div className="trend-container div-container my-10 mb-28 py-4  ">
      <h1 className=" py-4"
           style={{
              fontSize: "30px", 
              color: "#64ffda" 
           }}
      >
         Trending Coins.
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-70 ">
        {trending &&
          trending.length > 0 &&
          trending.map((coin => 
          <TrendingItem coin={coin} />
          ))}
      </div>
    </div>
  );
}
export default Trending;
