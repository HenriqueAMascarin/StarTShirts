import * as z from 'zod';

export const useChangeEmailSchema = z
  .object({
    email: z.email('Invalid e-mail'),
    confirmEmail: z.email('Invalid e-mail'),
    currentPassword: z.string().min(1, { message: 'The field is required' }),
  })
  .superRefine(({ email, confirmEmail }, ctx) => {
    if (email != confirmEmail) {
      ctx.addIssue({
        code: 'custom',
        message: "Emails don't match",
        path: ['confirmEmail'],
      });
    }
  });

export type typeChangeEmailSchema = z.infer<typeof useChangeEmailSchema>;
