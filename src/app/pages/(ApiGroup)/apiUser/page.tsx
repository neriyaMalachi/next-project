import { postapi } from "@/app/services/userAction";
import React from "react";
import CardForApi from "@/app/components/CardForApi";
import PostApi from "@/app/types/PostApi";

const page = async () => {
  const data = await postapi();
  const posts: PostApi[] =data.posts

  return (
    <div>
      {posts.map((user) => (
        <div className="" key={user.id}>
          <CardForApi id={user.id} body={user.body} title={user.title} />
        </div>
      ))}
    </div>
  );
};

export default page;
