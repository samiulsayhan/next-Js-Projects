"use client";

import { useEffect } from "react";

export default function AboutError({error,reset}:{error:Error & {digest?:string}; reset: ()=>void}){

    useEffect(()=>{
        // we can pass this error to a logger
        console.error(error)
    })

    return(
        <div>
            <h1>there is a error in this page</h1>
            <button onClick={()=>reset()}>Retry</button>
        </div>
    )
}