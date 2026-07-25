import React from 'react'

const SendMoney = () => {
  return (
   
    <div className='h-screen w-screen bg-zinc-700 flex justify-center items-center'>
 <form >

<div className='h-[90%] w-[25%]  rounded-2xl flex flex-col justify-center  items-center gap-10 '>

<div className='flex flex-col justify-center  items-center gap-5   p-2'>
 
<input type="number" placeholder='Enter Amount '

className='py-2 px-5 outline-none text-white border border-gray-500 rounded active:border-blue-900'/>

<input type="email" placeholder='Enter User Email' 

className=' py-2 px-5 outline-none text-white border border-gray-500 rounded border border-gray-500 active:border-blue-900'/>



</div>

<div>
    <button className='bg-blue-500 rounded-2xl px-3 py-2 active:bg-black text-white '>Send Money</button>
</div>

     
</div>


</form>

    </div>
  )
}

export default SendMoney
