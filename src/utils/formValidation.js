
let errors = {}

export  const formValidation = (values) => {
    
    if (values.name ==="" ){
        errors.name = "Name is a required field!"
    }else if(values.name.trim() ===""){
        errors.name = "Name is a required field!"
    }
    
    if (values.email ===""){
        errors.email = "Email is a required field!"
    }
    else{
        var re = /\S+@\S+\.\S+/
        if(re.test(values.email) === false){
            errors.email = "Enter a valid email address!"
        }
    }
    if (values.password === ""){
        errors.password = "Password is a required field!"
    }else if(values.password.length < 5){
        errors.password = "Password should not be less than 5 characters long!"
    }
    if (values.confirmpassword ===""){
        errors.confirmpassword = "Confirm password is a required field!"
    }
    else if (values.confirmpassword !== values.password){
        errors.confirmpassword = "Passwords does not match!"
    }

    return   errors
    
    }

export const validateLogin = (values) =>{

    if (values.email ===""){
        errors.email = "Email is a required field!"
    }
    else{
        var re = /\S+@\S+\.\S+/
        if(re.test(values.email) === false){
            errors.email = "Enter a valid email address!"
        }
    }
    if (values.password === ""){
        errors.password = "Password is a required field!"
    }
    return errors
}