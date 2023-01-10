import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

function SavedCoin () {
    const [ coin, setCoin] = useState([])

    return(
     <div>
        {coin?.length === 0 ? (
            <p>You dont have any coins saved. Please save a coin to add to your Watch List
              <Link to='/Market' className='click'> click here</Link> to search coins
            </p>
        ) : (
            <table className='w-full border-collapse text-center'>
               <thead>
                  <tr className='border-b'>
                     <th className='px-4'>Rank #</th>
                     <th className='text-left'>Coins</th>
                     <th className='text-left'>Remove</th>
                  </tr>
               </thead>
               <tbody>
                 {coin.map(coin => (
                   <tr key={coin.id} className='h-[60px] overflow-hidden'>
                     <td>{coin?.rank}</td>
                     <td>
                        <Link to={`/coin/${coin.id}`}>
                            <div className='flex items-center'>
                                <img src={coin?.image} alt='/' />
                                <div>
                                    <p className='hidden sm:table-cell'>{coin?.name}</p>
                                    <p className='text-gray-500 text-left text-sm'>{coin?.symbol.toUppercase()}</p>
                                </div>
                            </div>
                        </Link>
                     </td>
                     <td className='pl-8'>
                        <FaTimes className='cursor-pointer'/>
                    </td>
                   </tr>
                 ))}
               </tbody>
            </table>
        )}
        </div>

    )
}

export default SavedCoin;