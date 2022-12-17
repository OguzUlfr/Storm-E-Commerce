import React from 'react'
import FilterForm from './FilterForm'

const Filter = () => {
  return (
    <div className=''>
        <FilterForm title='Marka'/>
        <FilterForm title='Beden'/>
        <FilterForm title='Renk'/>
        <FilterForm title='Malzeme'/>
    </div>
  )
}

export default Filter