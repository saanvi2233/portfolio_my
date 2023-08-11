import React from 'react'
import mypic from '../assets/mypic.jpg'
//import {AiFillCaretRight} from 'react-icon/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-purple-950'>
 <div className='max-w-screen-lg mx-auto flex  flex-col items-center justify-center
 h-full px-5 md:flex-row'>
    <div className='flex flex-col justify-center '>
        <h2 className=  ' flex text-5xl float-left sm:text-7xl font-bold ml-0 text-yellow-200 '>
            I'm Web Developer.
        </h2>
        <p className='text-2xl float-left ml-0 text-yellow-100 py-4 max-w-md'>
             I am a Second Year Student doing my<br/> B-tech from 
            Computer Science and Engineering from National Institute of Technology Patna.
            I am also 
            Currently learning DSA.
        </p>
        <div>
            <button className='text-4xl bg-gradient-to-r from-cyan-600 to-blue-900 px-5 py-2 rounded-2xl font-signature justify-end
            hover:scale-125 float-left cursor-pointer'>portfolio- </button>
        </div>
    </div>
    <div>
        <img src={mypic} className='rounded-2xl mx-auto w-2/5 '></img>
    </div>
 </div>
    </div>
  )
}

export default Home
