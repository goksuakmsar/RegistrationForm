import { useContext } from 'react'
import './App.css'
import FormContext from './context'

function App() {

  const { submitted, valid, value, handleFirstNameChange, handleLastNameChange, handleEmailChange, handleSubmit } = useContext(FormContext)

  return (
    <div className='form-container'>
      <form className='register-form' onSubmit={handleSubmit} >
        {submitted && valid ? <div style={{ backgroundColor: 'rgb(23, 107, 135)', padding: '20px', color: 'white', fontSize: '20px' }}>Succes! Thank you for registering.</div> : null}
        <input type="text"
          className='form-field'
          placeholder='First Name'
          name='firstName'
          value={value.firstName}
          onChange={handleFirstNameChange}
        />
        {submitted && !value.firstName ? <span>Please enter a first name!</span> : null}
        <input type="text"
          className='form-field'
          placeholder='Last Name'
          name='lastName'
          value={value.lastName}
          onChange={handleLastNameChange}
        />
        {submitted && !value.lastName ? <span>Please enter a last name!</span> : null}
        <input type="email"
          className='form-field'
          placeholder='Email'
          name='email'
          value={value.email}
          onChange={handleEmailChange}
        />
        {submitted && !value.email ? <span>Please enter an email!</span> : null}
        <button type='submit' className='form-field' >Register</button>
      </form>
    </div>
  )
}

export default App
