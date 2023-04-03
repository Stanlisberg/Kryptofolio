import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import SavedCoin from "../AllCoins/SavedCoin";
import { auth } from '../../firebase'

function Profile() {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

// check if user is logged in
  const userData = auth.currentUser;

  // log out user from firebase
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
    <div className=" profile-detail max-w-[1000px] mx-auto mt-32 ">
      <p className='my-4 ml-3'><span className={'font-bold text-lg'}>Welcome, </span><span style={{color:"teal"}}>{userData?.email}</span></p>
      <div className="profile-info flex justify-between items-center my-8 rounded-2xl py-8 px-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
        <div>
          <button
            onClick={ logOutUser }
            className="profile-sign px-2 py-1 shadow-lg hover:shadow-2xl hover:bg-slate-600 hover:color font-bold"
          >
            Sign Out
          </button> 
        </div>
      </div>
      
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="profile-info w-full min-h-[300px] px-4 rounded-2xl">
          <h1 className="text-2xl font-bold py-4">WatchList</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  );
}

export default Profile;
