"use client"
import {useState} from "react"
export default function Reset(){
    const[count,setReset]=useState(20)
    return(
        <div>
            <p>My count is{count}</p>
            <button onClick={()=>setReset(0)} className="bg-yellow-600 text-white shadow-lg shadow-orange-500 border px-10 py-2 ml-4" > Reset</button>
            <button onClick={()=>setReset(count+1)} className="bg-yellow-600 text-white hover:shadow-lg hover:shadow-orange-500 border px-10 py-2 ml-4" > increment</button>
        </div>
    )
}