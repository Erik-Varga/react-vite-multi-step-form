import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
import { Table, TableContainer, StepLabel, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';

const DisplayData = () => {
    const { finalData } = useContext(multiStepContext);

  return (
    <Typography>
        <div className='mt-5 text-sm'>
            <TableContainer style={{ display: 'flex', justifyContent: 'center' }}>
                <Table border='1' style={{ width: '70%', justifyContent: 'center' }} size='small' aria-label='caption table'>
                    <TableHead>
                        <TableRow style={{ backgroundColor: 'lightgrey', color: 'aliceblue'}}>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Contact Number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Country</TableCell>
                            <TableCell>District</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Landmark</TableCell>
                            <TableCell>Postal Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {finalData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.firstName}</TableCell>
                                <TableCell>{data.lastName}</TableCell>
                                <TableCell>{data.contactNumber}</TableCell>
                                <TableCell>{data.email}</TableCell>
                                <TableCell>{data.country}</TableCell>
                                <TableCell>{data.district}</TableCell>
                                <TableCell>{data.city}</TableCell>
                                <TableCell>{data.landmark}</TableCell>
                                <TableCell>{data.postalCode}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </Typography>
  )
}

export default DisplayData