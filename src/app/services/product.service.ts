import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  images: string[];
  sizes: string[];
  colors?: { name: string; value: string }[];
  details: string[];
  badge?: string;
  category: string;
  material: string;
  care: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 'army-baseball-dress',
      name: 'ARMY BASEBALL DRESS',
      price: 4300,
      description: 'A comfortable and stylish army-inspired baseball dress perfect for casual wear. Made from premium cotton blend with a relaxed fit that flatters all body types. Features a classic baseball silhouette with modern updates.',
      images: [
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=750&fit=crop',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=750&fit=crop&sat=-50',
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=750&fit=crop&bright=10'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Army Green', value: '#4a5d23' },
        { name: 'Navy', value: '#1e3a8a' },
        { name: 'Black', value: '#000000' }
      ],
      details: [
        '100% Cotton blend',
        'Machine washable',
        'Relaxed baseball fit',
        'Short sleeves',
        'Midi length',
        'Side seam pockets'
      ],
      badge: 'bestseller',
      category: 'Dresses',
      material: '100% Cotton',
      care: ['Machine wash cold', 'Tumble dry low', 'Do not bleach', 'Iron on low heat']
    },
    {
      id: 'white-ribbed-budget',
      name: 'WHITE RIBBED BUDGET TEE',
      price: 2800,
      salePrice: 2300,
      description: 'Essential white ribbed tee that pairs perfectly with everything in your wardrobe. Made from sustainable organic cotton with a flattering ribbed texture and comfortable fit.',
      images: [
        'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&h=750&fit=crop',
        'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&h=750&fit=crop&contrast=10',
        'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=600&h=750&fit=crop&sat=-20'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'White', value: '#ffffff' },
        { name: 'Cream', value: '#f5f5dc' },
        { name: 'Light Gray', value: '#e5e5e5' }
      ],
      details: [
        'Organic cotton ribbed fabric',
        'Classic crew neckline',
        'Short sleeves',
        'Regular fit',
        'Sustainable production',
        'Pre-shrunk fabric'
      ],
      badge: 'sale',
      category: 'Tops',
      material: 'Organic Cotton',
      care: ['Machine wash warm', 'Tumble dry medium', 'Iron if needed', 'Do not dry clean']
    },
    {
      id: 'rose-quartz-loose',
      name: 'ROSE QUARTZ LOOSE FIT TOP',
      price: 2700,
      description: 'Ethereally beautiful loose-fit top in a soft rose quartz shade. Perfect for those who love comfort without compromising on style. Features flowing silhouette and delicate details.',
      images: [
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop',
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop&hue=20',
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop&sat=50'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Rose Quartz', value: '#f7cac9' },
        { name: 'Blush Pink', value: '#fae7e7' },
        { name: 'Dusty Rose', value: '#dcae96' }
      ],
      details: [
        'Viscose blend fabric',
        'Loose comfortable fit',
        'Three-quarter sleeves',
        'Flowing drape',
        'Soft hand feel',
        'Versatile styling'
      ],
      badge: 'sale',
      category: 'Tops',
      material: '70% Viscose, 30% Cotton',
      care: ['Hand wash recommended', 'Dry flat', 'Low iron if needed', 'Do not wring']
    },
    {
      id: 'heather-gray-big-sleeve',
      name: 'HEATHER GRAY BIG SLEEVE SWEATER',
      price: 3100,
      salePrice: 2400,
      description: 'Cozy oversized sweater in heather gray perfect for layering. Features dramatic big sleeves and a relaxed silhouette that creates an effortlessly chic look.',
      images: [
        'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=600&h=750&fit=crop',
        'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=600&h=750&fit=crop&contrast=15',
        'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=600&h=750&fit=crop&bright=-10'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Heather Gray', value: '#8b8680' },
        { name: 'Charcoal', value: '#36454f' },
        { name: 'Light Gray', value: '#d3d3d3' }
      ],
      details: [
        'Soft knit blend',
        'Oversized fit',
        'Dramatic bell sleeves',
        'Ribbed cuffs and hem',
        'Perfect for layering',
        'Cozy and warm'
      ],
      badge: 'sale',
      category: 'Sweaters',
      material: '60% Acrylic, 40% Cotton',
      care: ['Machine wash gentle', 'Lay flat to dry', 'Do not iron directly', 'Store folded']
    },
    {
      id: 'some-gray-so-max',
      name: 'SOPHISTICATED GRAY MAXI DRESS',
      price: 2850,
      description: 'Elegant maxi dress in sophisticated gray that transitions seamlessly from day to night. Features a flattering silhouette with subtle details that elevate any occasion.',
      images: [
        'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=750&fit=crop',
        'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=750&fit=crop&contrast=10',
        'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=750&fit=crop&sat=20'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: [
        { name: 'Sophisticated Gray', value: '#708090' },
        { name: 'Charcoal', value: '#36454f' },
        { name: 'Silver', value: '#c0c0c0' }
      ],
      details: [
        'Flowing maxi length',
        'Flattering silhouette',
        'Long sleeves',
        'Side slit detail',
        'Comfortable stretch fabric',
        'Versatile styling'
      ],
      category: 'Dresses',
      material: '95% Modal, 5% Elastane',
      care: ['Machine wash cold', 'Hang to dry', 'Steam to remove wrinkles', 'Do not bleach']
    }
  ];

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }

  getRelatedProducts(productId: string, limit: number = 4): Product[] {
    const currentProduct = this.getProductById(productId);
    if (!currentProduct) return [];
    
    return this.products
      .filter(product => 
        product.id !== productId && 
        product.category === currentProduct.category
      )
      .slice(0, limit);
  }
}
