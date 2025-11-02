"use client"

import { twMerge } from "tailwind-merge"

export const CustomCard = ({
    className, 
    children, 
    ...other
}) => {
    return (
        <div className={twMerge("bg-gray-900 rounded-3xl relative z-0 overflow-hidden border border-orange-500/20 shadow-xl", className)}
        {...other}
        >
              <div className="absolute inset-0 -z-10 opacity-5" 
              style={{
                backgroundImage: `url(/grain.jpg)`,
              }} ></div>
              {children}
        </div>
    )
}