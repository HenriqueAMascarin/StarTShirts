import * as z from 'zod';

export const useRegisterSchema = z
  .object({
    password: z
      .string('Must have at least 8 characters')
      .min(8, 'Must have at least 8 characters'),
    confirmPassword: z
      .string('Must have at least 8 characters')
      .min(8, 'Must have at least 8 characters'),
    firstName: z.string('The field is required').min(1, 'The field is required'),
    lastName: z.string('The field is required').min(1, 'The field is required'),
    email: z.email('Invalid e-mail').min(1, 'Invalid e-mail'),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password != confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: "Passwords doesn’t match",
        path: ['confirmPassword'],
      });
    }
  });

export type typeRegisterSchema = z.infer<typeof useRegisterSchema>;
