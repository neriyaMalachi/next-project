"use client";
import { postapi } from "@/app/services/userAction";
import React, { useState, useEffect } from "react";
import CardForApi from "@/app/components/CardForApi";
import PostApiInterface from "@/app/types/PostApi"; // Make sure this type is correctly defined

const Page = () => {
  const [data, setData] = useState<PostApiInterface[]>([]);

  const getData = async () => {
    try {
      const response = await postapi();
      setData(response.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
console.log("data");

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>API USERS</h1>
      {data?.map((user) => (
        <div key={user.id}>
          <CardForApi id={user.id} body={user.body} title={user.title} />
        </div>
      ))}
    </div>
  );
};

export default Page;
