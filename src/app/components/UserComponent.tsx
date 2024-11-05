'use client'
// components/UserComponent.tsx
import React, { useState } from 'react';
import { useUserStore } from '../store/useTaskStore'

export default function UserComponent() {
  const [name, setName] = useState('');
  const users = useUserStore((state) => state.users);
  const addUser = useUserStore((state) => state.addUser);
  const deleteUser = useUserStore((state) => state.deleteUser);

  const handleAddUser = () => {
    //trim מסיר רווחים מיותרים
    if (name.trim()) {
      addUser(name);
      setName(''); // איפוס השם אחרי הוספה
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">User List</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        className="border p-2 mb-4"
      />
      <button onClick={handleAddUser} className="bg-blue-500 text-white px-4 py-2 mb-4">
        Add User
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2 flex justify-between">
            {user.name}
            <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-2 py-1">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
