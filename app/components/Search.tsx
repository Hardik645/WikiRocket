'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
    const [search, setSearch]= useState('')
    const route=useRouter()
    const handleSubmit =(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setSearch('');
        route.push(search)
    }
    return (
        <form onSubmit={handleSubmit} className="flex justify-center md:justify-between">
            <input 
                type="text"
                value={search}
                placeholder="Search any keyword"
                onChange={(e)=>{setSearch(e.target.value)}}
                className="bg-white p-2 w-80 text-xl rounded-xl text-black"
            />
            <button className="text-xl p-2 rounded-xl  bg-slate-300 font-bold ml-2">🚀</button>
        </form>
    );
}
