import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Box } from '@mui/system'
import { createOrder } from '../../../State/Order/Action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DeliveryAddressForm = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault(); // to avoide refresh of the page
        const data = new FormData(e.currentTarget)

        const address={
            firstName :data.get("firstName"),
            lastName :data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zipcode"),
            mobile:data.get("phoneNumber") 
        }

        const orderData={address,navigate}
        dispatch(createOrder(orderData));

        console.log("address" , address)
    }
  return (
    <div>
        <Grid container spacing={4}>
                <Grid item xs={12} lg={5} className='border rounded-e-md h-[30.5rem] overflow-y-scrollscroll'>
                    <div className='p-5 py-7 border-b cursor-pointer text-left'>
                        <AddressCard />
                        <Button sx={{mt:2 , bgcolor:"RGB(145 85 253)"}} size='large' variant='contained'>Deliver Here</Button>
                    </div>

                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-s-md shadow-md p-5'>
                        <form action="" onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    required
                                    id="firstName" 
                                    name='firstName'
                                    label="firstName"
                                    fullWidth
                                    autoComplete='give-name' />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    required
                                    id="lastName" 
                                    name='lastName'
                                    label="lastName"
                                    fullWidth
                                    autoComplete='give-name' />
                                    
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                    required
                                    id="address" 
                                    name='address'
                                    label="address"
                                    fullWidth
                                    autoComplete='give-name'
                                    multiline
                                    rows={4} />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    required
                                    id="city" 
                                    name='city'
                                    label="city"
                                    fullWidth
                                    autoComplete='give-name' />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    required
                                    id="state" 
                                    name='state'
                                    label="State/Province/Region"
                                    fullWidth
                                    autoComplete='give-name' />
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    required
                                    id="zipcode" 
                                    name='zipcode'
                                    label="Zip/Postal code"
                                    fullWidth
                                    autoComplete='shipping postal-code' />
                                    
                                    
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField 
                                    required
                                    id="phoneNumber" 
                                    name='phoneNumber'
                                    label="Phone Number"
                                    fullWidth
                                    autoComplete='give-name' />
                                    
                                    
                                </Grid>
                                <Grid item xs={12} sm={6} className='text-left'>
                                    <Button  sx={{ py:1,mt:2 , bgcolor:"RGB(145 85 253)"}} size='large' variant='contained' type='submit'>
                                        Deliver Here
                                    </Button>
                                </Grid>
                                
                            </Grid>
                        </form>
                    </Box>
                </Grid>
        </Grid>
    </div>
  )
}

export default DeliveryAddressForm