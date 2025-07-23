# Pink Wallpaper AI - Make Your Own Pink Wallpapers — 100% Free!
https://www.pinkwallpaper.org
A modern web application built with Next.js, Supabase, and Creem, dedicated to creating and sharing beautiful pink-themed wallpapers.

![Pink Wallpaper Banner](public/og-image.jpg)

## 🌟 Overview

Pink Wallpaper is a comprehensive platform that offers five core features:

1. **Gallery** - Browse and discover a curated collection of pink wallpaper templates
2. **Editor** - Enhance and customize existing wallpaper templates with AI-powered tools
3. **Generator** - Create custom pink wallpapers from text prompts using advanced AI
4. **Animator** - Transform static wallpapers into dynamic animated versions
5. **Subscription System** - Flexible pricing plans to unlock premium features

## ✨ Key Features

### Gallery
- Extensive collection of high-quality pink wallpaper templates
- Advanced filtering and search capabilities
- Category-based organization (Abstract, Nature, Minimalist, etc.)
- Responsive design optimized for all devices
- Direct integration with Editor for seamless customization

### AI-Powered Editor
- Upload your own images or select from our template library
- AI-enhanced image processing and optimization
- Text overlay capabilities with custom fonts and colors
- Style transfer and artistic filters
- Real-time preview with instant feedback
- High-resolution output support

### AI Generator
- Text-to-image generation with pink theme specialization
- Multiple aspect ratio options (Square, Portrait, Landscape, etc.)
- Various artistic styles (Photorealistic, Artistic, Minimalist, etc.)
- Customizable generation parameters
- Batch generation capabilities for Pro users
- Usage tracking and quota management

### Animator (Premium Feature)
- Convert static wallpapers into animated versions
- Multiple animation styles and effects
- Customizable animation speed and duration
- Export in various formats (GIF, MP4, WebM)

### User Management
- Secure authentication via Supabase Auth
- Social login support (Google, GitHub)
- Personal dashboard with usage analytics
- Image history and favorites
- Subscription management

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI (built on Radix UI primitives)
- **State Management**: React Hooks + Context API
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **File Storage**: Cloudflare R2
- **Payment Processing**: Creem.io
- **AI Services**: Multiple AI providers for image generation and enhancement
- **Image Processing**: Sharp for server-side optimization
- **Internationalization**: next-intl
- **Deployment**: Vercel

## 📋 Project Structure

```
pinkwallpaper/
├── app/                          # Next.js App Router pages
│   ├── (auth-pages)/            # Authentication pages
│   ├── (marketing)/             # Marketing and SEO pages
│   ├── [locale]/                # Internationalized routes
│   ├── api/                     # API routes and endpoints
│   ├── dashboard/               # User dashboard
│   ├── editor/                  # Wallpaper editor interface
│   ├── gallery/                 # Template gallery
│   ├── generator/               # AI wallpaper generator
│   ├── pricing/                 # Subscription plans
│   ├── wallpaper/               # Individual wallpaper pages
│   └── share/                   # Shared wallpaper viewer
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   ├── editor/                  # Editor-specific components
│   ├── gallery/                 # Gallery components
│   ├── home/                    # Homepage components
│   ├── layout/                  # Layout components
│   └── providers/               # Context providers
├── config/                      # Configuration files
├── hooks/                       # Custom React hooks
├── lib/                         # Utility libraries
│   ├── ai/                      # AI service integrations
│   ├── api/                     # API utilities
│   └── utils/                   # Helper functions
├── public/                      # Static assets
├── supabase/                    # Database migrations and functions
├── types/                       # TypeScript type definitions
└── utils/                       # Utility functions
    ├── supabase/                # Supabase helpers
    └── image-compression/       # Image optimization
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Supabase account and project
- Creem.io merchant account
- Cloudflare R2 storage bucket (optional, for production)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/pinkwallpaper.git
cd pinkwallpaper
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Environment setup**

Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

Configure the following environment variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Creem Payment Configuration
CREEM_WEBHOOK_SECRET=your_creem_webhook_secret
CREEM_API_KEY=your_creem_api_key
CREEM_API_URL=https://api.creem.io/v1

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://pinkwallpaper.org
CREEM_SUCCESS_URL=https://pinkwallpaper.org/dashboard

# AI Service Configuration
GENERATOR_AI_URL=your_ai_service_url
GENERATOR_AI_KEY=your_ai_api_key
GENERATOR_AI_MODEL=your_preferred_model

EDITOR_AI_URL=your_editor_ai_service_url
EDITOR_AI_KEY=your_editor_ai_api_key
EDITOR_AI_MODEL=your_editor_model

# Cloudflare R2 (Production)
CLOUDFLARE_R2_ACCOUNT_ID=your_account_id
CLOUDFLARE_R2_ACCESS_KEY_ID=your_access_key
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_secret_key
CLOUDFLARE_R2_BUCKET_NAME=your_bucket_name
CLOUDFLARE_R2_PUBLIC_URL=your_public_url

# Content Moderation
SIGHTENGINE_API_USER=your_sightengine_user
SIGHTENGINE_API_SECRET=your_sightengine_secret
MODERATION_API_KEY=your_moderation_key
```

4. **Database setup**

- Create a new Supabase project
- Run the SQL migrations in the `supabase/migrations/` directory
- Set up Row Level Security (RLS) policies as defined in the migration files

5. **Payment setup**

- Create a Creem.io merchant account
- Configure your subscription products and pricing
- Set up webhook endpoints for payment notifications

6. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

Visit http://localhost:3000 to see the application running locally.

## 💳 Subscription Plans

### Free Plan
- 2 AI generations per day
- Basic editing tools
- Template library access
- Watermarked downloads
- Standard resolution (1080p)

### Pro Plan ($20/month)
- 25 AI generations per day (300/month)
- Advanced editing tools
- Watermark removal option
- HD resolution (4K)
- Priority generation queue
- Batch processing
- Animation features

### Enterprise Plan (Coming Soon)
- Unlimited generations
- API access
- Custom branding
- Priority support
- Advanced analytics

## 🎨 Usage Guide

### Browsing the Gallery

1. Navigate to the Gallery page
2. Use category filters to find specific wallpaper types
3. Search by keywords or themes
4. Click on any wallpaper to view details or start editing

### Using the Editor

1. Select a template from the gallery or upload your own image
2. Apply AI enhancements and filters
3. Add text overlays with custom styling
4. Preview your changes in real-time
5. Download or share your customized wallpaper

### Generating with AI

1. Go to the Generator page
2. Enter a descriptive text prompt
3. Select your preferred style and aspect ratio
4. Choose generation parameters
5. Click "Generate" to create your wallpaper
6. Download or further edit the result

### Managing Your Account

1. Access your dashboard to view usage statistics
2. Manage your subscription and billing
3. View your creation history
4. Organize favorites and collections

## 🔐 Security & Privacy

Pink Wallpaper prioritizes user security and privacy:

- **Authentication**: Secure user authentication via Supabase Auth
- **Data Protection**: All user data is encrypted and stored securely
- **Payment Security**: PCI-compliant payment processing through Creem.io
- **Content Moderation**: Automated content filtering to ensure appropriate content
- **Privacy Policy**: Transparent data handling practices

## 🌍 Internationalization

The application supports multiple languages:
- English (default)
- Additional languages can be added via the `i18n/` configuration

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in the Vercel dashboard
3. Deploy with automatic CI/CD

### Manual Deployment

```bash
npm run build
npm start
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🆘 Support

Need help? We're here for you:

- **Documentation**: Visit our [Help Center](/help)
- **Contact**: Reach out via our [Contact Page](/contact)
- **Email**: support@pinkwallpaper.org
- **FAQ**: Check our [Frequently Asked Questions](/faq)

## 🔗 Links

- **Website**: [https://pinkwallpaper.org](https://pinkwallpaper.org)
- **Blog**: [https://pinkwallpaper.org/blog](https://pinkwallpaper.org/blog)
- **Privacy Policy**: [https://pinkwallpaper.org/privacy](https://pinkwallpaper.org/privacy)
- **Terms of Service**: [https://pinkwallpaper.org/terms](https://pinkwallpaper.org/terms)

---

Made with 💖 for pink wallpaper enthusiasts worldwide.
