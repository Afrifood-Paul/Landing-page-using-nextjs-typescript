"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { products } from '@/scripts/products';
import ProductCard from './ProductCard';

function ProductSlides() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper pt-4 mt-10 px-10"
        >
            {
                products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
}

export default ProductSlides