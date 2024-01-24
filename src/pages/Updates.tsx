import React from "react";
import UpdateCard from "../components/UpdateCard";
import { FaArrowRight } from "react-icons/fa6";

function Updates() {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col gap-2 items-center px-5 md:px-20 lg:px-36">
        <h1 className=" text-2xl lg:text-4xl font-semibold text-heading_black">
          Caring is the new marketing
        </h1>
        <p className="text-base font-normal text-text_black text-center md:w-[50%]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between px-5 md:px-20 lg:px-36 pt-5 pb-24 gap-5 md:gap-0 ">
        <UpdateCard
          image="/blog/image 18.png"
          desc="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <UpdateCard
          image="/blog/image 19.png"
          desc="What are your safeguarding responsibilities and how can you manage them?"
        />
        <UpdateCard
          image="/blog/image 20.png"
          desc="Revamping the Membership Model with Triathlon Australia"
        />
      </div>

      {/* last */}
      <div className="flex flex-col items-center justify-center gap-8 bg-bg_gray py-8">
        <h1 className="text-center text-2xl md:text-3xl lg:text-6xl font-semibold  md:w-[65%] lg:w-[55%] text-heading_black">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className=" px-5 md:px-8 py-2 md:py-4 flex items-center gap-2 bg-primary text-white rounded">Get a Demo <FaArrowRight/></button>
      </div>
    </section>
  );
}

export default Updates;
