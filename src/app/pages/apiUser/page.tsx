import { postapi } from "@/app/services/userAction";
import React from "react";
import CardForApi from "@/app/components/CardForApi";
import PostApiInderface from "@/app/types/PostApi";

const page = async () => {
  const data = await postapi();
  const posts: PostApiInderface[] = data.data;
  console.log(posts);
  
  return (
    <div>
      <h1>API USERS</h1>
      {posts.map((user) => (
        <div className="" key={user.id}>
          <CardForApi id={user.id} body={user.body} title={user.title} />
        </div>
      ))}
    </div>
  );
};

export default page;
