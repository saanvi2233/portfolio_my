import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.jpg'
import react from '../assets/react.png'
import gt from '../assets/github.png'
import tw from '../assets/tailwind.png'



const Expirence = () => {

// const techs=[
//     {
// id:1,
// src:html,
// title:'HTML',
// style:'shadow-orange-500'
//     },
//     {
//         id:2,
//         src:css,
//         title:'CSS',
//         style:'shadow-orange-500'
//             },{

//                 id:3,
//                 src:js,
//                 title:'JS',
//                 style:'shadow-orange-500'
//                     },
//                     {
//                         id:4,
//                         src:react,
//                         title:'React',
//                         style:'shadow-orange-500'
//                             },
//                             {
//                                 id:5,
//                                 src:tw,
//                                 title:'Tailwind',
//                                 style:'shadow-orange-500'
//                                     },
//                                     {
//                                         id:6,
//                                         src:gt,
//                                         title:'Github',
//                                         style:'shadow-orange-500'
//                                             }
// ];



  return (
    <div name='experiences' className=' bg-gradient-to-b from-gray-800 to-blue-950 
 w-full h-screen'>
      <div className=' ml-15max-w-screen-lg max-auto p-4 flex flex-col w-full h-full text-gray-300'>
        <div>
            <p className='text-4xl border-b-4 font-bold border-gray-500 p-2 inline'>Experiences</p>
            <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 
        sm:px-0'>
                    <div 
        className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
        <img src={html} className='w-20 max-auto' />
        <p className='mt-4'>HTML</p>
    </div>


    <div 
    className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
        <img src={css} className='w-20 max-auto' />
        <p className='mt-4'>CSS</p>
    </div>
    <div 
    className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
        <img src={js} className='w-20 max-auto' />
        <p className='mt-4'>JavaScript</p>
    </div>
    <div 
    className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
        <img src={react} className='w-20 max-auto' />
        <p className='mt-4'>react</p>
    </div>
    <div 
    className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
        <img src={gt} className='w-20 max-auto' />
        <p className='mt-4'>GitHub</p>
    </div>
    <div 
    className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg '>
        <img src={tw} className='w-20 max-auto' />
        <p className='mt-4'>TailWind</p>
    </div>


{/* {
    techs.map(({id,src,title,style})=>{
        <div 
        key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
        <img src={src} className='w-20 max-auto' />
        <p className='mt-4'>{title}</p>
    </div>
    })
} */}


           
        </div>
      </div>
    </div>
  )
}

export default Expirence
