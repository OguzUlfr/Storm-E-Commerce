import React from 'react'
import Header from '../../components/Header'
import Component from './Component';
import HomeSlider from '../../components/Slider-H'
import Footer from '../../components/Footer/index'

function index() {
  const HomeList = [
    "CardList",
    "DoubleAd",
    "SingleAD",
    "ThippleAD",
    "CardList",
    "CardList",
    "SingleAD",
    "Partners"
  ];
  console.log(HomeList);
  return (
    <>
      <div className='w-5/6 mx-auto'>
        <Header/>
        <HomeSlider/>
        {HomeList &&
          HomeList.map(item => {
            return <Component type={item}/>
          })
        }
      </div>
      <Footer/>
    </>
  )
}

export default index