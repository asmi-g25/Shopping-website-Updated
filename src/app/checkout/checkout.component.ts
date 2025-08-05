import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input() cartItems: any[] = [];

  ngOnInit() {
    // Check if there's a quick buy item
    const quickBuyItem = sessionStorage.getItem('quickBuyItem');
    if (quickBuyItem) {
      this.cartItems = [JSON.parse(quickBuyItem)];
      // Clear the quick buy item after loading
      sessionStorage.removeItem('quickBuyItem');
    } else {
      // Default cart items if no quick buy
      this.cartItems = [
        {
          id: 1,
          product: {
            productId: 'PROD001',
            productName: 'Premium Cotton T-Shirt',
            image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR12NXkuXktJVtEpdWp1UuPYOY369xjknT9uN0vqk2VElGYH-lYrTgTuWcDmFN58obm9XHtLcG_1E8qrQItfXc0JC3MBsKpb6jzMNvggPg'
          },
          quantity: 2,
          price: 29.99,
          selectedSize: 'M',
          selectedColor: 'Black'
        },
        {
          id: 2,
          product: {
            productId: 'PROD002',
            productName: 'Classic Denim Jeans',
            image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300'
          },
          quantity: 1,
          price: 79.99,
          selectedSize: 'L',
          selectedColor: 'Blue'
        }
      ];
    }
  }

  @Output() placeOrder = new EventEmitter<any>();
  @Output() updateQuantity = new EventEmitter<any>();
  @Output() removeItem = new EventEmitter<any>();

  // Form data
  customerInfo = {
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  };

  shippingAddress = {
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    state: '',
    zipCode: ''
  };

  billingAddress = {
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    state: '',
    zipCode: '',
    sameAsShipping: true
  };

  paymentInfo = {
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  };

  shippingMethod = 'standard';
  currentStep = 1;

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get shipping(): number {
    switch (this.shippingMethod) {
      case 'express': return 15.99;
      case 'overnight': return 25.99;
      default: return this.subtotal > 50 ? 0 : 5.99;
    }
  }

  get tax(): number {
    return this.subtotal * 0.08; // 8% tax
  }

  get total(): number {
    return this.subtotal + this.shipping + this.tax;
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  onUpdateQuantity(itemId: number, quantity: number) {
    this.updateQuantity.emit({ itemId, quantity });
  }

  onRemoveItem(itemId: number) {
    this.removeItem.emit(itemId);
  }

  onPlaceOrder() {
    const orderData = {
      customerInfo: this.customerInfo,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress.sameAsShipping ? this.shippingAddress : this.billingAddress,
      paymentInfo: this.paymentInfo,
      cartItems: this.cartItems,
      shippingMethod: this.shippingMethod,
      totals: {
        subtotal: this.subtotal,
        shipping: this.shipping,
        tax: this.tax,
        total: this.total
      }
    };
    this.placeOrder.emit(orderData);
  }

  isStepValid(step: number): boolean {
    switch (step) {
      case 1:
        return !!(this.customerInfo.email && this.customerInfo.firstName && this.customerInfo.lastName);
      case 2:
        return !!(this.shippingAddress.address && this.shippingAddress.city && this.shippingAddress.zipCode);
      case 3:
        return !!(this.paymentInfo.cardNumber && this.paymentInfo.expiryDate && this.paymentInfo.cvv && this.paymentInfo.nameOnCard);
      default:
        return false;
    }
  }
}
