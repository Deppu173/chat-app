import React from 'react'
import SearchInput from './SearchInput'
// import Conversation from './Conversation'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (

    <>
    <div className='border-r border-slate-500 p-4 flex flex-col'>
    <SearchInput></SearchInput>
    <div className='divider px-3 '></div>
    <Conversations></Conversations>
    <LogoutButton></LogoutButton >
    </div>
    </>
  )
}

export default Sidebar



// starter code

// import React from 'react'
// import SearchInput from './SearchInput'
// // import Conversation from './Conversation'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// function Sidebar() {
//   return (

//     <>
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//     <SearchInput></SearchInput>
//     <div className='divider px-3 '></div>
//     <Conversations></Conversations>
//     <LogoutButton></LogoutButton >
//     </div>
//     </>
//   )
// }

// export default Sidebar