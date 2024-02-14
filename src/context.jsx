import React, { createContext } from "react";
import { useState } from 'react'

const FormContext = React.createContext()

function Provider({ children }) {
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleFirstNameChange = (e) => {
    setValue({ ...value, firstName: e.target.value })
  }

  const handleLastNameChange = (e) => {
    setValue({ ...value, lastName: e.target.value })
  }

  const handleEmailChange = (e) => {
    setValue({ ...value, email: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.firstName && value.lastName && value.email) {
      setValid(true)
    }
    setSubmitted(true)
  }

  const shared = {
    submitted,
    valid,
    value,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleSubmit
  }

  return (
    <FormContext.Provider value={shared}>
      {children}
    </FormContext.Provider>
  )
}

export { Provider }
export default FormContext