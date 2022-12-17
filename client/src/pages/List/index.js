import React from 'react'
import Header from '../../components/Header'
import Filter from './Filter'
import Navigater from './Navigater'
import ProductList from './ProductList'
import ListTop from './ListTop'
import Footer from '../../components/Footer'

const index = () => {
  return (
    <>
    <div className='w-10/12 mx-auto'>
        <Header/>
        <Navigater/>
        <div className='flex justify-between'>
          <Filter/>
          <div className='w-full flex flex-col items-center'>
            <ListTop/>
            <ProductList/>
          </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default index