import React from 'react'
import ProductCard from '../../components/Product-Card'

const ProductList = () => {
  return (
    <div className='w-11/12 grid gap-5 gap-y-12 pb-7 grid-cols-5'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default ProductList