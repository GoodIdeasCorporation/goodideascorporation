import React from 'react'

type containerProps = {
  title : string
  image : string
}

const Header : React.FC <containerProps> = ({title, image}) => {
  return (
    <div className='w-full h-[500px] relative flex justify-center'>
     <div className='max-w-[1000px] w-full h-full min-[700px]:justify-start justify-center p-4 flex items-center absolute z-10'>
          <h1 className="text-6xl font-bold text-white">{title}</h1>
     </div>
     <div className='w-full h-full bg-black absolute z-0'>
          <img
          className='w-full h-full max-h-full max-w-full object-cover opacity-60 '
          src = {image}
          />
     </div>
    </div>
  )
}

export default Header;