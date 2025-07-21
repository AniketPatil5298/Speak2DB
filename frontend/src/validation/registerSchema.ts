// src/validation/registerSchema.ts
import { z } from 'zod';

const strongPassword = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[a-z]/, 'Must include at least one lowercase letter')
  .regex(/[A-Z]/, 'Must include at least one uppercase letter')
  .regex(/[0-9]/, 'Must include at least one number')
  .regex(/[^a-zA-Z0-9]/, 'Must include at least one special character');

export const registerSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email'),
    password: strongPassword,
    confirmPassword: strongPassword,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords don’t match',
    path: ['confirmPassword'],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;
