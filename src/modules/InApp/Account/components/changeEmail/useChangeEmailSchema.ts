import * as z from 'zod';

export const useChangeEmailSchema = z
  .object({
    email: z.email('Invalid e-mail'),
    confirmEmail: z.email('Invalid e-mail'),
    currentPassword: z.string('The field is required').min(1, 'The field is required'),
  })
  .superRefine(({ email, confirmEmail }, ctx) => {
    if (email != confirmEmail) {
      ctx.addIssue({
        code: 'custom',
        message: "E-mails don't match",
        path: ['confirmEmail'],
      });
    }
  });

export type typeChangeEmailSchema = z.infer<typeof useChangeEmailSchema>;
