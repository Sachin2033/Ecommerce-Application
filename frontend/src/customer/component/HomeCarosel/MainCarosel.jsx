import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './mainCaroselData';




const MainCarosel = () => {
    // const navigate=useNavigate
    const items = mainCarouselData.map((item)=><img className='cursor-pointer -z-10'  role='presentation' src={item.image} alt=''/>)

return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1250}
        infinite
    />
);
}

export default MainCarosel;