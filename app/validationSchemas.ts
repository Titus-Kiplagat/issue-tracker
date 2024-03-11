import { z } from 'zod';

export const issueSchema = z.object({
	title: z.string(),
	description: z.string(),
});
