import { CRating } from '@coreui/react-pro';
import Rating from './Rating';

const Reviews = () => {
const reviews = [
    {
      "name": "John Doe",
      "designation": "Software Engineer",
      "rating": 4,
      "review": "Great platform with a lot of useful features. Highly recommend for anyone looking to streamline their work process!"
    },
    {
      "name": "Sarah Smith",
      "designation": "Project Manager",
      "rating": 5,
      "review": "Amazing experience! The interface is intuitive and the support team is incredibly responsive. Definitely exceeded my expectations."
    },
    {
      "name": "Michael Brown",
      "designation": "Data Scientist",
      "rating": 4,
      "review": "The tool is very helpful for managing large datasets. However, I think it could use some improvements in terms of data visualization capabilities."
    },
    {
      "name": "Emily White",
      "designation": "Product Designer",
      "rating": 3.6,
      "review": "Good overall, but some of the features are hard to use without a learning curve. Would love to see more tutorials."
    },
    {
      "name": "David Lee",
      "designation": "CEO",
      "rating": 4,
      "review": "Fantastic product that helps my team stay organized and efficient. The integrations with other tools have been a game changer for us."
    },
    {
      "name": "Jessica Taylor",
      "designation": "Marketing Director",
      "rating": 4,
      "review": "Very good platform with useful features, but I would appreciate more advanced reporting options."
    },
    {
      "name": "James Wilson",
      "designation": "CTO",
      "rating": 5,
      "review": "Exceptional service! Their cloud-based solution has helped us scale quickly. Their customer service is top-notch."
    },
    {
      "name": "Olivia Harris",
      "designation": "UX/UI Designer",
      "rating": 3,
      "review": "I like the layout and design of the platform, but there are some bugs that need fixing. Overall, it's a solid choice for teams."
    },
    {
      "name": "Daniel Clark",
      "designation": "Business Analyst",
      "rating": 4,
      "review": "Really impressed with the level of customization available. It has improved our workflow significantly, though the mobile app could be better."
    },
    {
      "name": "Sophia Martinez",
      "designation": "HR Manager",
      "rating": 4,
      "review": "Excellent tool for managing employee performance and reviews. Very easy to use and navigate. A great addition to our HR toolbox."
    }
  ]
  

  return (
    <div className="min-h-[70vh] packageSection text-center px-5 py-10 ">
      <div className="container mx-auto">
        <h1 className=" pt-[5%] font-extrabold font-serif text-[2rem] md:text-[3rem] max-w-[800px] mx-auto">
        What Our Customers Are Saying
        </h1>
       
        <p className="lg:text-xl font-normal max-w-[800px] mx-auto mt-2">
        Don't just take our word for it! Hear from professionals across industries who trust our product. From seamless integrations to exceptional customer support, discover how we’ve helped businesses like yours thrive. See what our users have to say about their experience with us!
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-3 mt-12">
         {reviews?.map((review,index)=> <div key={index} className="text-start rounded-lg shadow-xl bg-zinc-100 text-zinc-800 p-8">
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
