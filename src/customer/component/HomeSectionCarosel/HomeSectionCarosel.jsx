import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';
import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; // Make sure this import is included
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';


const HomeSectionCarosel = ({data , sectionName}) => {
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const items = data.slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);

    return (
        <div className="border ">
            <h2  className=' text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className="relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls 
                    responsive={responsive}
                    disableDotsControls
                />
                <Button 
                    onClick={slidePrev} 
                    sx={{ 
                        position: 'absolute', 
                        top: '8rem', 
                        left: '0rem', 
                        transform: 'translateX(-50%) rotate(-90deg)', 
                        bgcolor: 'white' 
                    }} 
                    variant="contained" 
                    className="z-50 bg-white" 
                    aria-label="prev"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
                <Button 
                    onClick={slideNext} 
                    sx={{ 
                        position: 'absolute', 
                        top: '8rem', 
                        right: '0rem', 
                        transform: 'translateX(50%) rotate(90deg)', 
                        bgcolor: 'white' 
                    }} 
                    variant="contained" 
                    className="z-50 bg-white" 
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarosel;
