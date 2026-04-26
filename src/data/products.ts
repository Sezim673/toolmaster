export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  isNew?: boolean;
}

export interface Category {
  icon: string;
  title: string;
  count: number;
}

export const categories: Category[] = [
  { icon: 'screwdriver', title: 'Электроинструменты', count: 350 },
  { icon: 'hard-hat', title: 'Строительное оборудование', count: 180 },
  { icon: 'fire', title: 'Сварочное оборудование', count: 95 },
  { icon: 'leaf', title: 'Садовая техника', count: 120 },
  { icon: 'wind', title: 'Компрессоры', count: 45 },
  { icon: 'droplet', title: 'Насосы', count: 65 },
  { icon: 'ruler', title: 'Измерительные инструменты', count: 200 },
  { icon: 'toolbox', title: 'Оснастка и аксессуары', count: 500 },
];

export const products: Product[] = [
  {
    id: '1',
    title: 'Перфоратор Bosch GBH 2-26 DFR Professional',
    category: 'Перфораторы',
    price: 12500,
    oldPrice: 16700,
    rating: 4.5,
    reviews: 47,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=300&h=200&fit=crop',
    badge: '-25%',
  },
  {
    id: '2',
    title: 'Аккумуляторный шуруповерт Makita DDF485Z',
    category: 'Шуруповерты',
    price: 8900,
    rating: 5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=300&h=200&fit=crop',
    isNew: true,
  },
  {
    id: '3',
    title: 'Углошлифовальная машина DeWalt DWE4257',
    category: 'Шлифовальные машины',
    price: 6750,
    rating: 4,
    reviews: 32,
    image: 'https://images.unsplash.com/photo-1580402427914-a068b8cfc495?w=300&h=200&fit=crop',
  },
  {
    id: '4',
    title: 'Сварочный инвертор Fubag IR 200 MAX',
    category: 'Сварочное оборудование',
    price: 14200,
    oldPrice: 16700,
    rating: 4.5,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=300&h=200&fit=crop',
    badge: '-15%',
  },
  {
    id: '5',
    title: 'Дрель ударная Metabo SB 18 LTX BL I',
    category: 'Дрели',
    price: 11300,
    rating: 5,
    reviews: 41,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop',
  },
  {
    id: '6',
    title: 'Циркулярная пила Makita 5008MG',
    category: 'Пилы',
    price: 9800,
    rating: 4,
    reviews: 28,
    image: 'https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=300&h=200&fit=crop',
    isNew: true,
  },
  {
    id: '7',
    title: 'Компрессор Fubag Air Master Kit 50',
    category: 'Компрессоры',
    price: 22500,
    rating: 4.5,
    reviews: 34,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop',
  },
  {
    id: '8',
    title: 'Набор инструментов Ombra 215 предм.',
    category: 'Наборы инструментов',
    price: 7600,
    oldPrice: 9500,
    rating: 5,
    reviews: 72,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
    badge: '-20%',
  },
  {
    id: '9',
    title: 'Электролобзик Bosch GST 150 BCE',
    category: 'Лобзики',
    price: 8450,
    rating: 4,
    reviews: 23,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop',
  },
];
