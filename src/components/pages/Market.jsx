import { useContext, useEffect, useState } from "react";
import KryptofolioContext from "../Context/KryptofolioContext";
import AllcoinItem from "../AllCoins/AllcoinItem";
import Trending from "../TrendingCoins/Trending";
import ReactPaginate from "react-paginate";
import { Audio, ThreeDots, BallTriangle } from "react-loader-spinner";

function Market() {
  const { fetchAllCoins, loading, marketCoins } = useContext(KryptofolioContext);

  const [searchCoins, setSearchCoins] = useState("");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(marketCoins?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(marketCoins?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, marketCoins]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % marketCoins?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    fetchAllCoins();

    console.log(marketCoins);
  }, []);

  return (
    <>
     <div className=' text-center mt-24 text-2xl font-bold'>Market Analysis...</div>
      <div className="rounded-md mx-4 xl:mx-auto mt-8 py-0 px-3 max-w-[1200px] bg-[#15273a]">
        <div className="flex flex-col-reverse md:flex-row justify-between mt-3 text-start pt-8 md:mt-2 md:pt-4 md:pb-6  md:text-right">
          <h1 className="mkt-heading text-3xl text-blue-300 font-bold my-2 py-2 ml-2">Market</h1>
          <div className='mx-2'>
            <input
              className="mkt-input my-2 shadow-xl rounded-xl px-4 py-2 w-full"
              type="text"
              onChange={(e) => setSearchCoins(e.target.value)}
              placeholder="Search Coins"
            ></input>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-3 ml-2">All Categories</h1>
        </div> 
        <div className="overflow-x-auto mx-2">
          <table className=" border-collapse w-full text-center">
            <thead className=" text-center">
              <tr className="primary-color border-b ">
                <th
                  className="text-[#9acd32]"
                >
                  BM
                </th>
                <th className="px-4">#</th>
                <th
                  className="text-start"
                  style={{
                    // color: "teal",
                  }}
                >
                  Coins
                </th>
                <th className="hidden md:table-cell">Symbol</th>
                <th className=''>Price</th>
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
                  <span className="hidden md:contents">Price graph</span> SparkLine
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
        <div className="loading text-center font-bold font- mt-4 text-green-300">
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
