import {useState} from 'react'
import {validateLogin} from '../utils/formValidation'

const useLoginform = () => {
    const [errors, setErrors] =useState({})
    const [loginvalues, setLoginvalues] = useState({
        email: "",
        password: "",
      })

    const submitLogin = (e) =>{
        e.preventDefault()
        console.log(loginvalues)
    }
    const handleloginChange = (e) =>{
        setLoginvalues(loginvalues => ({...loginvalues, [e.target.name]: e.target.value}))
        setErrors(validateLogin(loginvalues))
        console.log(loginvalues)
        console.log(errors)

    } 

    return [submitLogin, handleloginChange,loginvalues, errors]
}

export default useLoginform
