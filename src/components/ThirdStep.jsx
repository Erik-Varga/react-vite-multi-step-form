import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'

export default function ThirdStep() {
    const { setCurrentStep, userData, setUserData, submitData } = useContext(multiStepContext);

    return (
        <div className='w-full max-w-xl transition-all duration-500 ease-in-out'>
            <div>
                <TextField
                    fullWidth
                    value={userData['city']}
                    onChange={(e) => setUserData({ ...userData, "city": e.target.value })}
                    label='City'
                    margin='normal'
                    variant='outlined'
                    color='secondary' />
            </div>
            <div>
                <TextField
                    fullWidth
                    value={userData['landmark']}
                    onChange={(e) => setUserData({ ...userData, "landmark": e.target.value })}
                    label='Landmark'
                    margin='normal'
                    variant='outlined'
                    color='secondary' />
            </div>
            <div>
                <TextField
                    fullWidth
                    value={userData['postalCode']}
                    onChange={(e) => setUserData({ ...userData, "postalCode": e.target.value })}
                    label='Postal Code'
                    margin='normal'
                    variant='outlined'
                    color='secondary' />
            </div>
            <div>
                <FormGroup>
                    <FormControlLabel required control={<Checkbox />} label="Required" />
                </FormGroup>
            </div>

            <div className='mt-5 flex justify-between gap-4'>
                <Button variant='contained' color='secondary' onClick={() => setCurrentStep(2)}>Back</Button>
                <Button variant='contained' color='primary' onClick={submitData}>Submit</Button>
            </div>
        </div>
    )
}
