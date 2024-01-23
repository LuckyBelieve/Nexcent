import React from "react";
import Stats from "../components/Stats";

function Achievements() {
  return (
    <section className="py-12 flex flex-col gap-12">
      {/* achievements */}
      <div className="py-16 flex gap-20 bg-bg_gray  px-36">
        <div className="flex flex-col gap-2 justify-center w-[46%]">
          <h1 className="text-4xl font-bold text-heading_black">
            Helping a local <br />
            <span className="text-primary">business reinvent itself</span>
          </h1>
          <p className="text-sm font-normal text-text_black">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex flex-col gap-10 w-[40%]">
          <div className="flex justify-between">
            <Stats icon="/howto/Icon.svg" number="2,245,341" title="Members" />
            <Stats icon="/howto/Icon-1.svg" number="46,328" title="Clubs" />
          </div>
          <div className="flex justify-between">
            <Stats
              icon="/howto/Icon-2.svg"
              number="2,245,341"
              title="Members"
            />
            <Stats icon="/howto/Icon-3.svg" number="46,328" title="Clubs" />
          </div>
        </div>
      </div>

      {/* unlock */}
      <div className="flex flex-row justify-between  px-36">
        <div className="w-[45%]">
          <img src="/howto/pana.png" alt="image" />
        </div>
        <div className="flex flex-col justify-center gap-8 w-[55%]">
          <div className="flex flex-col gap-4 w-[90%]">
            <h1 className="text-4xl font-bold text-heading_black">
              How to design your site footer like we did
            </h1>
            <p className="text-sm font-normal text-text_black">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          <button className="py-[14px] px-8 bg-primary w-fit rounded text-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
