import React from 'react'

const Header = ({onChangeApiKey}) => {
  return (
    <div className='bg-neutral-900'>
        <div className='max-w-6xl mx-auto py-6 flex items-center justify-between'>
            <h2 className='text-white text-xl google'>MoodBite</h2>
            <button
            onClick={onChangeApiKey}
            className='px-4 py-2 bg-white text-black rounded-full google'>Change Api Key</button>
        </div>
    </div>
  )
}

export default Header