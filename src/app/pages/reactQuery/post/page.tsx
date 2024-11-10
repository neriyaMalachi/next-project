"use client";
// pages/index.tsx
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchPosts } from "@/app/services/userAction";

interface get {
  id: number;
  title: string;
}
const HomePage = () => {
  const { data, error, isLoading }: UseQueryResult<get[], Error> = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    
  });
  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  if (!data) {
    return <div>No posts available</div>;
  }
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: { id: number; title: string }) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
