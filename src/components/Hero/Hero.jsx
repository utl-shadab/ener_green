import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import gsap from 'gsap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import './hero.css';

// const Hero = () => {
//     const [items, setItems] = useState([]);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animating, setAnimating] = useState(false);
//     const carouselRef = useRef(null);

//     useEffect(() => {
//         const fetchItems = async () => {
//             try {
//                 const response = await axios.get('YOUR_API_ENDPOINT'); // Replace with your API endpoint
//                 setItems(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchItems();
//     }, []);

//     const next = () => {
//         if (animating || items.length === 0) return;
//         const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//         setActiveIndex(nextIndex);
//     };

//     const previous = () => {
//         if (animating || items.length === 0) return;
//         const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//         setActiveIndex(nextIndex);
//     };

//     const goToIndex = (newIndex) => {
//         if (animating || items.length === 0) return;
//         setActiveIndex(newIndex);
//     };

//     useEffect(() => {
//         gsap.to(carouselRef.current, { duration: 1, x: -activeIndex * 100 + '%', ease: 'power4.out' });
//     }, [activeIndex]);

//     const slides = items.map((item, index) => {
//         return (
//             <CarouselItem
//                 key={index}
//             >
//                 <img src={item.src} alt={item.altText} className="d-block w-100" />
//                 <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
//                     <h3 className='display-2 text-light mb-5'>{item.caption}</h3>
//                     <div className="buttons">
//                         <a href="/" className="btn btn-primary py-2 px-4 me-2">{item.button1Text}</a>
//                         <a href="/" className="btn btn-light py-2 px-4 ms-2">{item.button2Text}</a>
//                     </div>
//                 </div>
//             </CarouselItem>
//         );
//     });

//     return (
//         <div className="hero-container">
//             <Carousel
//                 activeIndex={activeIndex}
//                 next={next}
//                 previous={previous}
//                 innerRef={carouselRef}
//                 interval={false} // Disable auto slide
//             >
//                 <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
//                 {slides}
//                 <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//                 <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//             </Carousel>
//         </div>
//     );
// };

const Hero = () => {

    const [bannerItem, setBannerItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const fetchItems = async () => {
            const baseUrl = "http://3.111.159.31:3411/api/user"
            try {
                const response = await axios.get(`${baseUrl}/banner/list`);
                setBannerItem(...response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchItems();
    }, []);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return(
        <section className='hero_area' style={{padding: "0", height:"100%"}}>
            {(loading || !imageLoaded) && (
                <div className="shimmer-wrapper">
                    <div className="shimmer"></div>
                </div>
            )}
            {bannerItem && (
                <img
                    src={bannerItem.bannerImg}
                    alt={bannerItem.title}
                    style={{ maxWidth: "100%", display: imageLoaded ? 'block' : 'none' }}
                    onLoad={handleImageLoad}
                />
            )}
        </section>
    )
}

export default Hero;
