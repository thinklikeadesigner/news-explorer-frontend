import { useState, useEffect, useCallback } from 'react';
import validateInfo from '../validateInfo';

const useForm = () => {
    const [formValid, setFormValid] = useState(true);

    const [values, setValues] = useState({
        email: '',
        password: '',
        name: '',
    });
   

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
           [name]: value
        })
        setIsValid(e.target.closest("form").checkValidity());
    }
    const handleSubmit = e => {
     e.preventDefault();

     setErrors(validateInfo(values));
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
          setValues(newValues);
          setErrors(newErrors);
          setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
      );

    return {handleChange, isValid, values, handleSubmit, errors, resetForm}
}

export default useForm;