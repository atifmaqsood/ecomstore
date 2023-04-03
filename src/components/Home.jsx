import React from 'react'
import MainSlider from '../components/MainSlider'
import ShippingBlocks from '../components/ShippingBlocks'
import FeatureProducts from '../components/FeatureProducts'
import TopSellingProducts from '../components/TopSellingProducts'
import CallToAction from '../components/CallToAction'


function Home() {
  return (
    <>
    {/* Rendering Main Slider Component Below */}
    <MainSlider/>

    {/* Rendering Shipping Blocks Component Below */}
    <ShippingBlocks/>

    {/* Rendering Feature Products component Below */}
    <FeatureProducts/>

    {/* Rendering Top Selling Products component Below */}
    <TopSellingProducts/>
    
    {/* Rendering Call to Action component Below */}
    <CallToAction/>


    </>

  )
}

export default Home