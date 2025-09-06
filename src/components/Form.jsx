import React from 'react'

function Form() {
  return (
    <div>

        <form action="">
            <input type="text" 
            placeholder='Your email' 
            className='text-purple-900 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'/>

            <button className='bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'>
                Sign Up
            </button>
        </form>
      
    </div>
    
  )
}

export default Form
