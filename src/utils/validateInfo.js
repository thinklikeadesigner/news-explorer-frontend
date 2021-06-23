import { useState } from 'react';



export default function ValidateInfo(values) {
    let errors = {}
    
//email
if (!values.email) {
    errors.email = "Email required";
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email))
{
errors.email = 'Invalid email address';

}
    
//password
if (!values.password) {
    errors.password = 'Password required';
} else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 or more characters";
}


//name
if (!values.name.trim()) {
    errors.name = 'Name required';
}



return errors;
}