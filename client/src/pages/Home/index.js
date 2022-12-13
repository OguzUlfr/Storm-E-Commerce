import React from 'react'
import Header from '../../components/Header'
import HomeSlider from '../../components/Slider-H'
import CardList from '../../components/Card-List'

function index() {
  return (
    <div>
        <Header/>
        <HomeSlider/>
        <CardList title={'SON GEZDİKLERİM'}/>
        <CardList title={'FAVORİLER'}/>
        <CardList title={'TRENDLER'}/>
    </div>
  )
}

export default index