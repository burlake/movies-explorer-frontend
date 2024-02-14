import { useCallback, useState } from "react";

function useFormValidation () {
    const [values, setValues] = useState({})
    const [errors, setError] = useState ({})
    const [isValid, setIsValid] = useState(false)
    const [isInputValid, setIsInputValid] = useState({})

    

    function handleChange (event) {
        const name = event.target.name
        const value = event.target.value
        const validationMessage = event.target.validationMessage
        const valid = event.target.validity.valid
        const form = event.target.form  //воспринимает как 2 разных инпута = 2 разные форма - откладываю

        setIsInputValid((oldIsInputValid) => {
            return { ...oldIsInputValid, [name]: valid}
        })

        setValues((oldValues) => {
            return { ...oldValues, [name]: value}
        })

        setError((oldErrors) => {
            return { ...oldErrors, [name]: validationMessage}
        })

        setIsValid(form.checkValidity())
    }

 function reset (data = {}) {
    setValues (data)
    setError ({})
    setIsValid (false)
    setIsInputValid ({})
 }

 const setValue = useCallback ((name, value) => {
    setValues((oldValues) => {
        return { ...oldValues, [name]: value}
    })
 }, [])

    return { values, errors, isValid, isInputValid, handleChange, reset, setValue }

}

export default useFormValidation


// const reset = useCallback((data = {}) => {
//     setValues(data)
//     setErrors({})
//     setIsValid(false)
//     setIsInputValid({})
//   }, [])

//   return { values, errors, isValid, isInputValid, handleChange, reset }

// вместо reset и setValue