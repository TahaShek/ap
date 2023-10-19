export interface NavItem {
  label?: string;
  icon?: string;
  path?: string;
  roles: Array<'ADMIN' | 'CLIENT'>;
  children?: NavItem[]; // for sub-items
}

export const ADMIN_NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/admin/dashboard', roles: ['ADMIN'] },
  {
    label: 'Assignment',
    path: '/admin/assignment',
    roles: ['ADMIN'],
    children: [
      { label: 'Sub-item 1', path: '/admin/sub-item1', roles: ['ADMIN'] },
      // ... Add more sub-items here
    ],
  },

  // ... Add more admin-specific items here
];

export const CLIENT_NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/client/dashboard', roles: ['CLIENT'] },
  { label: 'Assignment', path: '/client/assignment', roles: ['CLIENT'] },
  { label: 'Valuation Reports', path: '/client/assignment', roles: ['CLIENT'] },
  { label: 'Proposal Request', path: '/client/assignment', roles: ['CLIENT'] },
  { label: 'Propsals', path: '/client/assignment', roles: ['CLIENT'] },
  { label: 'Invoices', path: '/client/assignment', roles: ['CLIENT'] },
  { label: 'Users', path: '/client/assignment', roles: ['CLIENT'] },
  { label: 'Applicant', path: '/client/assignment', roles: ['CLIENT'] },
  { icon: 'bx bxs-log-out', roles: ['CLIENT'] },

  // ... Add more client-specific items here
];
