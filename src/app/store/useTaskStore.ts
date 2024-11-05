// store/useUserStore.ts
import { create } from 'zustand';

type User = {
  id: number;
  name: string;
};

type UserStore = {
  users: User[];
  addUser: (name: string) => void;
  deleteUser: (id: number) => void;
  updateUser: (id: number, name: string) => void;
  getUser: (id: number) => User | undefined; // פונקציה לקריאת משתמש לפי ID
};

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],

  addUser: (name: string) =>
    set((state) => ({
      users: [...state.users, { id: Date.now(), name }],
    })),

  deleteUser: (id: number) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),

  updateUser: (id: number, name: string) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, name } : user
      ),
    })),

  getUser: (id: number) => {
    // החזרת המשתמש על פי ה-ID
    return get().users.find((user) => user.id === id);
  },
}));
