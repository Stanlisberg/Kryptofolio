import { useContext, useEffect, useState } from "react";
import KryptofolioContext from "../Context/KryptofolioContext";
import AllcoinItem from "../AllCoins/AllcoinItem";
import Trending from "../TrendingCoins/Trending";
import ReactPaginate from "react-paginate";
import { Audio, ThreeDots, BallTriangle } from "react-loader-spinner";

function Market() {
  const { fetchAllCoins, allCoins, loading } = useContext(KryptofolioContext);

  const [searchCoins, setSearchCoins] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(allCoins?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(allCoins?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, allCoins]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allCoins?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    fetchAllCoins();
    console.log(allCoins);
  }, []);

  return (
    <>
      <div className="mkt-container rounded-md my-8 mx-auto py-0 px-3 max-w-[1200px]">
        <div className=" text-center pt-5 text-2xl rounded-lg text-zinc-50">
          Cryptocurrency Prices By Market Cap.
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between mt-8 text-start md:mt-4 md:pt-4 md:pb-6  md:text-right">
          <h1 className="mkt-heading text-3xl font-bold my-2 py-2">Market</h1>
          <div>
            <input
              className="mkt-input my-2 shadow-xl rounded-xl px-4 py-2 w-full"
              type="text"
              onChange={(e) => setSearchCoins(e.target.value)}
              placeholder="Search Coins"
            ></input>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-3">All Categories</h1>
        </div>
        <div className="">
          <table className=" text-center border-collapse w-full">
            <thead>
              <tr className="primary-color border-b">
                <th
                  className=""
                  style={{
                    color: "yellowgreen",
                  }}
                >
                  BM
                </th>
                <th className="px-4">#</th>
                <th
                  className="text-start"
                  style={{
                    color: "teal",
                  }}
                >
                  Coins
                </th>
                <th className="hidden md:table-cell">Symbol</th>
                <th>Price</th>
                <th>
                  24h<span className="hidden md:contents"> Price change</span>
                </th>
                <th className="hidden md:table-cell">24h Vol</th>
                <th
                  className=""
                  style={{
                    color: "#2793ff",
                  }}
                >
                  Mkt Cap
                </th>
                <th>
                  <span className="hidden md:contents">Price graph</span> (7
                  Days)
                </th>
              </tr>
            </thead>
            <tbody className="">
              {currentItems &&
                currentItems.length > 0 &&
                currentItems
                  .filter((value) => {
                    if (searchCoins === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchCoins.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((coin) => <AllcoinItem coin={coin} key={coin.id} />)}
            </tbody>
          </table>
        </div>
      </div>
      {loading ? (
        <div className="loading text-center font-bold font- text-green-300">
          Loading...
        </div>
      ) : (
        ""
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page"
        nextLinkClassName="page"
        activeLinkClassName="active"
      />
      <Trending />
    </>
  );
}
export default Market;
