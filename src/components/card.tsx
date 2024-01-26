import React from "react";

// interface CardProps {
//   title: string;
//   content: string;
// }

// const Card: React.FC<CardProps> = ({ title, content }) => {
const Card: React.FC = () => {
  return (
    <div
      className="card flex flex-col items-start justify-center bg-white rounded-xl w-[350px] p-4 border border-black"
      style={{ boxShadow: "8px 8px 1px black" }}
    >
      <img className="rounded-lg" src="./images/illustration-article.svg"></img>
      <p>Learning </p>
      <h1>Published 21 Dec 2023</h1>
      <p className="font-extrabold text-lg">HTML & CSS foundations</p>
      <p className="py-3">
        These languages are the backbone of every website, defining structure,
        content, and presentation.{" "}
      </p>
      <div className="flex my-4">
        <img src="./images/image-avatar.webp" className="w-8 h-8" />
        <div className="flex items-center">
          <span className="ml-3 font-bold">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
