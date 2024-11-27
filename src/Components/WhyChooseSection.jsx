import { CgProfile } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
const WhyChooseSection = () => {
  const features = [
    {
      id: 1,
      icon: <CgProfile style={{ fontSize: "60px", color: "#21c58a",padding:'2px',backgroundColor:'0000d5',borderRadius:'10px' }} />,
      title: "Best fit",
      description: "Get the best candidates for your job post",
    },
    {
      id: 2,
      icon: <FaComputer style={{ fontSize: "60px", color: "#25b6ad",padding:'5px',backgroundColor:'#0000d5',borderRadius:'10px' }}  />,
      title: "Easy to use",
      description: "Hassle-free selection process using GMR User Interface",
    },
    {
      id: 3,
      icon: <MdOutlinePrivacyTip style={{ fontSize: "60px", color: "#25b6ad",padding:'5px',backgroundColor:'#0000d5',borderRadius:'10px' }} />,
      title: "Protect your privacy",
      description: "Only let people know whom you want to help",
    },
    {
      id: 4,
      icon: <IoCheckmarkDoneCircle style={{ fontSize: "60px", color: "#22be99",padding:'5px',backgroundColor:'#0000d5',borderRadius:'10px' }} />,
      title: "Trust matters",
      description: "Connect with verified employees",
    },
    {
      id: 5,
      icon: <IoCopyOutline style={{ fontSize: "60px", color: "#25b6ad",padding:'5px',backgroundColor:'#0000d5',borderRadius:'10px' }} />,
      title: "Getmereferred Campaign",
      description: "Reach your target audience in no time",
    },
    {
      id: 4,
      icon: <ImProfile style={{ fontSize: "60px", color: "#25b6ad",padding:'5px',backgroundColor:'#0000d5',borderRadius:'10px' }} />,
      title: "Personalized Recommendations",
      description: "Get personalized refferals and job posts based on",
    },
  ];

  return (
    <div className="container rounded-xl mx-auto mt-10 p-3">
    <div className="bg-[#237c7893] rounded-xl p-5 py-10">
    <h1
        data-aos="fade-up"
        className=" text-[#111111] font-extrabold title max-w-[1000px] mx-auto px-3 text-center "
      >
        Why Choose Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
        {features.map(({ id, icon, title, description }) => (
          <div data-aos="fade-up" key={id} className="text-center mx-auto">
            <div className="flex justify-center ">{icon}</div>
            <h3 className="text-[24px] text-[#333333] font-semibold">{title}</h3>
            <p className="text-[20px] font-[300] text-[#444444]  mx-auto">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WhyChooseSection;
