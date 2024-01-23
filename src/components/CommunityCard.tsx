import React from "react";

interface Props {
  imagePath: string;
  title: string;
  description: string;
}

function CommunityCard({ imagePath, title, description }: Props) {
  return (
    <div className="flex flex-col items-center w-[300px] py-6 px-8 rounded shadow-lg">
      <div className="flex flex-col gap-4 items-center">
        <div>
          <img className="block" src={imagePath} alt="image" />
        </div>
        <h1 className="text-2xl text-center font-bold text-heading_black">
          {title}
        </h1>
      </div>
      <p className="text-sm font-normal text-text_black text-center">{description}</p>
    </div>
  );
}

export default CommunityCard;
