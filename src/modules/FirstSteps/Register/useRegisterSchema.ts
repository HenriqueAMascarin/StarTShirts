import * as z from 'zod';

export const useRegisterSchema = z
  .object({
    password: z
      .string('Use 8 characters or more for your password')
      .min(8, 'Use 8 characters or more for your password'),
    confirmPassword: z
      .string('Use 8 characters or more for your password')
      .min(8, 'Use 8 characters or more for your password'),
    firstName: z.string('The field is required').min(1, 'The field is required'),
    lastName: z.string('The field is required').min(1, 'The field is required'),
    email: z.email('Invalid e-mail').min(1, 'Invalid e-mail'),
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
