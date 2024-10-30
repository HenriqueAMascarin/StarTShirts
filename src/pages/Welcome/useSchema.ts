import * as z from 'zod';

export const useSchema = z.object({
  firstName: z.string().min(1, {message: 'Required'}),
  lastName: z.string().min(1, {message: 'Required'}),
  email: z.string().min(1, {message: 'Required'}),
  password: z.string().min(1, {message: 'Required'}),
  confirmPassword: z.string().min(1, {message: 'Required'}),
});
