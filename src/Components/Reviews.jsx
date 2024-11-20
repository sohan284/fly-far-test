import axios from 'axios';
import baseUrl from '../api/baseUrl';
import Rating from './Rating';
import { useQuery } from '@tanstack/react-query';

const Reviews = () => {
  const {
    data = [],
  } = useQuery({
    queryKey: ["userOrders"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/reviews`);
      return response.data.data;
    },
  });
  return (
    <div className="min-h-[70vh] packageSection text-center px-5 py-10 ">
      <div className="container mx-auto">
        <h1 data-aos="fade-up"  className=" pt-[5%] font-extrabold font-serif text-[2rem] md:text-[3rem] max-w-[800px] mx-auto">
        What Our Customers Are Saying
        </h1>
       
        <p data-aos="fade-up" className="lg:text-xl font-normal max-w-[800px] mx-auto mt-2">
        Dont just take our word for it! Hear from professionals across industries who trust our product. From seamless integrations to exceptional customer support, discover how we’ve helped businesses like yours thrive. See what our users have to say about their experience with us!
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3 mt-12">
         {data?.map((review,index)=> <div data-aos="zoom-in" key={index} className="text-start rounded-lg shadow-xl bg-zinc-100 text-zinc-800 p-8">
            <h3 className="text-2xl font-semibold">{review.name}</h3>
           <p className="text-sm">{review.designation}</p>
           <Rating rating={review.rating}/>
            <p className="text-sm mt-5">
            {review.review}
            </p>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
