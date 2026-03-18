import * as z from 'zod';

export const usePasswordResetSchema = z
  .object({
    password: z
      .string('Use 8 characters or more for your password')
      .min(8, 'Use 8 characters or more for your password'),
    confirmPassword: z
      .string('Use 8 characters or more for your password')
      .min(8, 'Use 8 characters or more for your password'),
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
