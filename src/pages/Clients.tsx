import React from "react";

function Clients() {
  return (
    <div className="py-10 px-36 flex flex-col gap-4">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-4xl font-semibold">Our Clients</h1>
        <p className="text-base font-normal">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <img src="/clients/Logo-1.svg" alt="Logo-1" />
        </div>
        <div>
          <img src="/clients/Logo-2.svg" alt="Logo-2" />
        </div>
        <div>
          <img src="/clients/Logo-3.svg" alt="Logo-3" />
        </div>
        <div>
          <img src="/clients/Logo-4.svg" alt="Logo-4" />
        </div>
        <div>
          <img src="/clients/Logo-5.svg" alt="Logo-5" />
        </div>
        <div>
          <img src="/clients/Logo-6.svg" alt="Logo-6" />
        </div>
      </div>
    </div>
  );
}

export default Clients;
