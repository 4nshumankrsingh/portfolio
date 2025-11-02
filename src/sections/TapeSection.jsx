"use client"

import { Fragment } from "react"

const words = [
  "Frontend",
  "Backend",
  "Databases",
  "Computer Networking",
  "Authentication",
  "Payments",
  "Responsive",
  "ORMS",
  "Lightning-fast",
]

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-linear-to-r from-orange-300 to-orange-400 -rotate-3 -mx-1">
        <div className="flex overflow-hidden">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(4)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={`${word}-${idx}`} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <div className="size-6 text-gray-900 -rotate-12">⭐</div>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};