import {useState} from 'react'
import {validateLogin} from '../utils/formValidation'

const useLoginform = () => {

    const initialState = {
        email: "",
        password: "",
      }
    const [errors, setErrors] =useState({})
    const [loginvalues, setLoginvalues] = useState(initialState)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submitLogin = (e) =>{
        e.preventDefault()
        setErrors(validateLogin(loginvalues))
        if(Object.keys(errors).length === 0 && loginvalues.email !== ""){
            // console.log(loginvalues)
            setLoginvalues(initialState)
            setIsSubmitting(true)
        }
        // console.log(errors)
    }
    const handleloginChange = (e) =>{
        setLoginvalues(loginvalues => ({...loginvalues, [e.target.name]: e.target.value}))
        setErrors(validateLogin(loginvalues))
        // console.log(errors)
        console.log(loginvalues)

    } 

    return {submitLogin, handleloginChange,loginvalues, errors, isSubmitting}
}

export default useLoginform
