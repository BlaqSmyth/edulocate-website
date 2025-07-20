# EduGlobal Consultancy - International Education Platform

## Overview

This is a full-stack web application for EduGlobal Consultancy, an international education consulting service. The platform serves as a comprehensive resource for students seeking guidance on studying abroad, featuring information about services, destinations, resources, and a contact system for inquiries.

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

### Database & Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized in `shared/schema.ts` for type safety
- **Storage**: Currently using in-memory storage (`MemStorage`) with interface for easy migration to database
- **Migrations**: Drizzle migrations configured in `./migrations` directory

### Contact Management System
- Contact inquiry form with validation using Zod schemas
- API endpoints for creating and retrieving contact inquiries
- Form validation on both client and server sides
- Toast notifications for user feedback

### UI Component System
- shadcn/ui component library with customized theming
- Comprehensive component collection including forms, dialogs, cards, etc.
- Custom CSS variables for brand colors (EduGlobal blue, green, amber)
- Responsive design with mobile-first approach

### Page Structure
- **Home**: Hero section with service overview and statistics
- **Services**: Detailed service offerings (university selection, applications, visa processing)
- **Destinations**: Information about study destinations worldwide
- **About**: Company information and testimonials
- **Resources**: Study guides and preparation materials
- **Contact**: Contact form and company information

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle API requests with validation
3. **Data Storage**: Currently in-memory storage, designed for easy database migration
4. **Response Handling**: Structured JSON responses with error handling
5. **Client Updates**: React Query manages cache invalidation and UI updates

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

### Database Strategy
- Drizzle ORM configured for PostgreSQL with Neon serverless
- Migration system ready for schema evolution
- Current in-memory storage allows for rapid development
- Easy migration path to persistent database storage

### Environment Configuration
- DATABASE_URL for PostgreSQL connection
- NODE_ENV for environment-specific behavior
- REPL_ID detection for Replit-specific features

The architecture supports easy scaling from development to production, with clear interfaces between components and a database-ready foundation using modern web development practices.