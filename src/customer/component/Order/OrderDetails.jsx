import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import { Box, fontSize } from '@mui/system'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20 text-left'>
        <div className=''>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard />
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3} />
        </div>
        <Grid container className='space-y-5'>
        {[1,1,1,1,1,1,1].map((item)=>
            <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center" ,justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://imgs.search.brave.com/wsNZnOEGT4AcP_euWiBX3ieHScpsHG0GXL4zPPb_So8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FkLzk4/Lzg1L2FkOTg4NWE2/MGUxODVjYWYzZDc1/YjEwMDk4ODFiZjA4/LmpwZw" alt="" />

                        <div className='space-y-2  text-left'>
                            <p className='font-semibold'>Women Slim Soft Fabric Tshirts</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold '><span>Color : White</span><span>Size : M</span></p>
                            <p>Seller : Gucci</p>
                            <p>₹12999</p>
                        </div>
                    </div>
                </Grid>
                <Grid item >

                    <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"3rem"}}  className='px-2 ' />
                        <span>Rate & Review Product</span>
                    </Box>

                </Grid>
            </Grid>
        )}
        </Grid>
        
        
    </div>
  )
}

export default OrderDetails