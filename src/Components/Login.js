import React, { useState, useRef } from 'react'
import { auth } from '../Utils/firebase';
import Header from './Header'
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);

    const [errMessage, setErrMessage] = useState(null)

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null)

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        //validate the form data
        console.log(fullName.current.value)
        console.log(email.current.value);
        console.log(password.current.value)
        const message = checkValidData(fullName.current.value, email.current.value, password.current.value);
        console.log(message);
        setErrMessage(message)
        if (message) return; //if we have error message just return it dont go further otherwise go further

        if (!isSignInForm) {
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + "-" + errorMessage);
                    // ..it will show the error code and message if the API fails
                });
        } else {
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMessage(errorCode + "-" + errorMessage);
                });
        }
    };
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt="backgroundimage" src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='p-8 absolute w-3/12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
                <h1 className='font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input className='p-3 my-4 w-full bg-gray-600 rounded-md' ref={fullName} type='text' placeholder='Full Name' />}

                <input
                    ref={email}
                    className='p-3 my-4 w-full bg-gray-600 rounded-md'
                    type='email'
                    placeholder='Email Address'
                />
                <input
                    ref={password}
                    className='p-3 my-4 w-full bg-slate-600 rounded-md'
                    type='password'
                    placeholder='Password'
                />
                <p className='text-red-500'>{errMessage}</p>
                <button
                    className='p-3 my-6 w-full bg-red-600 rounded-lg'
                    onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}

                </button>
                <p
                    className='cursor-pointer'
                    onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In now"}
                </p>
            </form>

        </div>
    )
}

export default Login