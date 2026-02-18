import * as z from 'zod';

export const useRegisterSchema = z
  .object({
    password: z.string().min(8, { message: 'Use 8 characters or more for your password' }),
    confirmPassword: z.string().min(8, { message: 'Use 8 characters or more for your password' }),
    firstName: z.string().min(1, { message: 'The field is required' }),
    lastName: z.string().min(1, { message: 'The field is required' }),
    email: z.email('Invalid e-mail'),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password != confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: "Passwords don't match",
        path: ['confirmPassword'],
      });
    }
  });

export type typeRegisterSchema = z.infer<typeof useRegisterSchema>;
