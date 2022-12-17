import React from 'react'
import CardList from '../../components/Card-List'
import DoubleAd from '../../components/Double-Ad'
import SingleAD from '../../components/Single-Ad'
import ThippleAD from '../../components/Thripple-Ad'
import Partners from '../../components/Partners'

const Component = ({type}) => {
  if(type === 'CardList'){
    return(<CardList/>)
  }
  if(type === 'DoubleAd'){
    return(<DoubleAd/>)
  }
  if(type === 'SingleAD'){
    return(<SingleAD/>)
  }
  if(type === 'ThippleAD'){
    return(<ThippleAD/>)
  }
  if(type === 'Partners'){
    return(<Partners/>)
  }
}

export default Component