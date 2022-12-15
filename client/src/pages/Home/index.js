import React from 'react'
import Header from '../../components/Header'
import HomeSlider from '../../components/Slider-H'
import CardList from '../../components/Card-List'
import DoubleAd from '../../components/Double-Ad'
import SingleAD from '../../components/Single-Ad'
import ThippleAd from '../../components/Thripple-Ad'
import Partners from '../../components/Partners'
import Footer from '../../components/Footer/index'

function index() {
  return (
    <>
      <div className='w-5/6 mx-auto'>
        <Header/>
        <HomeSlider/>
        <CardList title={'SON GEZDİKLERİM'}/>
        <DoubleAd/>
        <SingleAD/>
        <ThippleAd/>
        <CardList title={'ÇOK SATANLAR'}/>
        <CardList title={'İNDİRİME DOYANLAR'}/>
        <SingleAD/>
        <Partners/>
      </div>
      <Footer/>
    </>
  )
}

export default index