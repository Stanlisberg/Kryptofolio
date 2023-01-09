import AuthContext from "../Context/AuthContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

function Profile() {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutUser = () => { 

    try{
      logOut()
    } catch(e){
      console.log(e.message)
    }
     
  }

  console.log(user?.email);

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="flex justify-between items-center my-8 rounded-2xl py-8">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            <p>Welcome, {user?.email}</p>
          </div>
        </div>
        <div>
          <button
            onClick={ logOutUser }
            className="border px-4 py-1 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="w-full min-h-[300px]">
          <h1 className="text-2xl font-bold py-4">Watch List</h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
