function TrendingItem( {coin} ) {

  return (
    <div
      key={coin.id}
      className="rounded-2xl bg-gray div-container flex justify-between p-4 hover:scale-95 ease-in duration-200"
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex justify-between ">
          <img
            className="mr-4 rounded-full"
            src={coin.item.small}
            alt="image"
          />
          <div>
            <p>{coin.item.name}</p>
            <p>{coin.item.symbol}</p>
          </div>
        </div>
        <div className="flex">
          <img
            className="mr-2 w-4 rounded-full"
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            alt="bitcoin"
          />
          <p>{coin.item.price_btc?.toFixed(7)}</p>
        </div>
      </div>
    </div>
  );
}
export default TrendingItem;
