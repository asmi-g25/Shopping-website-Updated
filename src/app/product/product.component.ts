import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: any = {
    id: 'PROD001',
    name: 'Premium Cotton T-Shirt',
    description: 'Comfortable and stylish premium cotton t-shirt perfect for everyday wear. Made from 100% organic cotton with a modern fit.',
    price: 29.99,
    originalPrice: 39.99,
    images: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR12NXkuXktJVtEpdWp1UuPYOY369xjknT9uN0vqk2VElGYH-lYrTgTuWcDmFN58obm9XHtLcG_1E8qrQItfXc0JC3MBsKpb6jzMNvggPg',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRQq_3g0kUwRZBdKONjQNtkGxtHEc_NrpCrObcn69lScNyU9qRounqwPLvRwGq8spMl14P4PRMtlWeGEFeb2EBV-H27gJEz8MTgcmQC0P9fij5kGsQifMQdWQ',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4CVavKcaEf-p4zGqyJquRnub8QDVQVLrSE7DAK8ZdZyNZGd3BwqyzWIpoIDxbJTGhMIQOK-tcGV2B69H7WDKJd-qgr2v-cVOkoXPBELs'
    ],
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy', 'Gray'],
    features: [
      '100% Organic Cotton',
      'Machine Washable',
      'Pre-shrunk',
      'Tagless for Comfort'
    ]
  };

  @Input() relatedProducts: any[] = [
    {
      id: 'PROD002',
      name: 'Classic Denim Jeans',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300',
      rating: 4.3
    },
    {
      id: 'PROD003',
      name: 'Casual Sneakers',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300',
      rating: 4.7
    },
    {
      id: 'PROD004',
      name: 'Cotton Hoodie',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300',
      rating: 4.4
    },
    {
      id: 'PROD005',
      name: 'Baseball Cap',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300',
      rating: 4.2
    }
  ];

  @Output() addToCart = new EventEmitter<any>();
  @Output() goToProduct = new EventEmitter<any>();

  selectedImage: string = '';
  selectedSize: string = '';
  selectedColor: string = '';
  quantity: number = 1;

  ngOnInit() {
    this.selectedImage = this.product.images[0];
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  onAddToCart() {
    const cartItem = {
      product: this.product,
      selectedSize: this.selectedSize,
      selectedColor: this.selectedColor,
      quantity: this.quantity
    };
    this.addToCart.emit(cartItem);
  }

  onGoToProduct(productId: string) {
    this.goToProduct.emit(productId);
  }

  generateStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.floor(rating) ? 1 : 0);
  }
}