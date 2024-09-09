import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='mt-10 p-5 shadow-md shadow-gray-300 hover:shadow-2xl border hover:shadow-gray-500'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer '>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://imgs.search.brave.com/AOVkC3S-EplvffUI-KvW-nqrcAv8Jq5yTeKlVtpa-Xg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2F5bWVkaWEt/Y29udGVudC5jb20v/LmltYWdlL2NfbGlt/aXQsY3Nfc3JnYixm/bF9wcm9ncmVzc2l2/ZSxxX2F1dG86ZWNv/LHdfNzAwL01UYzFN/VEUwTlRrek5qa3lO/VFU1TVRjeS90b3At/MTAtbW9zdC1zdWNj/ZXNzZnVsLWJlYXV0/aWZ1bC1rb3JlYW4t/ZHJhbWEtYWN0cmVz/c2VzLmpwZw" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Girls Slim Rise Tshirts</p>
                        <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color:Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p className=''>₹1999</p>
            </Grid>
            <Grid item xs={4}>
                
                {true &&  <div>
                    <p>
                    <AdjustIcon sx={{widows:"15px" ,height:"15px"}} className='text-green-600 mr-2' />
                    <span>
                        Delivered On March 03
                    </span>
                    
                </p>
                <p className='text-xs'>
                Your Item Has Been Delivered
                </p>
                </div> }
                {false &&<p>
                    <AdjustIcon />
                    <span>
                        Expected Delivery On March 02
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard