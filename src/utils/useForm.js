import {useState,} from 'react'

const useForm = (validateRegister) => {

    const initialState = {
        name: "",
        email:"",
        password:"",
        confirmpassword:""
    }
    const [errors, setErrors] =useState({})
    const [values, setValues] = useState(initialState)
    
    const submitRegister = (e) =>{
        e.preventDefault()
        setErrors(validateRegister(values))
        if(!Object.keys(errors).length){
            setValues(initialState)
            console.log("no form errors") 
        }
    
    }
    const handleregisterChange = (e) => {
        // e.persist()
        setValues({...values, [e.target.name]: e.target.value})
        // console.log(values)
    }

    

    return{values, handleregisterChange,submitRegister, errors}
}

export default useForm
