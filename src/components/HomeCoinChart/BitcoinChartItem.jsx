import { Sparklines, SparklinesLine } from 'react-sparklines';

function BitcoinChartItem ( {coin} ) {
    return(
        <div className='cardo mt-5 relative '>
            <div className='ml-14 mt-3 font-bold border-b w-auto sm:w-auto mr-8' style={{color: "#ccd6f6", fontSize: '17px'}}>{coin.name}</div>
            <div className='ml-14' style={{ color: '#8892b0'}}>{coin.symbol.toUpperCase()}</div>
               <div className="mt-15">
                 {
                   <Sparklines data={coin.sparkline_in_7d.price}>
                      <SparklinesLine color='yellow' />
                   </Sparklines>
                  }
                </div>
              <div className='m-4'>
                <span className='font-bold' style={{color:"#ccd6f6" }}>${coin.current_price.toLocaleString()}</span>
                <span className='block text-gray-500 text-sm' style={{color: '#1ada63'}}>{coin.price_change_percentage_24h.toFixed(2)}%</span>
              </div>
              <div className= ''>
                <img  src={coin.image} className=' ml-1 w-12 p-2 mt-2 absolute top-0' />
              </div>
          </div>
    )
}
export default BitcoinChartItem;