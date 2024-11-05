import React from "react";
import Todo from "@/app/types/Todo";
import { getUsers } from "@/app/services/userAction";
import Card_Todo from "@/app/components/Card_Todo";
const page = async () => {
  const Todos: Todo[] = await getUsers();
  console.log(Todos);
  
  return (
    <div>
      <h1>todo List</h1>
      <ul>
        {Todos.map((todoItem) => (
          <div className="" key={todoItem.id}>
            <Card_Todo
              id={todoItem.id}
              todo={todoItem.todo}
              completed={todoItem.completed}
              userId={todoItem.userId}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default page;
