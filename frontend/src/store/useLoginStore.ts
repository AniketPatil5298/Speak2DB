import { create } from 'zustand';
import { LoginSchemaType } from '../validation/loginSchema';

type LoginStore = {
  fields: LoginSchemaType;
  errors: Partial<Record<keyof LoginSchemaType, string>>;
  setField: (field: keyof LoginSchemaType, value: string) => void;
  setErrors: (errors: Partial<Record<keyof LoginSchemaType, string>>) => void;
  reset: () => void;
};

export const useLoginStore = create<LoginStore>((set) => ({
  fields: {
    email: '',
    password: '',
  },
  errors: {},
  setField: (field, value) =>
    set((state) => ({
      fields: {
        ...state.fields,
        [field]: value,
      },
    })),
  setErrors: (errors) => set({ errors }),
  reset: () =>
    set({
      fields: {
        email: '',
        password: '',
      },
      errors: {},
    }),
}));
