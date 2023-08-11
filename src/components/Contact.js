import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-blue-950 to-sky-700 p-4
    text-white'>
      <div className='flex flex-col justify-cente items-centerr max-w-screen-lg mx-auto-h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6' >Submit the form below to get in touch with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/6c19b900-22cd-4fea-88b1-c2b76ae178aa" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input name='name' type='text' placeholder='Enter your name' className='p-2 bg-transparent
            border-2 rounded-md text-slate-300 focus:outline-none'/>

<input name='email' type='text' placeholder='Enter your email' className=' my-4 p-2 bg-transparent
            border-2 rounded-md text-slate-300 focus:outline-none'/>

<textarea name='message' row='10' className='p-2 bg-transparent
            border-2 rounded-md text-slate-300 focus:outline-none' > </textarea>

            <button className='text-white bg-gradient-to-b from-green-600 to-green-950
            px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Chat!</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
