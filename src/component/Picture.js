import React, {useState} from 'react'

export default function Picture({ imageName, index, handleRemove }) {
  const [showCloseButton, setShowCloseButton] = useState(-1);
  return (
    <div className='relative' key={index}
      onMouseEnter={ () => setShowCloseButton(index) }
      onMouseLeave={ () => setShowCloseButton(-1) }
      >
      <button className={`bg-white w-5 g-5 pb-1 font-thin rounded-xl text-center flex justify-center item-center absolute text-red-500 right-0 text-sm focus:outline-none ${index ==showCloseButton ? '' : 'hidden'}`}
      onClick={() => handleRemove(index)} >x</button>
      <img className='w-40 mx-auto' src={imageName}></img>
    </div>
  )
}
