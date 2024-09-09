import React from 'react'
import MainCarosel from '../../component/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../component/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'
import { gounsPage1 } from '../../../Data/gouns'
import { lengha_page1 } from '../../../Data/LenghaCholi'
import { dressPage1 } from '../../../Data/page1'
import { mensShoesPage1 } from '../../../Data/shoes'
import { useSelector } from 'react-redux'

const HomePage = () => {
  
  const {products}=useSelector(store=>store)
  return (
    <div>
        <MainCarosel />

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <div ><HomeSectionCarosel  data={ mens_kurta } sectionName={"Men's Kurta"}/></div>
            <HomeSectionCarosel data={gounsPage1} sectionName={"Gouns"}/>
            <HomeSectionCarosel data={lengha_page1} sectionName={"Lehnga-Choli"}/>
            <HomeSectionCarosel data={dressPage1} sectionName={"Western Dresses for Women"}/>
        </div>
    </div>
  )
}

export default HomePage