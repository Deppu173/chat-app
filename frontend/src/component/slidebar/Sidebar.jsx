import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import Conversations from './Conversations'

function Sidebar() {
  return (

    <>
    <SearchInput></SearchInput>
    <div className='divider px-3 '></div>
    <Conversations></Conversations>
    {/* <LogoutButton></LogoutButton> */}
    
    </>
  )
}

export default Sidebar