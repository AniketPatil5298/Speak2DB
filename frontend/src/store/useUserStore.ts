import { create } from 'zustand';

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
