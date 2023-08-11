import React from 'react'
import certificate from '../assets/certificate.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-violet-950 to-gray-800
    text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-semibold inline border-b-4 border-gray-500 text-slate-300'>About</p>
        </div>
        <p className='text-xl mt-20 '>
            I have completed my web development course from ACADEMOR.<br/>
            This couse contains every minute details of the web  development<br/> which includes
             html,css,bootstrap.
             
            I'm also learning react which is <br/>  most involving in the field of webTechnology. 
            <div>
        <img src={certificate} className='  rounded-2xl mx-auto w-2/6 '></img>
    </div>
    </p>
            <br/>
            <p className='text-xl  '>
                I am also solving question based on Data structure and algorithm<br/> from first year in
                the language c++.I have also participated in <br/>many contest on codechef.
            </p>
       
      </div>
    </div>
  )
}

export default About
