import React from 'react'
import SignInForm from '../../../components/SignIn-Form'
import SignUpForm from '../../../components/SignUp-Form'

const index = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-gray-200'>
        <SignInForm/>
        <SignUpForm/>
    </div>
  )
}

export default index