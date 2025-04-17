import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'tralalero-tralala',
    name: 'TRALALERO TRALALA',
    price: 1600,
    imageUrl: '/images/model1.png',
    description: 'The TRALALERO TRALALA jacket combines premium materials with cutting-edge design. Featuring a water-resistant outer shell and thermal insulation, this piece offers protection in harsh conditions while maintaining a sleek, urban aesthetic.',
    specs: {
      width: '60cm',
      weight: '850g',
      length: '75cm',
      color: 'Black',
    },
    materials: 'Outer: 100% Polyamide, Lining: 100% Polyester, Filling: 90% Down, 10% Feather',
    delivery: 'Free shipping worldwide. Estimated delivery time: 3-5 business days.',
  },
  {
    id: '2',
    slug: 'bombardiro-crocodilo',
    name: 'BOMBARDIRO CROCODILO',
    price: 1200,
    imageUrl: '/images/model2.png',
    description: 'The BOMBARDIRO CROCODILO coat offers a perfect balance of warmth and style. Its minimalist design is complemented by premium insulation and a comfortable fit, making it an essential addition to your winter wardrobe.',
    specs: {
      width: '58cm',
      weight: '780g',
      length: '70cm',
      color: 'Dark Grey',
    },
    materials: 'Outer: 95% Wool, 5% Cashmere, Lining: 100% Viscose, Filling: Thinsulate™',
    delivery: 'Free shipping worldwide. Estimated delivery time: 3-5 business days.',
  },
  {
    id: '3',
    slug: 'brr-brr-patapim',
    name: 'BRR BRR PATAPIM',
    price: 1350,
    imageUrl: '/images/model3.png',
    description: 'The BRR BRR PATAPIM parka is designed for extreme conditions. With its heavy-duty construction and premium insulation, it provides exceptional warmth without compromising on style or mobility.',
    specs: {
      width: '62cm',
      weight: '950g',
      length: '85cm',
      color: 'Black',
    },
    materials: 'Outer: 100% Cotton with DWR coating, Lining: 100% Polyester, Filling: 80% Down, 20% Feather',
    delivery: 'Free shipping worldwide. Estimated delivery time: 3-5 business days.',
  },
  {
    id: '4',
    slug: 'lirili-ralila',
    name: 'LIRILI RALILA',
    price: 1450,
    imageUrl: '/images/model4.png',
    description: 'The LIRILI RALILA jacket is a statement piece that combines functionality with avant-garde design. Its unique silhouette and premium materials make it a standout addition to any wardrobe.',
    specs: {
      width: '59cm',
      weight: '820g',
      length: '72cm',
      color: 'Charcoal',
    },
    materials: 'Outer: 98% Polyester, 2% Elastane, Lining: 100% Polyester, Filling: Synthetic Down Alternative',
    delivery: 'Free shipping worldwide. Estimated delivery time: 3-5 business days.',
  },
  {
    id: '5',
    slug: 'bobrinni-cococosinni',
    name: 'BOBRINNI COCOCOSINNI',
    price: 1550,
    imageUrl: '/images/model5.png',
    description: 'The BOBRINNI COCOCOSINNI coat features a revolutionary design that adapts to changing weather conditions. Its modular construction allows for customization based on temperature and precipitation.',
    specs: {
      width: '61cm',
      weight: '900g',
      length: '80cm',
      color: 'Midnight Blue',
    },
    materials: 'Outer: 100% Technical Fabric, Lining: 100% Recycled Polyester, Filling: 70% Down, 30% Feather',
    delivery: 'Free shipping worldwide. Estimated delivery time: 3-5 business days.',
  },
  {
    id: '6',
    slug: 'boneca-ambalabu',
    name: 'BONECA AMBALABU',
    price: 1300,
    imageUrl: '/images/model6.png',
    description: 'The BONECA AMBALABU jacket combines traditional craftsmanship with modern technology. Each piece is hand-finished to ensure exceptional quality and attention to detail.',
    specs: {
      width: '57cm',
      weight: '800g',
      length: '68cm',
      color: 'Forest Green',
    },
    materials: 'Outer: 80% Wool, 20% Nylon, Lining: 100% Silk, Filling: PrimaLoft® Gold Insulation',
    delivery: 'Free shipping worldwide. Estimated delivery time: 3-5 business days.',
  },
  {
    id: '7',
    slug: 'cappucino-assasino',
    name: 'CAPPUCINO ASSASINO',
    price: 1700,
    imageUrl: '/images/model7.png',
    description: 'The CAPPUCINO ASSASINO coat is the pinnacle of luxury outerwear. Crafted from the finest materials and featuring meticulous detailing, it represents the perfect balance of form and function.',
    specs: {
      width: '63cm',
      weight: '980g',
      length: '82cm',
      color: 'Burgundy',
    },
    materials: 'Outer: 70% Cashmere, 30% Wool, Lining: 100% Cupro, Filling: 95% Goose Down, 5% Feather',
    delivery: 'Free shipping worldwide. Estimated delivery time: 3-5 business days.',
  },
  {
    id: '8',
    slug: 'spaghetti-tualetti',
    name: 'SPAGHETTI TUALETTI',
    price: 1400,
    imageUrl: '/images/model8.png',
    description: 'The SPAGHETTI TUALETTI jacket redefines urban outerwear with its innovative design and technical features. Perfect for navigating the city in style, regardless of weather conditions.',
    specs: {
      width: '60cm',
      weight: '830g',
      length: '74cm',
      color: 'Slate Grey',
    },
    materials: 'Outer: 100% Recycled Polyester with DWR Finish, Lining: 100% Tencel™, Filling: 60% Down, 40% Recycled Synthetic',
    delivery: 'Free shipping worldwide. Estimated delivery time: 3-5 business days.',
  }
];

export function getProducts(): Promise<Product[]> {
  return Promise.resolve(products);
}

export function getProductBySlug(slug: string): Promise<Product | undefined> {
  const product = products.find(p => p.slug === slug);
  return Promise.resolve(product);
}

export function getRelatedProducts(currentProductId: string): Promise<Product[]> {
  return Promise.resolve(products.filter(p => p.id !== currentProductId));
}






