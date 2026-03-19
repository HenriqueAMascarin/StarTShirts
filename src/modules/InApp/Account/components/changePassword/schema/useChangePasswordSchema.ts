import * as z from 'zod';

export const useChangePasswordSchema = z
  .object({
    password: z
      .string('Must have at least 8 characters')
      .min(8, 'Must have at least 8 characters'),
    confirmPassword: z
      .string('Must have at least 8 characters')
      .min(8, 'Must have at least 8 characters'),
    currentPassword: z.string('The field is required').min(1, 'The field is required'),
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

export type typeChangePasswordSchema = z.infer<typeof useChangePasswordSchema>;
