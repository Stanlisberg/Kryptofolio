import React, { useState, useContext } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

function MarketItem({ coin }) {
  const { user } = useContext(AuthContext);
  const [savedCoin, setSavedCoin] = useState(false);

  const coinLocation = doc(db, "users", `${user?.email}`);

  // Update firestore watchlist
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinLocation, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert("please sign in to save a coin to your watch list!");
    }
  };

  return (
    <>
      <tr className="tr-container h-[800px] border-b overflow-scroll px-1 mx-1">
        <td className="cursor-pointer" onClick={saveCoin}>
          {savedCoin ? <AiFillStar color="yellowgreen" /> : <AiOutlineStar />}
        </td>
        <td>{coin.market_cap_rank}</td>
        <td className="">
          <Link to={`/coin/${coin.id}`}>
            <div className=" md:flex md:items-center hover:scale-90 ease-in-out duration-300 cursor-pointer">
              <img
                className="mr-2 w-7 rounded-full"
                src={coin.image}
                alt={coin.id}
              />
              <p className="text-start">{coin.name}</p>
            </div>
          </Link>
        </td>
        <td className="hidden md:table-cell">{coin.symbol.toUpperCase()}</td>
        <td>${coin.current_price.toLocaleString()}</td>
        <td>
          {coin.price_change_percentage_24h > 0 ? (
            <p className="text-green-600">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="text-red-600">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
        </td>
        <td className="hidden md:table-cell">
          ${coin.total_volume.toLocaleString()}
        </td>
        <td className="">${coin.market_cap.toLocaleString()}</td>
        <td>
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine color="green" />
          </Sparklines>
        </td>
      </tr>
    </>
  );
}
export default MarketItem;
