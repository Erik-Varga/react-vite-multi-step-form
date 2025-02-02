import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import { Button, TextField } from '@mui/material'

export default function SecondStep() {
    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

    return (
        <div className='w-full max-w-xl transition-all duration-500 ease-in-out'>
            <div>
                <TextField
                    fullWidth
                    value={userData['email']}
                    onChange={(e) => setUserData({ ...userData, "email": e.target.value })}
                    label='Email'
                    margin='normal'
                    variant='outlined'
                    color='secondary' />
            </div>
            <div>
                <TextField
                    fullWidth
                    value={userData['country']}
                    onChange={(e) => setUserData({ ...userData, "country": e.target.value })}
                    label='Country'
                    margin='normal'
                    variant='outlined'
                    color='secondary' />
            </div>
            <div>
                <TextField
                    fullWidth
                    value={userData['district']}
                    onChange={(e) => setUserData({ ...userData, "district": e.target.value })}
                    label='District'
                    margin='normal'
                    variant='outlined'
                    color='secondary' />
            </div>
            <div className='mt-5 flex justify-between gap-4'>
                <Button variant='contained' color='secondary' onClick={() => setCurrentStep(1)}>Back</Button>
                <Button variant='contained' color='primary' onClick={() => setCurrentStep(3)}>Next</Button>
            </div>
        </div>
    )
}
