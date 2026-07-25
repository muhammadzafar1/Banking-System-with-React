import React from 'react'

const Dashboard = () => {
  return (
    <div className='bg-zinc-600 h-screen w-screen flex justify-center items-center'>
<div className='w-[30%] h-[90%] bg-amber-950 rounded-4xl flex flex-col justify-between p-5'>
{/* Nmae */}
<div className='flex justify-center '>
<h3 className=' bg-amber-200 rounded-3xl py-2 px-5'>Name</h3>
</div>
{/* Amount */}

<div className='flex justify-between'>
<h2 className='bg-amber-200 rounded-3xl py-2 px-5' >Amount</h2> 
<button className='bg-blue-700 rounded-2xl py-2 px-5 text-white'>Withdraw</button>

</div>

<div className='flex justify-center'>
   <button className='bg-red-900 p-2 rounded-4xl  text-white'> Logout Account</button>
</div>











</div>
    </div>
  )
}

export default Dashboard
