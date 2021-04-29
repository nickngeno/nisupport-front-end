import {useState} from 'react'

const useForm = () => {
    const [values, setValues] = useState({
        name: "",
        email:"",
        password:"",
        confirmpassword:""
    })

    const register = (e) =>{
        e.preventDefault()
        console.log(values)
        setValues({})
    }
    const handleChange = (e) => {
        e.persist()
        setValues(values => ({...values, [e.target.name]: e.target.value}))
    }

    return [values, handleChange,register]
}

export default useForm
