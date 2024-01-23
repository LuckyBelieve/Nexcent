import React from "react";
import CommunityCard from "../components/CommunityCard";

function Community() {
  return (
    <section className="px-36 flex flex-col gap-8">
      {/* manage your entire community */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl font-semibold text-heading_black">
            Manage your entire community in a single system
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
            title="Membership Organisations"
            imagePath="/about/Icon-1.svg"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
           <CommunityCard
            title="Membership Organisations"
            imagePath="/about/Icon-1.svg"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
        </div>
      </div>
    </section>
  );
}

export default Community;
