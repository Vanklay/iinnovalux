export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  includes: string[];
  benefits: string[];
  details: string;
  faq: { question: string; answer: string }[];
}

// Priority order: most requested services first
export const services: Service[] = [
  {
    slug: 'petits-travaux',
    title: 'Petits travaux',
    description: 'Réparations et maintenance. Valorisez votre propriété.',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>`,
    fullDescription: "Réalisations diverses de petits travaux de maintenance et réparation. Fixations, ajustements, réparations mineures - aucun travail n'est trop petit. Nous contribuons à la valorisation de votre propriété.",
    includes: ['Fixations murales (TV, étagères, miroirs)', 'Ajustements de portes et fenêtres', 'Réparations mineures de plomberie', 'Maintenance générale du domicile', 'Installation de luminaires', 'Pose de rideaux et stores', 'Pose de parquet flottant'],
    benefits: [
      'Intervention rapide sous 48h',
      'Devis gratuit et transparent',
      'Artisan qualifié et expérimenté',
      'Nettoyage du chantier inclus',
    ],
    details: "Vous avez une liste de petits travaux qui s'accumulent ? Notre service de petits travaux est conçu pour les propriétaires et locataires au Luxembourg qui n'ont pas le temps ou les outils pour effectuer ces réparations eux-mêmes. De la fixation d'une étagère à la réparation d'une poignée de porte, nous intervenons rapidement et efficacement. Nos artisans sont équipés de tout le matériel nécessaire et travaillent proprement, en respectant votre intérieur.",
    faq: [
      { question: "Quel est le délai d'intervention ?", answer: "Nous intervenons généralement sous 48h pour les petits travaux. Pour les urgences, contactez-nous directement par téléphone." },
      { question: "Y a-t-il un minimum de facturation ?", answer: "Oui, nous appliquons un minimum d'une heure de main d'œuvre pour couvrir les frais de déplacement." },
      { question: "Fournissez-vous le matériel ?", answer: "Nous pouvons fournir le matériel standard (vis, chevilles, etc.). Pour du matériel spécifique, nous vous conseillons sur ce qu'il faut acheter." },
    ],
  },
  {
    slug: 'montage-meubles',
    title: 'Montage de meubles',
    description: 'Assemblage professionnel de tous types de meubles, cuisines et dressings.',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>`,
    fullDescription: 'Assemblage professionnel de tous vos meubles. Que ce soit pour une cuisine IKEA, un dressing sur mesure ou du mobilier de bureau, nous assurons un montage soigné et durable.',
    includes: ['Montage meubles IKEA et autres marques', 'Installation de cuisines complètes', 'Assemblage de dressings et armoires', 'Mobilier de bureau professionnel', 'Lits et sommiers', 'Meubles de salle de bain'],
    benefits: [
      'Montage rapide et professionnel',
      'Garantie sur notre travail',
      'Évacuation des emballages possible',
      'Fixation au mur incluse si nécessaire',
    ],
    details: "Vous venez d'acheter des meubles chez IKEA, Conforama ou ailleurs au Luxembourg ? Notre équipe d'assembleurs professionnels se charge du montage complet de vos meubles. Nous avons l'habitude de tous les systèmes de montage et disposons de l'outillage adapté. Que ce soit une simple commode ou une cuisine entière, nous travaillons avec précision pour un résultat parfait. Nous pouvons également fixer vos meubles au mur pour plus de sécurité.",
    faq: [
      { question: "Combien de temps pour monter une cuisine IKEA ?", answer: "Le temps varie selon la complexité. Comptez en moyenne une journée pour une cuisine standard de 10-15 éléments." },
      { question: "Montez-vous aussi les meubles achetés d'occasion ?", answer: "Oui, nous montons tous types de meubles, neufs ou d'occasion, quelle que soit leur provenance." },
      { question: "Pouvez-vous récupérer les meubles en magasin ?", answer: "Nous proposons un service de récupération en magasin moyennant un supplément. Contactez-nous pour un devis." },
    ],
  },
  {
    slug: 'entretien-exterieur',
    title: 'Entretien extérieur',
    description: 'Jardins, gazons, haies. Abattage d\'arbres et nettoyage tempêtes.',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>`,
    fullDescription: 'Entretien régulier ou ponctuel de vos espaces extérieurs. Chemins, gazons, haies et surfaces diverses - nous maintenons votre propriété en parfait état et contribuons à sa valorisation.',
    includes: ['Tonte de gazon régulière', 'Taille de haies et arbustes', 'Désherbage et entretien des massifs', 'Nettoyage des terrasses et allées', 'Ramassage des feuilles', 'Préparation hivernale du jardin', 'Abattage d\'arbres', 'Nettoyage après tempêtes'],
    benefits: [
      'Contrats d\'entretien flexibles',
      'Équipement professionnel',
      'Évacuation des déchets verts',
      'Conseils personnalisés',
    ],
    details: "Maintenez votre jardin et vos espaces extérieurs en parfait état tout au long de l'année. Notre service d'entretien extérieur s'adresse aux particuliers et aux entreprises au Luxembourg qui souhaitent un jardin soigné sans y consacrer leur temps libre. Nous proposons des contrats d'entretien régulier (hebdomadaire, bi-mensuel ou mensuel) ou des interventions ponctuelles selon vos besoins. Notre équipe dispose de tout l'équipement nécessaire : tondeuses, taille-haies, souffleurs, etc. Nous intervenons également pour l'abattage d'arbres et le nettoyage après tempêtes.",
    faq: [
      { question: "Proposez-vous des contrats annuels ?", answer: "Oui, nous proposons des contrats d'entretien annuels avec un tarif préférentiel et des passages réguliers selon vos besoins." },
      { question: "Que faites-vous des déchets verts ?", answer: "Nous évacuons tous les déchets verts vers les centres de recyclage appropriés. Ce service est inclus dans nos prestations." },
      { question: "Intervenez-vous aussi en hiver ?", answer: "Oui, nous proposons la préparation hivernale des jardins et pouvons intervenir pour le déneigement des allées." },
    ],
  },
  {
    slug: 'depannage',
    title: 'Dépannage 24h/7',
    description: 'Intervention rapide 24h/7. Urgences et arbres tombés.',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>`,
    fullDescription: 'Intervention rapide pour tous vos problèmes urgents. Disponible 24h/7, nous résolvons vos urgences du quotidien.',
    includes: ['Fuites d\'eau urgentes', 'Problèmes électriques mineurs', 'Serrurerie d\'urgence', 'Nettoyage arbres tombés (tempêtes)', 'Chauffage en panne', 'Volets bloqués'],
    benefits: [
      'Disponible 24h/24, 7j/7',
      'Intervention en moins de 2h',
      'Diagnostic immédiat',
      'Solutions temporaires si nécessaire',
    ],
    details: "Une urgence n'attend pas. Notre service de dépannage est disponible 24h/24 et 7j/7 pour répondre à vos problèmes urgents au Luxembourg. Que ce soit une fuite d'eau en pleine nuit, une serrure bloquée ou un problème électrique, nous intervenons rapidement pour sécuriser la situation et apporter une solution. Notre équipe est formée pour gérer les urgences avec calme et efficacité, et nous disposons du matériel nécessaire pour la plupart des interventions courantes.",
    faq: [
      { question: "Quel est le délai d'intervention en urgence ?", answer: "Nous nous engageons à intervenir dans les 2 heures suivant votre appel pour toute urgence au Luxembourg." },
      { question: "Y a-t-il un supplément pour les interventions de nuit ?", answer: "Oui, les interventions en dehors des heures ouvrables (19h-8h) et les week-ends sont majorées. Le tarif exact vous sera communiqué par téléphone." },
      { question: "Que faire en attendant votre arrivée ?", answer: "Nous vous guiderons par téléphone sur les gestes à effectuer pour limiter les dégâts en attendant notre intervention." },
    ],
  },
  {
    slug: 'debarras',
    title: 'Débarras',
    description: 'Évacuation caves, greniers, appartements. Tri et recyclage.',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>`,
    fullDescription: "Service complet d'évacuation et de nettoyage. Caves, greniers, appartements - nous prenons en charge le tri, le recyclage et l'évacuation responsable de vos encombrants.",
    includes: ['Débarras de caves et greniers', 'Vidage d\'appartements complets', 'Évacuation après succession', 'Tri sélectif et recyclage', 'Don aux associations partenaires', 'Nettoyage après débarras'],
    benefits: [
      'Devis gratuit sur place',
      'Évacuation responsable et écologique',
      'Récupération des objets de valeur',
      'Nettoyage final inclus',
    ],
    details: "Besoin de vider une cave encombrée, un grenier plein ou un appartement complet ? Notre service de débarras au Luxembourg prend tout en charge. Nous effectuons un tri rigoureux : les objets réutilisables sont donnés à des associations, les matériaux recyclables sont acheminés vers les filières appropriées, et seuls les déchets ultimes sont mis en décharge. Nous intervenons également après les successions pour aider les familles dans ces moments difficiles. Le nettoyage des lieux après le débarras est inclus dans notre prestation.",
    faq: [
      { question: "Comment est calculé le prix du débarras ?", answer: "Le prix dépend du volume à évacuer et de l'accessibilité. Nous nous déplaçons gratuitement pour établir un devis précis." },
      { question: "Que faites-vous des objets de valeur ?", answer: "Nous vous signalons tout objet pouvant avoir de la valeur. Vous décidez ensuite de les garder, les vendre ou nous les confier pour don." },
      { question: "Intervenez-vous pour les entreprises ?", answer: "Oui, nous proposons également le débarras de locaux professionnels, bureaux et entrepôts." },
    ],
  },
  {
    slug: 'demenagement',
    title: 'Déménagement',
    description: 'Transport et manutention de vos biens. Assurance incluse.',
    icon: `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>`,
    fullDescription: 'Service de transport et manutention de vos biens. Déménagement complet ou partiel, avec soin et professionnalisme.',
    includes: ['Déménagement complet clé en main', 'Transport de meubles volumineux', 'Emballage et protection des objets', 'Démontage et remontage des meubles', 'Location de cartons et matériel', 'Stockage temporaire possible'],
    benefits: [
      'Équipe expérimentée et soigneuse',
      'Véhicules adaptés à chaque besoin',
      'Assurance transport complète incluse',
      'Flexibilité des horaires',
    ],
    details: "Déménager au Luxembourg ou dans la Grande Région ? Notre service de déménagement s'adapte à vos besoins, que vous ayez besoin d'une aide partielle ou d'une prise en charge complète. Nos équipes sont formées pour manipuler vos biens avec le plus grand soin, des meubles fragiles aux objets de valeur. Tous vos biens sont couverts par notre assurance transport pendant toute la durée du déménagement. Nous proposons également la fourniture de cartons et matériel d'emballage, le démontage et remontage de vos meubles, ainsi qu'une solution de stockage temporaire si nécessaire. Chaque déménagement est planifié avec vous pour s'adapter à vos contraintes.",
    faq: [
      { question: "Déménagez-vous aussi à l'international ?", answer: "Nous intervenons principalement au Luxembourg et dans la Grande Région (Belgique, France, Allemagne). Pour les déménagements plus lointains, contactez-nous pour étudier votre projet." },
      { question: "Les meubles sont-ils assurés pendant le transport ?", answer: "Oui, tous nos déménagements incluent une assurance transport. Une assurance complémentaire est disponible pour les objets de grande valeur." },
      { question: "Puis-je ne faire appel à vous que pour le transport ?", answer: "Absolument, nous proposons des formules flexibles : transport seul, transport + chargement, ou déménagement complet avec emballage." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getRelatedServices(currentSlug: string, count: number = 3): Service[] {
  return services
    .filter(service => service.slug !== currentSlug)
    .slice(0, count);
}
