import { Link } from 'react-router-dom'
import { AiOutLineClose } from 'react-icon/ai'

function SavedCoin () {
    const [ coins, setCoins] = useState()

    return(
     <div>
        {coins.length === 0 ? (
            <p>You dont have any coins saaved. Please save a coin to add to your Watch List
             <Link to='/Market'>Click here to search coins</Link>
            </p>
        ) : (
            <table>
               <thead>
                  <tr>
                     <th>Rank #</th>
                     <th>Coins</th>
                     <th>Remove</th>
                  </tr>
               </thead>
               <tbody>
                 {coins.map(coin => (
                   <tr key={coin.id}>
                     <td>{coin?.rank}</td>
                     <td>
                        <Link to={`/coin/${coin.id}`}>
                            <div>
                                <img src={coin?.image} alt='/' />
                                <div>
                                    <p>{coin?.name}</p>
                                    <p>{coin?.symbol.toUppercase()}</p>
                                </div>
                            </div>
                        </Link>
                     </td>
                     <td>
                        <AiOutLineClose className='cursor-pointer/>
                    </td>
                   </tr>
                 )))}
               </tbody>
            </table>
        )}
        </div>

    )
}

export default SavedCoin;