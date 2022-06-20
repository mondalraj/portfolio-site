import React, { useState } from "react";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

const Testimonials = () => {

    const [activeIndex, setActiveIndex] = useState(0);

  const testimonies = [
    {
      id: 0,
      name: "Abhishek Paatni",
      designation: "Freelancer",
      image_url:
        "https://media-exp1.licdn.com/dms/image/C4D03AQH9uJJ-d0l9qg/profile-displayphoto-shrink_800_800/0/1646657897595?e=1661385600&v=beta&t=hTSbcFkR9IOF6oDH7Hm1vF_TweB-ucFoVG-OZfe75Yw",
      linkedin_url: "https://www.linkedin.com/in/thepaatni/",
      twitter_url: "https://twitter.com/thepaatni",
      content:
        "Rajib and I worked together on several projects. He consistently gave 100 percent effort to the team and played a significant role in ensuring that we completed tasks on time.He had excellent time management skills and always comes up with some productive ideas during intense crunch periods. I'm very glad that I have got to know about him in person.",
    },
    {
      id: 1,
      name: "Udit Katyal",
      designation: "Software Engineer",
      image_url:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEK5nuz-ZAcyQ/profile-displayphoto-shrink_400_400/0/1651905085311?e=1661385600&v=beta&t=9nv-XSKEIwBT4SQ4JrSgfCgJg3hEYcEI7vlj51DR4-g",
      linkedin_url: "https://www.linkedin.com/in/udit-katyal/",
      twitter_url: "",
      content:
        "Rajib is an extremely talented and helpful person. He has an amazing grasp of wide domain of techs. I have worked with him on a couple of projects and his excellent at managing and building products! Always there to guide and teach you when in need.",
    },
    {
      id: 2,
      name: "Shubham Jain",
      designation: "Web Developer",
      image_url:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGwOnJVMMgbgA/profile-displayphoto-shrink_400_400/0/1641923399863?e=1661385600&v=beta&t=oaWhSPLORw-nBHA5HOLdNbCa_MulVFJgaKquQZFmQlU",
      linkedin_url: "https://www.linkedin.com/in/jain-shubhamdev/",
      twitter_url: "",
      content:
        "We’ve joined our hands on several projects, and Rajib is one of the best people I had as a partner. I highly recommend his expertise to any person looking for an Computer Science engineer. He is the most profound person I have met, and his ability to tackle any problem is remarkable and with a warm smile. Rajib Mondal would become an appreciated member of any team.",
    },
  ];
  return (
    <section className="h-screen max-width mx-auto pt-14 flex flex-col justify-center items-center">
      <h2 className="text-center text-white-50 text-6xl font-bold">
        What Others Say About Me
      </h2>
      <div className="h-1 w-56 bg-accent rounded-sm my-4" />
      <div className="h-max w-3/4 p-6 bg-white/60 rounded-md backdrop-blur-sm flex justify-between items-stretch">
        <div className="w-3/4 min-h-[360px] flex flex-col justify-between">
          <div className="flex gap-4 items-center">
            <img
              src={testimonies[activeIndex].image_url}
              alt={testimonies[activeIndex].name}
              className="w-16 rounded-full"
            />
            <h3 className="uppercase text-xl font-semibold">
              {testimonies[activeIndex].name}
            </h3>
          </div>
          <p className="pr-12 py-6 tracking-wide text-lg">{testimonies[activeIndex].content}</p>
          <div>
          <h4 className="italic text-xl">{testimonies[activeIndex].designation}</h4>
          <div className="text-4xl flex items-center">
            {
                testimonies[activeIndex].linkedin_url && <a href={testimonies[activeIndex].linkedin_url} target="_blank">
                    <TiSocialLinkedinCircular />
                </a>
            }
            {
                testimonies[activeIndex].twitter_url && <a href={testimonies[activeIndex].twitter_url} target="_blank">
                    <TiSocialTwitterCircular />
                </a>
            }
            
            
          </div>
          </div>
        </div>
        <div className="w-1/4 border-l-2 px-2 bg-black/60 rounded-md">
          {testimonies.map((testimonie, index) => {
            return (
              <div className={`${activeIndex === index ? '' : 'grayscale opacity-50'} flex gap-2 items-center py-3 cursor-pointer`} key={index} onClick={()=> setActiveIndex(index)}>
                <img
                  src={testimonie.image_url}
                  alt={testimonie.name}
                  className="w-8 rounded-full"
                />
                <h4 className="text-lg font-normal text-white">{testimonie.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
