import axios from "axios";
import baseUrl from "../api/baseUrl";
import Rating from "./Rating";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer"; // Import the hook

const Reviews = () => {
  const { data = [] } = useQuery({
    queryKey: ["userOrders"],
    queryFn: async () => {
      const response = await axios.get(`${baseUrl}/reviews`);
      return response.data.data;
    },
  });

  // Intersection observer hooks for triggering animations
  const { ref: refersRef, inView: refersInView } = useInView({
    triggerOnce: true, // Trigger only once when the element comes into view
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  const { ref: companiesRef, inView: companiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div id="reviews" className="min-h-screen reviewSection text-center px-5 py-10 ">
      <div className="container mx-auto">
        <h1
          data-aos="fade-up"
          className="pt-[8%] text-[#F1E6A8] font-extrabold font-serif text-[32px] max-w-[800px] mx-auto"
        >
          "Scaling Excellence, Elevating Success"
        </h1>
        <div
          className="grid mx-auto max-w-[1000px] grid-cols-1 sm:grid-cols-2 gap-10 text-zinc-200 bg-transparent py-12 mb-20 px-6"
          ref={refersRef} // Attach ref to the "Refers" section
        >
          {/* Refers Section */}
          <div
            className="bg-[#4747472a] p-6 rounded-3xl shadow-2xl transform transition-all hover:scale-105"
            data-aos="fade-up"
          >
            <p data-aos="fade-up" className="text-lg font-semibold text-[wheat] uppercase tracking-wider">
              Refers
            </p>
            <h1  className="text-6xl font-extrabold text-[#F1E6A8] mt-2">
              {/* Play the count-up only when it's in view */}
              {refersInView && <CountUp end={10} delay={1} />}k
              <span className=" text-4xl">+</span>
            </h1>
            <p data-aos="fade-up" className="text-lg mt-4 text-[20px] font-[300] text-[wheat] opacity-80">
              We've successfully managed over 10,000 referrals, demonstrating
              our extensive experience and commitment to delivering high-quality
              services with precision and care.
            </p>
          </div>

          {/* Companies Section */}
          <div
            className="bg-[#4747472a] p-6 rounded-3xl shadow-2xl transform transition-all hover:scale-105"
            ref={companiesRef} // Attach ref to the "Companies" section
            data-aos="fade-up"
          >
            <p data-aos="fade-up" className="text-lg font-semibold text-[wheat] uppercase tracking-wider">
              Companies
            </p>
            <h1 className="text-6xl font-extrabold text-[#F1E6A8] mt-2">
              {/* Play the count-up only when it's in view */}
              {companiesInView && <CountUp end={1000} delay={1} />}+
            </h1>
            <p data-aos="fade-up" className="text-[20px] font-[300] mt-4 text-[wheat] opacity-80">
              We proudly serve over 1000+ companies worldwide, providing
              exceptional support and tailored solutions that exceed
              expectations and foster long-lasting relationships.
            </p>
          </div>
        </div>

        <h1
          data-aos="fade-up"
          className="pt-[5%] font-extrabold text-[#F1E6A8] font-serif text-[32px] max-w-[700px] mx-auto"
        >
          What Our Customers Are Saying
        </h1>

        <p
          data-aos="fade-up"
          className="text-[20px] text-[wheat] font-[300] max-w-[700px] px-3 mx-auto mt-2"
        >
          Don't just take our word for it! Hear from professionals across
          industries who trust our product. From seamless integrations to
          exceptional customer support, discover how we’ve helped businesses
          like yours thrive. See what our users have to say about their
          experience with us!
        </p>
        <Marquee speed={30} className="mt-12">
          {data?.map((review, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="text-start h-[300px] w-[250px] mx-5 overflow-hidden rounded-lg shadow-xl bg-[#4747472a] text-white p-5"
            >
              <h3 className="text-[20px] font-semibold text-[#F1E6A8]">{review.name}</h3>
              <p className="text-sm text-[wheat]">{review.designation}</p>
              <Rating rating={review.rating} />
              <p className="text-[16px] font-[300] mt-5 text-[wheat]">{review.review}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
