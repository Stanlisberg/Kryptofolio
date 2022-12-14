import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import SavedCoin from "../AllCoins/SavedCoin";

function Profile() {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutUser = () => { 

    try{
      logOut()
      navigate('/')
    } catch(e){
      console.log(e.message)
    }
     
  }

  console.log(user?.email);

  return (
    <div className="profile-detail max-w-[1000px] mx-auto">
      <div className="flex justify-between items-center my-8 rounded-2xl py-8">
        <div>
          <h1 className="text-2xl font-bold">Account :</h1>
        </div>
        <div>
          <button
            onClick={ logOutUser }
            className="profile-sign px-2 py-1 shadow-lg hover:shadow-2xl hover:bg-slate-600 hover:color font-bold"
          >
            Sign Out
          </button> 

          {/* <div>
            <p>Welcome, <span style={{color:"teal"}}>{user?.email}</span></p>
          </div> */}
          {/* <button
            onClick={ logOutUser }
            className="profile-sign px-2 py-1 shadow-lg hover:shadow-2xl hover:bg-slate-600 hover:color font-bold"
          >
            Sign Out
          </button> */}
           {/* <p>Welcome, <span style={{color:"teal"}}>{user?.email}</span></p> */}
        </div>
          {/* <div>
            <p>Welcome, <span style={{color:"teal"}}>{user?.email}</span></p>
          </div> */}
      </div>
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="w-full min-h-[300px]">
          <h1 className="text-2xl font-bold py-4">WatchList</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  );
}

export default Profile;
