import { useState } from "react";
import {toast} from 'react-hot-toast'
import { json } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
const useSignup=()=>{
    const [loading,setloading]=useState(false)
    const {setauthUser}=useAuthContext()
const signup= async({fullName,username,password,confirmPassword,gender})=>{
    const suces=handleInputError({fullName,username,password,confirmPassword,gender})
    if(!suces) return ;
    setloading(true)

    try{
        const res=await fetch('http://localhost:8000/api/auth/signup',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            })
            const data=await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            // local storage
            localStorage.setItem('chat-user',JSON.stringify(data))
            setauthUser(data)




            console.log(data)

    }catch(error){
        toast.error(error.message)


    }finally{
        setloading(false)
    }

}
return {signup,loading}
}

export default useSignup

function handleInputError({fullName,username,password,confirmPassword,gender}){
    if(!fullName||!username||!password||!confirmPassword||!gender){
        toast.error('Please fill all the fields')
        return false
    }
    if(password!==confirmPassword){
         toast.error('Password and Confirm Password does not match')
        return false
    }
    if(password.length<6){
        toast.error('Password must be atleast 6 characters long')
        return false
    }



    return true

}