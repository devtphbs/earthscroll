# EarthScroll

A mobile-first Progressive Web App (PWA) for discovering surprising, bizarre, and beautiful places on Earth. Built with Next.js, Supabase, and Stripe.

## Features

- **TikTok-style Discovery**: Vertical swipe cards showcasing amazing places around the world
- **Liquid Glass UI**: Dark, modern interface with frosted glass effects
- **Streak System**: Daily engagement tracking with push notifications
- **Premium Subscription**: Unlimited access with Stripe integration
- **AI Chat**: Ask questions about places (premium feature)
- **PWA**: Installable app with offline support
- **Responsive**: iPhone-optimized with safe area support

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: Supabase (auth + database)
- **Payments**: Stripe
- **AI**: Requesty API (Google Gemini 2.0 Flash)
- **PWA**: next-pwa
- **Animations**: Framer Motion

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd earthscroll
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.local` and configure your environment variables:
   ```env
   STRIPE_RESTRICTED_KEY=your_stripe_restricted_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_REQUESTY_API_KEY=your_requesty_api_key
   FREE_PRO_EMAIL=your_free_pro_email
   ```

4. **Set up Supabase**
   - Create a new Supabase project
   - Run the migration script in `supabase/migration.sql`
   - Configure auth settings

5. **Set up Stripe**
   - Create a Stripe account
   - Set up webhook endpoints
   - Configure products and prices

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # React components
├── data/               # Static data (places)
├── lib/                # Utilities and configurations
└── styles/             # Global styles

public/                 # Static assets
supabase/              # Database migrations
```

## Key Components

- **DiscoveryScreen**: Main swipe card interface
- **PlaceCard**: Individual place cards with swipe gestures
- **AuthModal**: Authentication interface
- **BottomNav**: Navigation component
- **StreakCounter**: Daily streak tracking
- **PremiumScreen**: Subscription management

## Database Schema

The app uses the following main tables:
- `profiles`: User profiles and premium status
- `saved_places`: User's saved places
- `streaks`: Daily streak tracking
- `daily_visits`: Visit history
- `push_subscriptions`: Web push subscriptions

## Deployment

1. **Build the app**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Configure environment variables** in your deployment platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact [your-email@example.com](mailto:your-email@example.com).
