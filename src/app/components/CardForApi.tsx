"use client";
import React from "react";
import PostApi from "../types/PostApi";

const Card_Todo = (props: PostApi) => {
  const { id, title, body } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl">
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">id:{id}</p>

        <p className="text-gray-700 text-base">{title}</p>
        <p className="text-gray-700 text-base">{body}</p>
      </div>
    </div>
  );
};

export default Card_Todo;
