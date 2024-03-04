import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }
    return (
        <div className='absolute w-screen px-4 py-2 bg-gradient-to-b from-black opacity-70 z-10 flex items-center justify-between'>
            <img className="w-36 " alt="Netflix_Image " src="https://tse3.mm.bing.net/th?id=OIP.k7IyIjh8NgXAALKUIuDbVwHaEK&pid=Api&P=0&h=180" />
            <div className='flex m-2 p-2 h-25 w-26'>
                <img alt="usericon" src="https://occ-0-6336-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201" />
                <button onClick={handleSignOut} className='font-bold m-2'>(Sign Out)</button>
            </div>
        </div>
    )
}

export default Header