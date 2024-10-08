import React from 'react'



const SearchBox = ({searchVal , setSearchVal}) => {
    
  return (
    <>
    <input
            type="text"
            placeholder="Search an item"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="p-2 w-full h-11 text-palette1 placeholder-palette1 focus:outline-none border-r-0 rounded-l-3xl bg-palette9 shadow-inner shadow-palette1"
          />
      
    </>
  )
}

export default SearchBox
