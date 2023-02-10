import { SparklinesLine, Sparklines } from "react-sparklines";
import DOMpurify from "dompurify";
import { Link } from "react-router-dom";

function CoinInfoItem({ coinInfoData }) {
  return (
    <>
      <div className="flex flex-col-reverse lg:justify-between">
        <div className="info-head my-5 h-40 relative mt-10">
          <img
            className="ml-1 p-2 mt-2 absolute top-0"
            src={coinInfoData?.image?.large}
            width="90"
            alt="image"
          />
          <div className="ml-32 mt-5">
            <p className="mr-4 font-bold">{coinInfoData?.name}</p>
            <p className="mt-1">({coinInfoData?.symbol?.toUpperCase()}/USD)</p>
          </div>
          <div className="coin-url text-center mt-10 hover:scale-90 ease-in-out duration-300 cursor-pointer">
            <a href={coinInfoData?.links?.homepage[0]}>
              www.{coinInfoData?.symbol}.org
            </a>
          </div>
        </div>

        <Link to="/Market">
          <div className="go-back py-3 cursor-pointer hover:scale-90 ease-in-out duration-300">
            Go Back
          </div>
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 my-8">
        <div className="info-card py-2 mr-5 ml-10 lg:mr-1">
          <div className="ml-4 flex justify-between mt-5 w-auto border-b">
            <div>
              <p>{coinInfoData?.symbol?.toUpperCase()}</p>
              {coinInfoData?.market_data?.current_price ? (
                <p className="mkt-coin-price">
                  ${coinInfoData.market_data.current_price.usd.toLocaleString()}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-1">
              <p className="mr-4 font-bold">Last 7 days</p>
              <p className="mt-1 font-bold">Chart</p>
            </div>
          </div>
          <div className="mt-14">
            <Sparklines data={coinInfoData?.market_data?.sparkline_7d?.price}>
              <SparklinesLine color="chocolate" />
            </Sparklines>
          </div>
          <div className="ml-4 flex justify-between pt-3">
            <div className="mt-4">
              <p>Market Cap</p>
              <div className="font-bold text-center">
                ${coinInfoData?.market_data?.market_cap?.usd?.toLocaleString()}
              </div>
            </div>
            <div className="mt-4 mr-4">
              <p className="">Volume</p>
              <div className="font-bold text-center">
                ${coinInfoData?.market_data?.total_volume?.usd.toLocaleString()}
              </div>
            </div>
          </div>
          <div className="ml-4 flex justify-between pt-5">
            <div className="">
              <p>24h high</p>
              <div className="font-bold">
                ${coinInfoData?.market_data?.high_24h?.usd.toLocaleString()}
              </div>
            </div>
            <div className="mr-[48px]">
              <p className="">24h low</p>
              <div className=" font-bold">
                ${coinInfoData?.market_data?.low_24h?.usd.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
        <div className="info-card py-2 pl-5 mt-4 lg:mt-0 text-start lg:mr-6 mr-5">
          <div className="my-10">
            <p className="mkt-stats table-row-color border-b ">Market Stats</p>
            <div className="grid grid-cols-3 my-3 py-3">
              <div>
                <p><span className='hidden md:contents'>Market </span> Rank</p>
                <p className="font-bold">{coinInfoData?.market_cap_rank}</p>
              </div>
              <div>
                <p>Hashing <span className='hidden md:contents'>Algorithm</span></p>
                <p className="font-bold">
                  {coinInfoData?.hashing_algorithm ? (
                    <p>{coinInfoData?.hashing_algorithm}</p>
                  ) : (
                    <p>No Data</p>
                  )}
                </p>
              </div>
              <div className="mr-16">
                <p>Liquidity <span className='hidden md:contents'>Scores</span></p>
                <p className="font-bold">{coinInfoData?.liquidity_score}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 my-5 py-5">
            <div>
              <p>Price <span className='hidden md:contents'>Change</span> (24h)</p>
              <p className="font-bold">
                {coinInfoData?.market_data?.price_change_percentage_24h > 0 ? (
                  <p className="text-green-600">
                    {coinInfoData?.market_data?.price_change_percentage_24h?.toFixed(
                      2
                    )}
                    %
                  </p>
                ) : (
                  <p className="text-red-600">
                    {coinInfoData?.market_data?.price_change_percentage_24h?.toFixed(
                      2
                    )}
                    %
                  </p>
                )}
              </p>
            </div>
            <div>
              <p>Price <span className='hidden md:contents'>Change</span> (7d)</p>
              <p className="font-bold">
                {coinInfoData?.market_data?.price_change_percentage_7d > 0 ? (
                  <p className="text-green-600">
                    {coinInfoData?.market_data?.price_change_percentage_7d?.toFixed(
                      2
                    )}
                    %
                  </p>
                ) : (
                  <p className="text-red-600">
                    {coinInfoData?.market_data?.price_change_percentage_7d?.toFixed(
                      2
                    )}
                    %
                  </p>
                )}
              </p>
            </div>
            <div>
              <p>Price <span className='hidden md:contents'>Change</span> (14d)</p>
              <p className="font-bold">
                {coinInfoData?.market_data?.price_change_percentage_14d > 0 ? (
                  <p className="text-green-600">
                    {coinInfoData?.market_data?.price_change_percentage_14d?.toFixed(
                      2
                    )}
                    %
                  </p>
                ) : (
                  <p className="text-red-600">
                    {coinInfoData?.market_data?.price_change_percentage_14d?.toFixed(
                      2
                    )}
                    %
                  </p>
                )}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 my-5 py-5">
            <div>
              <p>Price <span className='hidden md:contents'>Change</span> (30d)</p>
              <p className="font-bold">
                {coinInfoData?.market_data?.price_change_percentage_30d > 0 ? (
                  <p className="text-green-600">
                    {coinInfoData?.market_data?.price_change_percentage_30d?.toFixed(
                      2
                    )}
                    %
                  </p>
                ) : (
                  <p className="text-red-600">
                    {coinInfoData?.market_data?.price_change_percentage_30d?.toFixed(
                      2
                    )}
                    %
                  </p>
                )}
              </p>
            </div>
            <div>
              <p>Price <span className='hidden md:contents'>Change</span> (60d)</p>
              <p className="font-bold">
                {coinInfoData?.market_data?.price_change_percentage_60d > 0 ? (
                  <p className="text-green-600">
                    {coinInfoData?.market_data?.price_change_percentage_60d?.toFixed(
                      2
                    )}
                    %
                  </p>
                ) : (
                  <p className="text-red-600">
                    {coinInfoData?.market_data?.price_change_percentage_60d?.toFixed(
                      2
                    )}
                    %
                  </p>
                )}
              </p>
            </div>
            <div>
              <p>Price<span className='hidden md:contents'>Change</span> (1yr)</p>
              <p className="font-bold">
                {coinInfoData?.market_data?.price_change_percentage_1y > 0 ? (
                  <p className="text-green-600">
                    {coinInfoData?.market_data?.price_change_percentage_1y?.toFixed(
                      2
                    )}
                    %
                  </p>
                ) : (
                  <p className="text-red-600">
                    {coinInfoData?.market_data?.price_change_percentage_1y?.toFixed(
                      2
                    )}
                    %
                  </p>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-coin my-15 mb-28">
        <div className="font-medium text-2xl mt-5">
          About <span className="about-coin-color">{coinInfoData?.name}</span>
        </div>
        <p
          className="text-justify mt-5"
          dangerouslySetInnerHTML={{
            __html: DOMpurify.sanitize(coinInfoData?.description?.en),
          }}
        ></p>
      </div>
    </>
  );
}
export default CoinInfoItem;
