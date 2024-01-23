import React from "react";
import CommunityCard from "../components/CommunityCard";

function Community() {
  return (
    <section className="px-36 flex flex-col gap-[42px]">
      {/* manage your entire community */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl text-center font-semibold text-heading_black">
            Manage your entire community <br /> in a single system
          </h1>
          <p className="text-base font-normal text-text_black">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex justify-between">
          <CommunityCard
            title="Membership Organisations"
            imagePath="/about/Icon-1.svg"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
          <CommunityCard
            title="National Associations"
            imagePath="/about/Icon-2.svg"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
          <CommunityCard
            title="Clubs And Groups"
            imagePath="/about/Icon.svg"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
        </div>
      </div>
      {/* the unseen spending three years */}
      <div className="flex flex-row justify-between">
        <div className="px-[52px] w-[45%]">
          <img src="/about/Frame 35.png" alt="image" />
        </div>
        <div className="flex flex-col justify-center gap-8 w-[55%]">
          <div className="flex flex-col gap-4 w-[90%]">
            <h1 className="text-4xl font-bold text-heading_black">
              The unseen of spending three <br className=" hidden lg:block"/> years at Pixelgrade
            </h1>
            <p className="text-sm font-normal text-text_black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio
            </p>
          </div>
          <button className="py-[14px] px-8 bg-primary w-fit rounded text-white">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Community;
