import * as z from 'zod';

export const usePasswordResetSchema = z
  .object({
    password: z
      .string('Must have at least 8 characters')
      .min(8, 'Must have at least 8 characters'),
    confirmPassword: z
      .string('Must have at least 8 characters')
      .min(8, 'Must have at least 8 characters'),
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
