import * as z from 'zod';

export const useRegisterSchema = z
  .object({
    password: z.string().min(1, {message: 'Required'}),
    confirmPassword: z.string().min(1, {message: 'Required'}),
    firstName: z.string().min(1, {message: 'Required'}),
    lastName: z.string().min(1, {message: 'Required'}),
    email: z.string().email('Invalid e-mail'),
  }).superRefine(({password, confirmPassword}, ctx) => {
    if (password != confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Passwords don't match`,
        path: ['confirmPassword'],
      });
    }
  });

export type typeRegisterSchema = z.infer<typeof useRegisterSchema>;
