export interface NavItem {
  id: string;
  label: string;
  href: string;
  isNew?: boolean;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface ClientLogo {
  name: string;
  category: string;
}

export type ShowcaseTab = 'analitik' | 'otomasi' | 'kolaborasi' | 'keamanan';
