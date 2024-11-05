"use client";
import React from "react";
import Todo from "../types/Todo";
import Link from "next/link";

const Card_Todo = (props: Todo) => {
  const { id, completed, todo, userId } = props;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl">
      <div className="px-6 py-4">
        <h1 className="font-bold text-lg flex mb-2" >completed :  {completed?<p className="text-green-400">true</p>:<p className="text-red-400">false</p>}</h1>
        <p className="text-gray-700 text-base">id:{id}</p>

        <p className="text-gray-700 text-base">{todo}</p>
        <p className="text-gray-700 text-base">{userId}</p>
      </div>
      <Link href={`/pages/${id}`}>
        <div className="px-6 pt-4 pb-2 font-bold bg-blue-500 hover:bg-blue-300">
          click me
        </div>
      </Link>
    </div>
  );
};

export default Card_Todo;
