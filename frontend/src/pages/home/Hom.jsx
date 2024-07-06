import React from 'react'

import SearchInput from '../../component/slidebar/SearchInput'
import Sidebar from '../../component/slidebar/Sidebar'
import MessageContainer from '../../component/messages/MessageContainer'
function Hom() {
  return (
<>
<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

  <Sidebar></Sidebar>
  <MessageContainer></MessageContainer>
</div>

</>
  )
}

export default Hom