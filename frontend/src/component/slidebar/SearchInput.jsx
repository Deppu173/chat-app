import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
function SearchInput() {
  return (
<>


<form className='flex mt-16 gap-2'> 
    <input type="text" placeholder='search..' className='input input-bordered rounded-full' />
    <button type='submit' className='btn btn-circle bg-sky-500 text-white'><IoSearchSharp className='w-6 h-6 outline-none'></IoSearchSharp></button>
</form>

</>  )
}

export default SearchInput







// // stater code  import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// function SearchInput() {
//   return (
// <>f


// <form className='flex mt-16 gap-2'> 
//     <input type="text" placeholder='search..' className='input input-bordered rounded-full' />
//     <button type='submit' className='btn btn-circle bg-sky-500 text-white'><IoSearchSharp className='w-6 h-6 outline-none'></IoSearchSharp></button>
// </form>

// </>  )
// }

// export default SearchInput