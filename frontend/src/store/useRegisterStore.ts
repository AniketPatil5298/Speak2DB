// src/store/useRegisterStore.ts
import { create } from 'zustand';

interface RegisterState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  setField: (field: string, value: string) => void;
  reset: () => void;
}

export const useRegisterStore = create<RegisterState>((set) => ({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  reset: () =>
    set({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }),
}));
