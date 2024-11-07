import { postapi } from "@/app/services/userAction";
import React from "react";
import CardForApi from "@/app/components/CardForApi";
import PostApi from "@/app/types/PostApi";

const page = async () => {
  const data = await postapi();
  const posts: PostApi[] = data.data;
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
