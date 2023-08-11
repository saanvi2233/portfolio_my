import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {

    
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between item-center w-40 h-1/4 px-4 bg-gray-500
        ml-[-100px] hover:ml-[-10px] hover:rounded-md'>
            <a href="https://www.linkedin.com/in/sanvi-gupta-b27601257"
            className='flex justify-between items-center w-full text-white'>
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            </a>
        </li>
        <li className='flex justify-between item-center w-40 h-1/4 px-4 bg-gray-500
        ml-[-100px] hover:ml-[-10px] hover:rounded-md'>
            <a href="https://github.com/saanvi2233"
            className='flex justify-between items-center w-full text-white'>
                <>
                GitHub <FaGithub size={30}/>
                </>
            </a>
        </li>
        <li className='flex justify-between item-center w-40 h-1/4 px-4 bg-gray-500
        ml-[-100px] hover:ml-[-10px] hover:rounded-md'>
            <a href="mailto:sanvimps@gmail.com"
            className='flex justify-between items-center w-full text-white'>
                <>
                Mail <HiOutlineMail size={30}/>
                </>
            </a>
        </li>
        <li className='flex justify-between item-center w-40 h-1/4 px-4 bg-gray-500
        ml-[-100px] hover:ml-[-10px] hover:rounded-md'>
            <a href="9351050460"
            className='flex justify-between items-center w-full text-white'>
                <>
                Contact <BsFillPersonLinesFill size={30}/>
                </>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
