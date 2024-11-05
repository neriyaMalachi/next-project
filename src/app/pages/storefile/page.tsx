'use client';
import React, { useState } from 'react';
import { useUserStore } from '@/app/store/useTaskStore'; // ודא שהנתיב מעודכן

const UsersPage: React.FC = () => {
    // קח את הפונקציות והמשתנים מה-store
    const { addUser, deleteUser, updateUser, users } = useUserStore();
    const [newUserName, setNewUserName] = useState('');
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [editingUserName, setEditingUserName] = useState('');

    const handleAddUser = () => {
        if (newUserName.trim()) {
            addUser(newUserName); // הוסף משתמש חדש
            setNewUserName(''); // נקה את השדה לאחר ההוספה
        }
    };

    const handleUpdateUser = (id: number) => {
        if (editingUserName.trim()) {
            updateUser(id, editingUserName); // עדכן את שם המשתמש
            setEditingUserId(null); // סיים את מצב העריכה
            setEditingUserName(''); // נקה את שדה העריכה
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Users List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    placeholder="Enter user name"
                    className="flex-grow border border-gray-300 rounded p-2 mr-2"
                />
                <button
                    onClick={handleAddUser}
                    className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                >
                    Add User
                </button>
            </div>
            <div className="bg-gray-100 rounded p-4">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user.id} className="flex justify-between items-center mb-2 p-2 bg-white rounded shadow">
                            {editingUserId === user.id ? (
                                <input
                                    type="text"
                                    value={editingUserName}
                                    onChange={(e) => setEditingUserName(e.target.value)}
                                    className="flex-grow border border-gray-300 rounded p-2 mr-2"
                                />
                            ) : (
                                <h2 className="text-lg">{user.name}</h2>
                            )}
                            <div className="flex space-x-2">
                                {editingUserId === user.id ? (
                                    <button
                                        onClick={() => handleUpdateUser(user.id)}
                                        className="bg-green-500 text-white rounded p-1 hover:bg-green-600"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setEditingUserId(user.id);
                                            setEditingUserName(user.name);
                                        }}
                                        className="bg-yellow-500 text-white rounded p-1 hover:bg-yellow-600"
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="bg-red-500 text-white rounded p-1 hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No users found.</p>
                )}
            </div>
        </div>
    );
};

export default UsersPage;
