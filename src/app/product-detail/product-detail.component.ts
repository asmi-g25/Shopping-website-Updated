import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  selectedImage: string = '';
  selectedSize: string = '';
  selectedColor: any = null;
  quantity: number = 1;
  relatedProducts: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.loadProduct(productId);
    });
  }

  loadProduct(id: string) {
    const product = this.productService.getProductById(id);
    this.product = product || null;

    if (this.product) {
      this.selectedImage = this.product.images[0];
      this.selectedSize = this.product.sizes[0];
      this.selectedColor = this.product.colors ? this.product.colors[0] : null;
      this.relatedProducts = this.productService.getRelatedProducts(id);
    }
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  selectColor(color: any) {
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

  addToCart() {
    if (!this.product) return;

    console.log('Added to cart:', {
      product: this.product,
      size: this.selectedSize,
      color: this.selectedColor,
      quantity: this.quantity
    });

    // Show success message
    alert(`${this.product.name} added to cart!`);
  }

  buyNow() {
    if (!this.product) return;

    // Create order item
    const orderItem = {
      id: Date.now(),
      product: {
        productId: this.product.id,
        productName: this.product.name,
        image: this.selectedImage
      },
      quantity: this.quantity,
      price: this.product.salePrice || this.product.price,
      selectedSize: this.selectedSize,
      selectedColor: this.selectedColor?.name || null
    };

    // Store order item in sessionStorage for checkout
    sessionStorage.setItem('quickBuyItem', JSON.stringify(orderItem));

    // Navigate to checkout
    this.router.navigate(['/checkout']);
  }

  addToWishlist() {
    if (!this.product) return;

    console.log('Added to wishlist:', this.product);
    alert(`${this.product.name} added to wishlist!`);
  }
}
