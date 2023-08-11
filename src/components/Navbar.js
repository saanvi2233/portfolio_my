import React from 'react'
//import {FaBars,FaTimes} from "react-icon/fa"
import {Link} from 'react-scroll'
const Navbar = () => {
  const links=[
    {
      id:1,
      link:'Home'
    },
    {
      id:2,
      link:'About'
    },
    {
      id:3,
      link:'Portfolio'
    },
    {
      id:4,
      link:'Contact'
    }
  ];
  return (
    <div className='flex justift-between items-center px-5 w-full h-20 text-white bg-black fixed'>
   <div>
    <h1 className='text-4xl font-signature ml-20 mr-80 '>SaanviG</h1>
   </div>
   <ul className=' hidden md:flex'>
    {links.map(({id,link})=>(
      <li key={id} className='px-10 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-200'>
       <Link to={link} smooth duration={500}>
       {link}</Link> 
        
        
        </li>

    ))}
    
   </ul>
    </div>
  )
}

export default Navbar
