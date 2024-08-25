import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import {store} from '../../../State/store';

const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {order}=useSelector(store=>store)
    const searchParamas=new URLSearchParams(location.search)
    const orderId =searchParamas.get  ("order_id")

    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])

  return (
    <div>
        <div className='p- shadow-lg rounded-s-md border pb-4'>
            <AddressCard address={order.order?.shippingAddress}/>
        </div>
        <div>

    <div className='lg:grid grid-cols-3 relative text-left'>
        <div className='col-span-2'>
            {order.order?.orderItems.map((item)=>(
                <CartItem item={item}/>
                ))}
            </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border '>
            <p className='uppercase opacity-60 pb-4 '>Price Details</p>
           `<hr />
           <div className='space-y-3 font-semibold mb-8'>
            <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
            </div>
            <div className='flex justify-between pt-3'>
                <span>Discount</span>
                <span className=' text-green-600'>-₹{order.order?.discount}</span>
            </div>
            <div className='flex justify-between pt-3'>
                <span>Delivery Charges</span>
                <span className=' text-green-600'>Free</span>
            </div>
            <div className='flex justify-between pt-3 text-black font-bold'>
                <span>Total Amount</span>
                <span className=' text-green-600'>₹{order.order?.totalDiscountedPrice}</span>
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