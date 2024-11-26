import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import mobile1 from '../assets/phone1.1.png';
import mobile2 from '../assets/phone1.2.png';
import mobile3 from '../assets/phone1.3.png';
import { useState } from 'react';

const SkillSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Initially set to 1 (middle slide)

  // Handle slide change and update the active slide index
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div id='skills' className='skillSection'>
  <div className='max-w-[1000px] mx-auto pb-20'>
         <h1
          data-aos="fade-up"
          className="pt-[8%] text-[#F1E6A8] font-extrabold font-serif text-[32px] max-w-[800px] mx-auto px-3 text-center"
        >
          "Your Skills, Validated and Recognized "
        </h1>
        <p data-aos="fade-up" className="lg:text-xl text-[wheat] font-[300] max-w-[400px] mx-auto mt-2 text-[20px] pb-20 text-center">
        Showcase your expertise with confidence, backed by real-world recognition. Let your skills speak for themselves and stand out in a competitive world.
        </p>
      <Swiper
        spaceBetween={30}
        slidesPerView={3} 
        centeredSlides={true} 
        initialSlide={1} 
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
         <div className='md:h-[600px] h-[300px] md:ml-0 -ml-[75%]'>
         <div
            className={`transition-all duration-300 ${
              activeIndex === 0 ? 'h-[100%] ' : 'h-[60%] mt-[35%]'
            }`}
          >
            <img data-aos="zoom-in" className="h-full object-contain w-full" src={mobile2} alt="Mobile 1" />
          </div>
         </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
         <div className={`md:h-[600px] h-[400px] ${activeIndex === 0 ? ' -mr-[75%] md:mr-0':activeIndex===2 ? '-ml-[75%] md:ml-0' : "m-0"}`}>
         <div
            className={`transition-all duration-300 ${
              activeIndex === 1 ? 'h-[100%] -mx-10 md:mx-0' : 'h-[60%] mt-[35%]'
            }`}
          >
            <img data-aos="zoom-in" className="h-full object-contain w-full" src={mobile1} alt="Mobile 1" />
          </div>
         </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
         <div className='md:h-[600px] h-[300px] md:mr-0 -mr-[75%]'>
         <div
            className={`transition-all duration-300 ${
              activeIndex === 2 ? 'h-[100%]' : 'h-[60%] mt-[35%]'
            }`}
          >
            <img data-aos="zoom-in" className="h-full object-contain w-full" src={mobile3} alt="Mobile 1" />
          </div>
         </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  
  );
};

export default SkillSection;
