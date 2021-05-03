import {useState} from 'react'

const useForm = (formValidation) => {
    const [errors, setErrors] =useState({})
    const [values, setValues] = useState({
        name: "",
        email:"",
        password:"",
        confirmpassword:""
    })
    

    const handleRegister = (e) =>{
        e.preventDefault()
        setErrors(formValidation(values))
        console.log(values)
        // setValues({})
    }
    const handleChange = (e) => {
        e.persist()
        setValues(values => ({...values, [e.target.name]: e.target.value}))
    }

    return [values, handleChange,handleRegister,errors]
}

export default useForm
