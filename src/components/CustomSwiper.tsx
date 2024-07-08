import "./CustomSwiper.css"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

export default function CustomSwiper(props:any) {
  return (
    <div>
        <Swiper   
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            
            slidesPerView={"auto"}
            spaceBetween={20}
            navigation
            pagination={{clickable: true,}}
            
            className='pb-8 h-full'>

                {props.listOfElements !==undefined && props.listOfElements.map((element:any)=>{
                    return(
                        <SwiperSlide className='flex justify-center items-center '>
                            {element}
                        </SwiperSlide>
                    )
                })}
        </Swiper>
    </div>
  )
}
