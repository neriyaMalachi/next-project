/* eslint-disable react-hooks/rules-of-hooks */
import Card_Todo from "@/app/components/Card_Todo";
import { getUser } from "@/app/services/userAction";
// import PostView from "@/app/types/Post";
import Link from "next/link";
import React from "react";

const postPage = async (params:string) => {
  const  postId = params;
  const { id, completed, todo, userId } = await getUser(postId);
  return (
    <div className="flex flex-col justify-evenly items-center h-[80vh] ">
      <Card_Todo id={id} completed={completed} todo={todo} userId={userId} />
      <Link href={'/pages'} className="p-3 bg-red-500 rounded-md text-red-100 hover:bg-red-100 hover:text-red-500 " >חזור</Link>
    </div>
  );
};

export default postPage;
