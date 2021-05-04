import {useState} from 'react'

const useForm = (formValidation) => {
    const [errors, setErrors] =useState({})
    const [values, setValues] = useState({
        name: "",
        email:"",
        password:"",
        confirmpassword:""
    })
    

    const submitRegister = (e) =>{
        e.preventDefault()
        setErrors(formValidation(values))
        // console.log(values)
        console.log(errors)
        // setValues({})
    }
    const handleregisterChange = (e) => {
        e.persist()
        setValues(values => ({...values, [e.target.name]: e.target.value}))
    }

    

    return [values, handleregisterChange,submitRegister, errors]
}

export default useForm
