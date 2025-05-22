// Common Types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.FC;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.FC;
  color: string;
  delay?: number;
}

export interface Testimonial {
  id: number;
  content: string;
  author: {
    name: string;
    title: string;
    initials: string;
  };
}