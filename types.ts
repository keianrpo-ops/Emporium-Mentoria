import { LucideIcon } from 'lucide-react';

export interface ModuleItem {
  title: string;
  items: string[];
}

export interface CourseModule {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  details: string[];
}

export interface PricingPlan {
  title: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}