import { useContext, useState } from "react"
import { useAuthContext } from "../context/AuthContext"


const useLogout=()=>{

    const [loading,setloding]=useState(false)
    const { setauthUser}=useAuthContext()
    const logout= async()=>{
setloding(true)
try{
    const res=await fetch('http://localhost:8000/api/auth/logout',{
        method:"POST",
        headers:{'content-Type':"application/json"}
            })
            const data=await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.removeItem('chat-user')
            setauthUser(null)
}
catch(error){
    toast.error(error.message)
    
}finally{
    setloding(false)
}
    }
return {loading,logout}
}

export default useLogout