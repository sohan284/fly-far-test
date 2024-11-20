import Lottie from 'lottie-react';
import animationData from '../assets/airobot.json'; // Ensure this path is correct

const BannerSection = () => {
  return (
    <div className="min-h-screen bannerSection text-white flex flex-col text-center">
      <h1 className="pt-[5%] font-extrabold font-serif text-[2rem] md:text-[3rem]">
        Refer-AI
      </h1>
      <h2 className="mt-[1%] font-bold md:text-[2rem] text-[1.5rem] text-wrap">
        Request job referrals in seconds
      </h2>
   <div className='flex justify-center'>
   <div className="rounded-full w-[80%] flex justify-center">
        <Lottie animationData={animationData} loop={true}  />
      </div>
   </div>
    </div>
  );
};

export default BannerSection;
