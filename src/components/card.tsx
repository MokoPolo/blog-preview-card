import React from "react";

// interface CardProps {
//   title: string;
//   content: string;
// }

// const Card: React.FC<CardProps> = ({ title, content }) => {
const Card: React.FC = () => {
  return (
    <div
      className="card flex flex-col items-start justify-center bg-white rounded-lg w-[350px] p-4"
      style={{ boxShadow: "5px 5px 1px black" }}
    >
      <img className="rounded-lg" src="./images/illustration-article.svg"></img>
      <p>Learning </p>
      <p>Published 21 Dec 2023</p>
      <p className="font-extrabold text-lg">HTML & CSS foundations</p>
      <p>
        These languages are the backbone of every website, defining structure,
        content, and presentation.{" "}
      </p>
      <div className="flex">
        <img src="./images/image-avatar.webp"></img>
        <div className="flex items-center">
          <span className="">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
