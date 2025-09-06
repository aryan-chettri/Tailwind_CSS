import React from 'react'

function Motion_safe() {
  return (
    <div>
      <button className='transform motion-safe:hover:scale-210px'>
        Hover me
      </button>
    </div>
  )
}

export default Motion_safe
