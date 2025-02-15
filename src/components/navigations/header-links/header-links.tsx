"use client"

import { AlignJustify, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import "./styles.css"


interface iHeaderLinks {
    links: Record<string, string>
}

export function HeaderLinks({links}: iHeaderLinks) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="absolute-center flex-center flex-row-reverse gap-1">
            <button
            onClick={() => setIsOpen(prev => !prev)} 
            className="w-[17px] aspect-square flex justify-center items-center">
                <X className={`w-full aspect-square transition-opacity duration-100 ${!isOpen && "closed"}`} />
                <AlignJustify className={`w-full aspect-square transition-opacity duration-100 ${isOpen && "closed"}`} />
            </button>

            <ul className={`flex flex-col w-[100px] absolute right-0 top-0 translate-y-[17px]
                transition-opacity duration-100 ${!isOpen && "closed"}`}>
                {Object.entries(links).map(
                    ([title, link]) => (
                    <li key={`${title}$$${link}`} 
                    className="text-sm transition-all duration-75 dark:hover:bg-zinc-900 hover:bg-zinc-200">
                        <Link className="py-2 px-1" href={link}>{title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}