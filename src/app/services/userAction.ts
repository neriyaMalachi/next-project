import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("https://dummyjson.com/todos", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
  return response.data.todos;
};
export const getUser = async (postId: string) => {
  const response = await fetch(`https://dummyjson.com/todos/${postId}`);
  const data = await response.json();

  return data;
};
//post api
export const postapi = async () => {
  const response = await fetch(`http://localhost:3000/api/apigroup`);
  const data = await response.json();
  return data;
};
// services/fetchPosts.ts for React Query
export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};








export const createUser = async (user: { username: string; email: string; password: string }) => {
  const response = await fetch('/api/mongoRoute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    console.error('Error creating user');
    return;
  }

  const data = await response.json();
  console.log('User created:', data);
};

