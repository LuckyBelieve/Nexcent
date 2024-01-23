import React from "react";
import UpdateCard from "../components/UpdateCard";

function Updates() {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col gap-2 items-center px-36">
        <h1 className="text-4xl font-semibold text-heading_black">
          Caring is the new marketing
        </h1>
        <p className="text-base font-normal text-text_black text-center w-[50%]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex justify-between px-36 pt-5 pb-24 ">
        <UpdateCard image="/blog/image 18.png" desc="Creating Streamlined Safeguarding Processes with OneRen"/>
        <UpdateCard image="/blog/image 19.png" desc="What are your safeguarding responsibilities and how can you manage them?"/>
        <UpdateCard image="/blog/image 20.png" desc="Revamping the Membership Model with Triathlon Australia"/>
      </div>
    </section>
  );
}

export default Updates;
