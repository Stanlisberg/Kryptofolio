import React from "react";
import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom'


function MarketItem( { coin } ) {

  return (
     <> 
    <tr className= 'tr-container height-80 border-b overflow-hidden px-1 mx-1'>
      <td>
        <AiOutlineStar />
      </td>
      <td>{coin.market_cap_rank}</td>
      <td className=''>
        <Link to={`/coin/${coin.id}`} >
          <div className=' md:flex md:items-center hover:scale-90 ease-in-out duration-300 cursor-pointer'>
            <img className='mr-2 w-7 rounded-full' src={coin.image} alt={coin.id} />
            <p className='text-start'>{coin.name}</p>
          </div> 
        </Link>
      </td> 
      <td className='hidden md:table-cell'>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td>{coin.price_change_percentage_24h > 0 ? (
           <p className='text-green-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
         ) : (
           <p className='text-red-600'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
         )}
      </td>
      <td className='hidden md:table-cell'>${coin.total_volume.toLocaleString()}</td>
      <td className=''>${coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="green" />
        </Sparklines>
      </td> 
    </tr>
    </>
  ) 
}
 export default MarketItem;