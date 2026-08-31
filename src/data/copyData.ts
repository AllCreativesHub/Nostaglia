export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'platters' | 'cocktails';
  price: string;
  description: string;
  tags: string[];
  isChefSpecial?: boolean;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  comment: string;
  rating: number;
  avatar: string;
  highlight: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Jollof Arancini',
    category: 'starters',
    price: '₦18,500',
    description: 'Golden crispy risotto balls infused with smoked party Jollof rice, melted mozzarella center, scotch bonnet pepper emulsion & edible gold leaf.',
    tags: ['Signature', 'Afro-Med Fusion', 'Vegetarian'],
    isChefSpecial: true,
    image: '/assets/food_fusion.png'
  },
  {
    id: '2',
    name: 'Crispy Calamari Suya Spice',
    category: 'starters',
    price: '₦16,000',
    description: 'Tender squid rings dusted in northern Suya spice mix, charred lime wedge, served with garlic aioli & habanero dip.',
    tags: ['Spicy', 'Popular'],
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '3',
    name: 'Seafood Linguine Nwanne',
    category: 'mains',
    price: '₦34,000',
    description: 'Handcrafted pasta with jumbo Atlantic prawns, calamari, white wine butter emulsion, sun-dried cherry tomatoes, and micro basil.',
    tags: ['Chef Signature', 'Fresh Seafood'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '4',
    name: 'Red Snapper Rooftop Sail',
    category: 'mains',
    price: '₦30,000',
    description: 'Pan-seared whole wild snapper on a bed of roasted plantain gnocchi, Mediterranean citrus-caper glaze & scorched asparagus.',
    tags: ['Gluten Free'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '5',
    name: 'Suya Ribeye Tenderloin (300g)',
    category: 'mains',
    price: '₦38,000',
    description: '21-day dry-aged ribeye rubbed with artisanal Yaji spice blend, red wine reduction, roasted truffle garlic mash.',
    tags: ['Prime Cut', 'Best Seller'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '6',
    name: 'The Nostalgia Grand Platter',
    category: 'platters',
    price: '₦68,000',
    description: 'The ultimate rooftop sharing feast: Suya Lamb Chops, Charcoal Grilled Octopus, Jollof Arancini, Spicy Truffle Yam Chips & Trio of Dips.',
    tags: ['Feeds 3-4', 'Must Order'],
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: '7',
    name: 'Lekki Sunset Palm Wine Sour',
    category: 'cocktails',
    price: '₦14,000',
    description: 'Bourbon whisky, clarified fresh palm wine reduction, scotch bonnet honey infusion, fresh lemon juice & a singed thyme sprig.',
    tags: ['Craft Cocktail', 'Nostalgia Classic'],
    isChefSpecial: true,
    image: '/assets/cocktail_sip.png'
  },
  {
    id: '8',
    name: 'Eko Sunset Spritz',
    category: 'cocktails',
    price: '₦13,500',
    description: 'Hibiscus Zobo cordial, Italicus Rosolio, prosecco, soda water & dehydrated orange wheel.',
    tags: ['Refreshing', 'Low ABV'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Toluwanimi A.',
    title: 'Food & Lifestyle Critic',
    comment: 'Nostalgia Lagos is easily the most atmospheric rooftop experience in Lekki. The Jollof Arancini blew my mind, and watching the sunset over Hakeem Dickson Link Rd with their Palm Wine Sour is unmatched.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    highlight: 'Unmatched Ambiance'
  },
  {
    id: '2',
    name: 'Dr. Segun & Bolanle M.',
    title: 'Verified Diners',
    comment: 'We booked the VIP Velvet Lounge for our anniversary. The service was 5-star, the vinyl DJ set set the mood perfectly, and the seafood linguine was perfection.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    highlight: '5-Star Celebration'
  },
  {
    id: '3',
    name: 'Vanessa K.',
    title: 'Creative Director',
    comment: 'The attention to detail in the decor, the lighting, and the afro-med fusion menu is world-class. Every corner is photo-worthy without trying too hard.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    highlight: 'Aesthetic Perfection'
  }
];

export const INSTAGRAM_POSTS = [
  { id: '1', url: '/assets/hero_rooftop.png', likes: '1.4k', handle: '@nostalgialagos' },
  { id: '2', url: '/assets/cocktail_sip.png', likes: '2.1k', handle: '@chefalex_ng' },
  { id: '3', url: '/assets/food_fusion.png', likes: '980', handle: '@lekki_diners' },
  { id: '4', url: '/assets/lounge_vibes.png', likes: '1.8k', handle: '@lagosnightlife' },
];
