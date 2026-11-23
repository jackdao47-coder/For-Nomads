"use client";

import Link from "next/link";
import Image from "next/image";
import { login, logOut } from "@/lib/auth-actions";
import { Session } from "next-auth";

//true or not whether user is authenticated
export default function Navbar ({session}: {session: Session | null}) {
    return <nav  className="bg-white shadow-md py-4 border-gray-200"> 
    <div className="container mx-auto flex justify-between items-center px-6 lg:px-8">
        <Link href={"/"} className="flex item-center">
        <Image src={"/navigation.png"} alt="logo" width={30} height={30} />
        <span className="text-2xl font-bold text-gray-800">For Nomads</span>
        </Link>

        <div className="flex items-center space-x-4">
            {session ? (
                <>
            <Link href="/trips" className="text-slate-900 hover:text-fuchsia-400">
                My trips
            </Link>
            <Link href="/globe" className="text-slate-900 hover:text-fuchsia-400">
                Globe
            </Link>

            <button className="flex items-center justify-center bg-gray-800 hover:text-fuchsia-300 text-white p-2 rounded-sm gap-1 cursor-pointer" 
            onClick={logOut}>
                Sign Out

            </button>
            </>
            ) : (

            

            <button className="flex items-center justify-center bg-gray-800 hover:text-fuchsia-300 text-white p-2 rounded-sm gap-1 cursor-pointer" 
            onClick={login}>
                Sign In 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>

            </button>
            )}
        </div>
    </div>
    
    </nav>
}