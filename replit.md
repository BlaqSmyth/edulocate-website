# EduLocate - UK Education Platform

## Overview

This is a full-stack web application for EduLocate, a UK-focused education consulting service. The platform serves as a comprehensive resource for international students seeking guidance on studying in the United Kingdom, featuring information about services, UK universities, resources, and a contact system for inquiries.

**Recent Updates (January 2025):**
- **UK-Only Focus**: Refocused entire website to exclusively serve students interested in studying in the United Kingdom
- Removed all non-UK destinations (USA, Canada, Australia, New Zealand, Europe)
- Updated hero section: "Your Gateway to Study in the UK"
- Redesigned destinations section to showcase UK regions (England, Scotland, Wales, Northern Ireland, London, Russell Group)
- Comprehensive UK university database with 30+ top institutions based on Complete University Guide 2025 rankings
- Complete rebranding from "EduGlobal Consultancy" to "EduLocate" across entire website
- Updated all company references, testimonials, contact information, and page titles
- Changed email contact to info@studyplug.com
- Mobile-first responsive design with image-first hero layout on mobile
- Fixed hero section layout with balanced grid columns and proper padding
- Added consistent pt-20 padding across all pages to prevent header collisions
- Floating WhatsApp chat button for instant communication
- FREE admission processing prominently emphasized throughout
- Removed database dependency and implemented Formspree for contact form submissions
- Simplified architecture for static hosting compatibility

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **API Design**: RESTful endpoints for contact form submissions
- **Development Server**: Custom Vite integration for development mode

## Key Components

### Contact Management System
- Contact inquiry form with validation using Zod schemas
- Formspree integration for form submissions (no database required)
- Form validation on client side with error handling
- Toast notifications for user feedback
- Direct email delivery to business inbox

### UI Component System
- shadcn/ui component library with customized theming
- Comprehensive component collection including forms, dialogs, cards, etc.
- Custom CSS variables for brand colors (EduLocate blue, green, amber)
- Responsive design with mobile-first approach

### Page Structure
- **Home**: Hero section with UK-focused service overview and statistics
- **Services**: Detailed service offerings (university selection, applications, UK visa processing)
- **Destinations**: Information about UK regions and universities (England, Scotland, Wales, Northern Ireland)
- **About**: Company information and testimonials
- **Resources**: Study guides and preparation materials for UK education
- **Contact**: Contact form and company information

## Data Flow

1. **Static Content**: University data and information served directly from frontend
2. **Contact Forms**: Submitted directly to Formspree service for email delivery
3. **Client-Side Validation**: Form validation using Zod schemas
4. **Response Handling**: Toast notifications for user feedback
5. **Static Hosting Ready**: No server-side dependencies for core functionality

## External Dependencies

### Production Dependencies
- **UI Framework**: React 18 with TypeScript support
- **Database**: Neon serverless PostgreSQL driver
- **Validation**: Zod for schema validation
- **Forms**: React Hook Form with Zod resolver
- **Styling**: Tailwind CSS with various Radix UI components
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns for date manipulation

### Development Tools
- **Build**: Vite with React plugin and runtime error overlay
- **Database Management**: Drizzle Kit for migrations and schema management
- **TypeScript**: Full type safety across client and server
- **ESBuild**: Server bundling for production

## Deployment Strategy

### Development Mode
- Vite dev server with HMR (Hot Module Replacement)
- Express server with middleware integration
- Automatic TypeScript compilation
- Development banner for Replit environment

### Production Build
- **Client**: Vite builds React app to `dist/public`
- **Server**: ESBuild bundles Express server to `dist/index.js`
- Static file serving for production assets
- Environment-based configuration

### Hosting Strategy
- Static site compatible (no database dependencies)
- Contact forms handled via Formspree service
- Ready for deployment on Vercel, Netlify, or similar platforms
- Cost-effective hosting with free tier options

### Environment Configuration
- NODE_ENV for environment-specific behavior
- REPL_ID detection for Replit-specific features
- No database credentials required

The architecture supports easy scaling from development to production, with clear interfaces between components and a database-ready foundation using modern web development practices.