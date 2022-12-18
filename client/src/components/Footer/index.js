import React from 'react'
import LinkGorup from './LinkGorup'
import Platforms from './Platforms'

const index = () => {
  return (
    <div className='w-full my-60 py-6 bg-gray-200'>
        <div className='w-10/12 mx-auto flex justify-between'>
            <LinkGorup title='Storm'/>
            <LinkGorup title='Kategoriler'/>
            <LinkGorup title='Yardım'/>
            <Platforms/>
        </div>
    </div>
  )
}

export default index
