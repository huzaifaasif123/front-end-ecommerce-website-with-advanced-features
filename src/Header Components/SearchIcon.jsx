import React from 'react'

const SearchIcon = () => {
  return (
    <div>
           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-11 text-palette1 bg-palette9 rounded-r-3xl transition-all duration-300 shadow-inner shadow-palette1 group-hover:bg-palette1 group-hover:text-palette9 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75L13.261 13.261M13.261 13.261A3.375 3.375 0 1 0 8.488 8.488a3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
      
    </div>
  )
}

export default SearchIcon
