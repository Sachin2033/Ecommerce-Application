import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
        <div className='p- shadow-lg rounded-s-md border pb-4'>
            <AddressCard />
        </div>
        <div>

    <div className='lg:grid grid-cols-3 relative text-left'>
        <div className='col-span-2'>
            {[1,1,1,1].map((item)=><CartItem />)}
            </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border '>
            <p className='uppercase opacity-60 pb-4 '>Price Details</p>
           `<hr />
           <div className='space-y-3 font-semibold mb-8'>
            <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹4999</span>
            </div>
            <div className='flex justify-between pt-3'>
                <span>Discount</span>
                <span className=' text-green-600'>-₹1999</span>
            </div>
            <div className='flex justify-between pt-3'>
                <span>Delivery Charges</span>
                <span className=' text-green-600'>Free</span>
            </div>
            <div className='flex justify-between pt-3 text-black font-bold'>
                <span>Total Amount</span>
                <span className=' text-green-600'>₹2000</span>
            </div>

           </div>
           <Button variant='contained' className='w-full ' sx={{px:"2.5rem" , py:"0.7rem" ,bgcolor:"#9155fd"}}>
                   Checkout 
              </Button>
        </div>
    </div>
    </div>



        
    </div>
    </div>
  )
}

export default OrderSummary