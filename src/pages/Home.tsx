import React from "react";

function Home() {
  return (
    <section id="home" className=" py-24 px-36">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-4 ">
            <h1 className=" text-6xl font-semibold text-heading_black" style={{lineHeight:"76px"}}>
              Lessons and insights <br />
              <span className="text-primary"> from 8 years</span>
            </h1>
            <p className="text-base font-normal text-text_black">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <button className="py-[14px] px-8 bg-primary rounded w-fit text-white">Register</button>
        </div>
        <div className="">
            <img src="/home/Illustration.png" alt="home_image" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Home;
