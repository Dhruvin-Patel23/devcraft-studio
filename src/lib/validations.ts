import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .max(20, 'Phone number must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  projectType: z.enum(
    ['WEBSITE', 'WEB_APP', 'SAAS', 'ECOMMERCE', 'API', 'AI', 'OTHER'],
    { required_error: 'Please select a project type' }
  ),
  budget: z
    .enum(['UNDER_25K', 'FROM_25K_TO_50K', 'FROM_50K_TO_1L', 'ABOVE_1L', 'NOT_SURE'])
    .optional(),
  timeline: z
    .string()
    .max(100)
    .optional()
    .or(z.literal('')),
  description: z
    .string()
    .min(20, 'Please provide at least 20 characters describing your project')
    .max(5000, 'Description must be less than 5000 characters'),
  referenceUrl: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Admin schemas
export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  slug: z.string().min(1, 'Slug is required').max(200),
  description: z.string().min(1, 'Description is required'),
  shortDescription: z.string().max(300).optional().or(z.literal('')),
  category: z.enum(['WEB_APP', 'SAAS', 'ECOMMERCE', 'API', 'MOBILE', 'AI', 'OTHER']),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  isFeatured: z.boolean().default(false),
  thumbnail: z.string().optional().or(z.literal('')),
  liveUrl: z.string().url().optional().or(z.literal('')),
  githubUrl: z.string().url().optional().or(z.literal('')),
  problem: z.string().optional().or(z.literal('')),
  solution: z.string().optional().or(z.literal('')),
  features: z.array(z.string()).default([]),
  architecture: z.string().optional().or(z.literal('')),
  implementation: z.string().optional().or(z.literal('')),
  challenges: z.string().optional().or(z.literal('')),
  results: z.string().optional().or(z.literal('')),
  metaTitle: z.string().max(60).optional().or(z.literal('')),
  metaDescription: z.string().max(160).optional().or(z.literal('')),
});

export type ProjectFormData = z.infer<typeof projectSchema>;

export const teamMemberSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  slug: z.string().min(1, 'Slug is required').max(100),
  role: z.string().min(1, 'Role is required').max(100),
  bio: z.string().min(1, 'Bio is required'),
  shortBio: z.string().max(300).optional().or(z.literal('')),
  image: z.string().optional().or(z.literal('')),
  email: z.string().email().optional().or(z.literal('')),
  github: z.string().optional().or(z.literal('')),
  linkedin: z.string().optional().or(z.literal('')),
  twitter: z.string().optional().or(z.literal('')),
  website: z.string().url().optional().or(z.literal('')),
  skills: z.array(z.string()).default([]),
  order: z.number().int().default(0),
  isActive: z.boolean().default(true),
});

export type TeamMemberFormData = z.infer<typeof teamMemberSchema>;

export const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200),
  slug: z.string().min(1, 'Slug is required').max(200),
  excerpt: z.string().max(500).optional().or(z.literal('')),
  content: z.string().min(1, 'Content is required'),
  coverImage: z.string().optional().or(z.literal('')),
  category: z.enum([
    'WEB_DEVELOPMENT', 'SAAS', 'AI', 'ENGINEERING', 'TECHNOLOGY', 'CASE_STUDY', 'TUTORIAL',
  ]),
  status: z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED']).default('DRAFT'),
  isFeatured: z.boolean().default(false),
  authorId: z.string().min(1, 'Author is required'),
  metaTitle: z.string().max(60).optional().or(z.literal('')),
  metaDescription: z.string().max(160).optional().or(z.literal('')),
});

export type BlogPostFormData = z.infer<typeof blogPostSchema>;

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
