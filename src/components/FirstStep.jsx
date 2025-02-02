import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import { Button, TextField } from '@mui/material'

export default function FirstStep() {
  const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div className='w-full max-w-xl transition-all duration-500 ease-in-out'>
      <div>         
        <TextField 
          fullWidth
          value={userData['firstName']}
          onChange={(e) => setUserData({...userData, "firstName": e.target.value})}
          label='First Name' 
          margin='normal' 
          variant='outlined' 
          color='secondary' />
      </div>
      <div>
        <TextField 
          fullWidth
          value={userData['lastName']}
          onChange={(e) => setUserData({...userData, "lastName": e.target.value})}
          label='Last Name' 
          margin='normal' 
          variant='outlined' 
          color='secondary' />
      </div>
      <div>
        <TextField 
          value={userData['contactNumber']}
          onChange={(e) => setUserData({...userData, "contactNumber": e.target.value})}
          label='Contact Number' 
          margin='normal' 
          variant='outlined' 
          color='secondary' />
      </div>
      <div className='mt-5 flex justify-end gap-4'>
        <Button variant='contained' color='primary' onClick={() => setCurrentStep(2)}>Next</Button>
      </div>
    </div>
  )
}
