export interface Product {
  id: 'classic-1kg' | 'classic-26kg' | 'xxxl-26kg'
  name: string
  weight: string
  description: string
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export const products: readonly Product[] = [
  {
    id: 'classic-1kg',
    name: 'Classic',
    weight: '1 kg',
    description:
      'Perfect for everyday meals, bringing the authentic taste of Basmati to your table.',
    image: {
      src: '/images/products/classic-1kg.jpeg',
      alt: 'Shri Shri Classic Basmati Rice 1 kg',
      width: 1086,
      height: 1448,
    },
  },
  {
    id: 'classic-26kg',
    name: 'Classic',
    weight: '26 kg',
    description: 'Ideal for large families, restaurants and catering needs.',
    image: {
      src: '/images/products/classic-26kg.jpeg',
      alt: 'Shri Shri Classic Basmati Rice 26 kg',
      width: 1161,
      height: 1355,
    },
  },
  {
    id: 'xxxl-26kg',
    name: 'XXXL',
    weight: '26 kg',
    description: 'Our finest and longest grains, for a truly premium experience.',
    image: {
      src: '/images/products/xxxl-26kg.jpeg',
      alt: 'Shri Shri XXXL Basmati Rice 26 kg',
      width: 1149,
      height: 1369,
    },
  },
]
