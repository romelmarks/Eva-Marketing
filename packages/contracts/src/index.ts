import { z } from "zod";

export const SystemVersionSchema = z.object({
  data: z.object({
    name: z.literal("eva-marketing"),
    version: z.string().min(1),
  }),
});
export type SystemVersion = z.infer<typeof SystemVersionSchema>;

export const ProblemDetailsSchema = z.object({
  type: z.string(),
  title: z.string(),
  status: z.number().int().min(400).max(599),
  detail: z.string().optional(),
  requestId: z.string().optional(),
  code: z.string().optional(),
});
export type ProblemDetails = z.infer<typeof ProblemDetailsSchema>;
