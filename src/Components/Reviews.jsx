const Reviews = () => {
    const companies = [
      { name: "ai-right", url: "https://i.ibb.co.com/JKd7Wnf/ai-right.webp" },
      { name: "ey", url: "https://i.ibb.co.com/P6htQBP/ey.jpg" },
      { name: "cisco", url: "https://i.ibb.co.com/1RvDVkN/cisco.jpg" },
      { name: "vmware", url: "https://i.ibb.co.com/tCXDXM2/vmware.jpg" },
      { name: "citadel", url: "https://i.ibb.co.com/gg5ymnQ/citadel.jpg" },
      { name: "oracle", url: "https://i.ibb.co.com/hmZT39f/oracle.jpg" },
      { name: "slalom", url: "https://i.ibb.co.com/P4f5nZb/slalom.jpg" },
      { name: "uber", url: "https://i.ibb.co.com/x3bNbPW/uber.jpg" },
      { name: "highspot", url: "https://i.ibb.co.com/rGP0wrt/highspot.jpg" },
      { name: "salesforce", url: "https://i.ibb.co.com/Fgsq9gR/salesforce.jpg" },
      { name: "adobe", url: "https://i.ibb.co.com/g6bDJTG/adobe.png" },
      {
        name: "morgan-stanley",
        url: "https://i.ibb.co.com/6bpKn5c/morgan-stanley.jpg",
      },
      {
        name: "wells-fargo",
        url: "https://i.ibb.co.com/N9w2Pwt/wells-fargo.png",
      },
      { name: "dropbox", url: "https://i.ibb.co.com/dWBqdzz/dropbox.png" },
      {
        name: "goldman-sachs",
        url: "https://i.ibb.co.com/b2B9HGG/goldman-sachs.jpg",
      },
      { name: "splunk", url: "https://i.ibb.co.com/jJZMcDM/splunk.jpg" },
      { name: "upwork", url: "https://i.ibb.co.com/87PSSpm/upwork.jpg" },
      { name: "atlassian", url: "https://i.ibb.co.com/TYrtVzs/atlassian.png" },
      { name: "pinterest", url: "https://i.ibb.co.com/5rywk4m/pinterest.jpg" },
      { name: "target", url: "https://i.ibb.co.com/fdVrG11/target.jpg" },
      { name: "tesla", url: "https://i.ibb.co.com/VwQr6d2/tesla.png" },
      { name: "boeing", url: "https://i.ibb.co.com/zbCgTVg/boeing.jpg" },
      { name: "intel", url: "https://i.ibb.co.com/DQb8kZm/intel.png" },
      { name: "starbucks", url: "https://i.ibb.co.com/R0gmpCT/starbucks.jpg" },
      { name: "chewy", url: "https://i.ibb.co.com/bmwj0th/chewy.jpg" },
      { name: "ibm", url: "https://i.ibb.co.com/dm7Ms7J/ibm.jpg" },
      { name: "comcast", url: "https://i.ibb.co.com/6X4rCS1/comcast.jpg" },
      { name: "disney", url: "https://i.ibb.co.com/ZSbDxNP/disney.jpg" },
      { name: "spotify", url: "https://i.ibb.co.com/Kz029GY/spotify.jpg" },
      { name: "apple", url: "https://i.ibb.co.com/G0hyMKf/apple.jpg" },
      { name: "google", url: "https://i.ibb.co.com/84Fb221/google.jpg" },
      { name: "amazon-1", url: "https://i.ibb.co.com/qWJq3nR/amazon-1.jpg" },
      { name: "microsoft", url: "https://i.ibb.co.com/qms7R28/microsoft.png" },
      { name: "amazon", url: "https://i.ibb.co.com/8cgLSQ5/amazon.jpg" },
      {
        name: "dark-blue-logo",
        url: "https://i.ibb.co.com/pyKm3Pc/dark-blue-logo.png",
      },
    ];
  
    return (
      <div className="min-h-screen reviewSection text-center px-5">
       <div className="container mx-auto">
       <h1 className=" pt-[10%] font-extrabold font-serif text-[2rem] md:text-[3rem] max-w-[800px] mx-auto">
          Get referred by employees form 1000+ companies
        </h1>
        <p className="lg:text-xl font-normal max-w-[800px] mx-auto mt-2">
          Our referrer network is thousands strong and growing. Get referred to
          your dream job today, by employees at your dream company.
        </p>
        <div className="grid md:grid-cols-8 grid-cols-4 gap-5 mt-12">
          {companies.map((company,index)=>
              <div key={index} className="flex flex-col items-center bg-zinc-200 text-zinc-700 p-3 rounded-xl shadow-lg font-semibold">
                  <div className="w-[48px] rounded-full">
                  <img src={company.url} alt=""  className="w-full rounded-full"/>
                  </div>
                  <p>{company.name}</p>
                  </div>
          )}
        </div>
       </div>
      </div>
    );
  };
  
  export default Reviews;
  