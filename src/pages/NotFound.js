import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center flex-col h-screen '>
      <div className="info h-[300px] w-[300px] animate-bounce-slow ">
        <img src="images/notFound.svg" alt="" />
      </div>

      <h1>Page Not Found</h1>

    </div>
  )
}

export default NotFound