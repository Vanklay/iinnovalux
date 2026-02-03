export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Réalisations', href: '/realisations' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact', isButton: true },
];

export const footerNavigation = {
  services: [
    { label: 'Montage de meubles', href: '/services/montage-meubles' },
    { label: 'Débarras', href: '/services/debarras' },
    { label: 'Entretien extérieur', href: '/services/entretien-exterieur' },
    { label: 'Petits travaux', href: '/services/petits-travaux' },
    { label: 'Déménagement', href: '/services/demenagement' },
    { label: 'Dépannage', href: '/services/depannage' },
  ],
  links: [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/a-propos' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Conseils & Astuces', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Mentions légales', href: '/mentions-legales' },
  ],
};
