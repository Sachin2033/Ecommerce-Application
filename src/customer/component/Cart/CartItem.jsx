import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://imgs.search.brave.com/5a8RK9E8KW24PWw7ZjqpfWpxH97KViGrvOxcU4FQef8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bGVnYWN5LmltYWdl/cy5ydXNob3JkZXJ0/ZWVzLmNvbS91bnNh/ZmUvMjk0eDI5NC9l/enRlZXMtY2F0YWxv/Z3JlYnVpbGQuczMu/YW1hem9uYXdzLmNv/bS9tb2RlbEltYWdl/cy8zNDEzY18zN19m/ci5qcGc" alt="" />
                </div>

                    <div className='ml-5 space-y-1 text-left'>
                        <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                        <p className='opacity-70'>Size: L,White</p>
                        <p className='opacity-70 mt-2'>Seller: Louice Volton</p>
                        <div className='flex space-x-5 items-center text-gray-900 pt-5 '>
                        <p className='font-semibold'>₹1999</p>
                        <p className='line-through opacity-50'>₹5999</p>
                        <p className='text-green-600 font-semibold'>66% off</p>
                    </div>
                </div>
                
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <IconButton >
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                            <span className='py-1 px-7 border rounded-sm'>3</span>
                            <IconButton sx={{color:"RGB(145 85 253)"}}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                            
                        </div>
                        <div>
                            <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                        </div>
                </div>
    </div>
  )
}

export default CartItem