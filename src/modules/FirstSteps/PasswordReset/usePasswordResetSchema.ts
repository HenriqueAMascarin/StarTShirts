import * as z from 'zod';

export const usePasswordResetSchema = z
  .object({
    password: z.string().min(8, { message: 'Use 8 characters or more for your password' }),
    confirmPassword: z.string().min(8, { message: 'Use 8 characters or more for your password' }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords doesn’t match',
        path: ['confirmPassword'],
      });
    }
  });

export type typePasswordResetSchema = z.infer<typeof usePasswordResetSchema>;
