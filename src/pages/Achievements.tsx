import React from "react";
import Stats from "../components/Stats";
import { FaArrowRight } from "react-icons/fa6";

function Achievements() {
  return (
    <section className="py-12 flex flex-col gap-12">
      {/* achievements */}
      <div className="py-16 flex flex-col lg:flex-row gap-20 bg-bg_gray px-5 md:px-20  lg:px-36">
        <div className="flex flex-col gap-2 justify-center lg:w-[46%]">
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
      <div className="flex flex-col md:flex-row justify-between px-5 md:px-20 lg:px-36">
        <div className="md:w-[45%] flex justify-center">
          <img src="/howto/pana.png" alt="image" className="md:w-full" />
        </div>
        <div className="flex flex-col justify-center gap-8 md:w-[55%]">
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

      {/* customers */}
      <div className="flex flex-col md:flex-row justify-between px-5 md:px-20 lg:px-36 bg-bg_gray py-8">
        <div className="md:w-[35%] flex justify-center">
          <img src="/howto/image 9.png" alt="image" />
        </div>
        <div className="flex flex-col gap-8 md:w-[65%]">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-normal text-text_black">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <div className="flex flex-col gap-2">
              <h1 className="text-[20px] font-semibold text-primary">
                Tim Smith
              </h1>
              <p className="text-sm font-normal text-text_black">
                British Dragon Boat Racing Association
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center whitespace-nowrap">
            <div className="flex flex-row gap-10">
              <div className="hidden lg:block">
                <img src="/clients/Logo-1.svg" alt="Logo-1" />
              </div>
              <div className="hidden lg:block">
                <img src="/clients/Logo-2.svg" alt="Logo-1" />
              </div>
              <div className="hidden lg:block">
                <img src="/clients/Logo-3.svg" alt="Logo-1" />
              </div>
              <div>
                <img src="/clients/Logo-4.svg" alt="Logo-1" />
              </div>
              <div>
                <img src="/clients/Logo-5.svg" alt="Logo-1" />
              </div>
              <div>
                <img src="/clients/Logo-6.svg" alt="Logo-1" />
              </div>
            </div>
            <button className="p-8 flex gap-2 items-center text-primary">
              Meet all customers <FaArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
