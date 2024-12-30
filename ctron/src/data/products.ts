export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'cleanser' | 'moisturizer' | 'serum' | 'treatment'
  tags: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: "C'TRON Hydrating Cleanser",
    description: 'Advanced hydrating cleanser with pH-balanced formula',
    price: 49.99,
    category: 'cleanser',
    tags: ['hydrating', 'gentle', 'daily']
  },
  {
    id: '2',
    name: "C'TRON Moisture Lock",
    description: 'Intensive moisturizer for long-lasting hydration',
    price: 59.99,
    category: 'moisturizer',
    tags: ['hydrating', 'protective']
  },
  {
    id: '3',
    name: "C'TRON Radiance Serum",
    description: 'Brightening serum with vitamin C complex',
    price: 79.99,
    category: 'serum',
    tags: ['brightening', 'antioxidant']
  },
  {
    id: '4',
    name: "C'TRON Night Repair",
    description: 'Overnight treatment for skin regeneration',
    price: 89.99,
    category: 'treatment',
    tags: ['regenerating', 'night-care']
  }
] 