'use client'

import Link from "next/link"
import {SignInButton,SignOutButton,SignUpButton,SignedIn,SignedOut,UserButton,useAuth} from '@clerk/nextjs'
import {Menu, X, Zap} from 'lucide-react'


import { useState,useEffect } from "react"

export function Navbar(){
    
    const {userId}=useAuth()
    const [isMenuopen,setisMenuopen]=useState(false)
    const [isscrolled,setisscrolled]=useState(false)
    useEffect(()=>{
        const handlescroll=()=>{
            setisscrolled(window.scrollY >10)
        }
        window.addEventListener('scroll',handlescroll)
        return()=>window.removeEventListener('scroll',handlescroll)
    })
    
    return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isscrolled?'bg-gray-900 backdrop-blur-md':'bg-transparent'} `}>
        <nav className="container mx-auto px-4 sm:px-8 py-4 sm:py-6">
            <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto">
                <div>
                    <Link href={'/'} className="flex items-center space-x-2">
                    <Zap className="w-8 h-8 text-blue-500" />
                    <span className="text-xl sm:text-2xl font-bold text-white">craft AI</span>
                    </Link>
               

                </div>
                <button className="sm:hidden text-white focus:outline-none"
                        onClick={()=>setisMenuopen(!isMenuopen)}>
                            {isMenuopen ?(
                                <X className="w-6 h-6" />
                            ):(
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                        <div className={`w-full sm:w-auto ${isMenuopen ? 'block':'hidden'} sm:block mt-4 sm:mt-0`}>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8">
                                {['Features','Pricing','Docs'].map((item)=>(
                                    <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group">
                                        {item}

                                    </Link>
                                ))}
                                {userId && (
                                    <Link href={'/generate'} className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0 relative group">Dashboard</Link>
                                )}
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <button className="text-gray-300 hover:text-white transition-colors py-2 sm:py-0">
                                            Sign In
                                        </button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                    <button className="bg-blue-600 hover:bg-green-600 text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors  sm:py-0">
                                            Sign up
                                        </button>
                                        </SignUpButton>
                                </SignedOut>
                                <SignedIn>
                                    <UserButton appearance={{
                                        elements:{
                                            avatarBox:'w-10 h-10'
                                        }
                                    }}>
                                        

                                    </UserButton>
                                </SignedIn >
                            </div>
                        </div>
            </div>
           
        </nav>
    </header>
}