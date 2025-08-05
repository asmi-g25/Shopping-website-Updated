import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent {
  email: string = '';

  featuredPost = {
    slug: 'sustainable-fashion-guide',
    title: 'The Complete Guide to Sustainable Fashion',
    excerpt: 'Learn how to build a sustainable wardrobe that reflects your values while staying stylish. From choosing eco-friendly fabrics to supporting ethical brands.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=500&fit=crop',
    category: 'SUSTAINABILITY',
    date: 'May 15, 2024',
    readTime: 8
  };

  blogPosts = [
    {
      slug: 'looks-we-love',
      title: 'Looks we love',
      excerpt: 'Discover our favorite styling combinations from this season\'s collection.',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop',
      date: 'May 10, 2024'
    },
    {
      slug: '10-ways-to-unwind',
      title: '10 ways to unwind',
      excerpt: 'Self-care tips and relaxation techniques for the modern woman.',
      image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=300&fit=crop',
      date: 'May 01, 2024'
    },
    {
      slug: 'featured-designer-bethany-jones',
      title: 'Featured designer: Bethany Jones',
      excerpt: 'An exclusive interview with renowned sustainable fashion designer Bethany Jones.',
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=300&fit=crop',
      date: 'Apr 30, 2024'
    },
    {
      slug: 'summer-styling-tips',
      title: 'Summer Styling Tips',
      excerpt: 'How to stay cool and stylish during the warmer months with sustainable fabrics.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      date: 'Apr 25, 2024'
    },
    {
      slug: 'ethical-fashion-brands',
      title: 'Ethical Fashion Brands to Watch',
      excerpt: 'Discover emerging brands that are making a difference in sustainable fashion.',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop',
      date: 'Apr 20, 2024'
    },
    {
      slug: 'wardrobe-essentials',
      title: 'Wardrobe Essentials for Every Season',
      excerpt: 'Build a capsule wardrobe with these timeless, versatile pieces.',
      image: 'https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=400&h=300&fit=crop',
      date: 'Apr 15, 2024'
    }
  ];

  loadMorePosts() {
    // In a real app, this would load more posts from an API
    console.log('Loading more posts...');
  }

  subscribeNewsletter() {
    if (this.email) {
      console.log('Newsletter subscription:', this.email);
      // Implement newsletter subscription logic
      this.email = '';
      alert('Thank you for subscribing to our newsletter!');
    }
  }
}
