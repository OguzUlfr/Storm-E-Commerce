import React from 'react'
import Header from '../../components/Header'
import BasketInfo from '../../components/Basket-Info'
import BasketList from './BasketList'

const index = () => {
  return (
    <div className='w-10/12 mx-auto'>
        <Header/>
        <div className='w-full font-bold text-gray-500 text-xl p-10'>SHOPPING CARD</div>
        <div className='w-full px-10 flex relative'>
            <BasketList/>
            <BasketInfo/>
        </div>
    </div>
  )
}

export default index