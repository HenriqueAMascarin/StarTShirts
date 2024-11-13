import * as z from 'zod';

export const useResetSecondSchema = z
  .object({
    password: z.string().min(1, {message: 'Required'}),
    confirmPassword: z.string().min(1, {message: 'Required'}),
  }).superRefine(({password, confirmPassword}, ctx) => {
    if (password != confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Passwords don't match`,
        path: ['confirmPassword'],
      });
    }
  });

export type TypeResetSecondFormSchema = z.infer<typeof useResetSecondSchema>;
