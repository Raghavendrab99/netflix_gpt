import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const err = useRouteError();
    console.log(err)
    return (
        <div>
            <h2>OOPS!!! SOMETHING WENT WRONG....</h2>
            <p>{err.statusText}</p>
            <p>{err.message}</p>
        </div>
    )
}

export default Error