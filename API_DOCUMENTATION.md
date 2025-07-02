# Portfolio Application - API Documentation

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [API Routes](#api-routes)
4. [Components](#components)
5. [Utilities](#utilities)
6. [Pages](#pages)
7. [UI Components](#ui-components)
8. [Examples and Usage](#examples-and-usage)

## Overview

This is a Next.js 15 portfolio application built with TypeScript, featuring a modern design with animations, contact forms, and responsive layouts. The application showcases a developer's portfolio with sections for services, resume, work, and contact information.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: Formik + Yup validation
- **Email Service**: SendGrid
- **UI Components**: Radix UI primitives
- **Icons**: React Icons, Lucide React

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── resume/            # Resume page
│   ├── services/          # Services page
│   ├── work/              # Work/Portfolio page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── client/           # Client-side components
│   ├── form/             # Form components
│   └── *.tsx             # Page-specific components
├── lib/                  # Utility libraries
├── utils/                # Utility functions
└── globals.css           # Global styles
```

## API Routes

### Send Email API

**Endpoint**: `POST /api/send-email`

**Description**: Sends contact form emails using SendGrid service.

**Request Body**:
```typescript
{
  email: string;        // Sender's email (required)
  firstname: string;    // Sender's first name (required)
  lastname: string;     // Sender's last name (required)
  phone: string;        // Sender's phone number (required)
  message?: string;     // Message content (optional)
  service?: string;     // Selected service (optional)
}
```

**Response**:
```typescript
// Success
{
  success: true
}

// Error
{
  error: string
}
```

**Status Codes**:
- `200`: Email sent successfully
- `400`: Missing required fields
- `500`: Server error (SendGrid failure)

**Usage Example**:
```typescript
const response = await fetch('/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'user@example.com',
    firstname: 'John',
    lastname: 'Doe',
    phone: '+1234567890',
    message: 'Hello, I would like to discuss a project.',
    service: 'web'
  }),
});

const result = await response.json();
```

## Components

### Layout Components

#### `Header`
**File**: `src/components/Header.tsx`

**Description**: Main navigation header with logo and responsive navigation.

**Props**: None

**Features**:
- Sticky positioning
- Responsive design (desktop/mobile navigation)
- Logo with accent styling

**Usage**:
```tsx
import { Header } from '@/components/Header';

// Used in layout.tsx - no props required
<Header />
```

#### `PageTransition`
**File**: `src/components/PageTransition.tsx`

**Description**: Provides smooth page transitions using Framer Motion.

**Props**:
```typescript
{
  children: React.ReactNode;
}
```

**Usage**:
```tsx
import { PageTransition } from '@/components/PageTransition';

<PageTransition>
  <YourPageContent />
</PageTransition>
```

#### `StairTransition`
**File**: `src/components/StairTransition.tsx`

**Description**: Animated stair-like transition effect.

**Props**: None

**Usage**:
```tsx
import { StairTransition } from '@/components/StairTransition';

<StairTransition />
```

### Navigation Components

#### `Navs`
**File**: `src/components/Navs.tsx`

**Description**: Desktop navigation menu with links and hire button.

**Props**: None

**Navigation Items**:
- Home (`/`)
- Services (`/services`)
- Resume (`/resume`)
- Work (`/work`)
- Contact (`/contact`)

**Usage**:
```tsx
import { Navs } from '@/components/Navs';

<Navs />
```

#### `MobileNavs`
**File**: `src/components/MobileNav.tsx`

**Description**: Mobile navigation with slide-out sheet menu.

**Props**: None

**Features**:
- Sheet component overlay
- Mobile-optimized layout
- Same navigation items as desktop

**Usage**:
```tsx
import { MobileNavs } from '@/components/MobileNav';

<MobileNavs />
```

#### `NavLink`
**File**: `src/components/NavLink.tsx`

**Description**: Custom navigation link component with active state handling.

**Props**:
```typescript
{
  href: string;
  className?: string;
  children: React.ReactNode;
}
```

**Usage**:
```tsx
import { NavLink } from '@/components/NavLink';

<NavLink href="/about" className="hover:text-accent">
  About
</NavLink>
```

### Content Components

#### `Photo`
**File**: `src/components/Photo.tsx`

**Description**: Animated profile photo with rotating SVG border.

**Props**: None

**Features**:
- Framer Motion animations
- Responsive sizing
- Rotating accent border

**Usage**:
```tsx
import { Photo } from '@/components/Photo';

<Photo />
```

#### `Stats`
**File**: `src/components/Stats.tsx`

**Description**: Animated statistics display with count-up animations.

**Props**: None

**Statistics Displayed**:
- Years of Experience: 5
- Projects Completed: 20+
- Happy Clients: 20
- Code Commits: 500+

**Usage**:
```tsx
import { Stats } from '@/components/Stats';

<Stats />
```

#### `FormContact`
**File**: `src/components/FormContact.tsx`

**Description**: Contact form with validation and email submission.

**Props**: None

**Features**:
- Formik form handling
- Yup validation schema
- Loading states
- Toast notifications
- Service selection dropdown

**Form Fields**:
- First Name (required)
- Last Name (required)
- Email (required, validated)
- Phone (required, pattern validated)
- Service (optional dropdown)
- Message (optional textarea)

**Usage**:
```tsx
import { FormContact } from '@/components/FormContact';

<FormContact />
```

### Client Components

#### `ButtonDownload`
**File**: `src/components/client/ButtonDownload.tsx`

**Description**: Download button for CV/resume with custom styling.

**Props**:
```typescript
{
  className?: string;
  text?: string;
}
```

**Features**:
- Opens PDF in new tab
- Customizable styling
- Download icon

**Usage**:
```tsx
import { ButtonDownload } from '@/components/client/ButtonDownload';

<ButtonDownload 
  className="border-accent hover:bg-accent" 
  text="Download CV" 
/>
```

## UI Components

The application uses a comprehensive design system built on Radix UI primitives.

### `Button`
**File**: `src/components/ui/button.tsx`

**Description**: Versatile button component with multiple variants and sizes.

**Props**:
```typescript
{
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}
```

**Usage**:
```tsx
import { Button } from '@/components/ui/button';

<Button variant="outline" size="lg">
  Click me
</Button>
```

### `Input`
**File**: `src/components/ui/input.tsx`

**Description**: Styled input component with autofill handling.

**Props**:
```typescript
{
  type?: string;
  className?: string;
  // All standard input props
}
```

**Features**:
- Custom styling for autofill
- Focus and hover states
- Accent border on focus

**Usage**:
```tsx
import { Input } from '@/components/ui/input';

<Input 
  type="email" 
  placeholder="Enter email"
  className="additional-classes"
/>
```

### `Form Input` (Enhanced)
**File**: `src/components/form/Index.tsx`

**Description**: Enhanced input component with error display.

**Props**:
```typescript
{
  error?: string;
  helpError?: string;
  // All standard input props
}
```

**Features**:
- Error state styling
- Animated error message display
- Built on top of base Input component

**Usage**:
```tsx
import { Input } from '@/components/form/Index';

<Input 
  type="email" 
  placeholder="Email"
  error={formik.errors.email}
  value={formik.values.email}
  onChange={formik.handleChange}
/>
```

### `Select`
**File**: `src/components/ui/select.tsx`

**Description**: Dropdown select component built on Radix UI.

**Components**:
- `Select` - Root component
- `SelectTrigger` - Button that opens dropdown
- `SelectContent` - Dropdown content container
- `SelectItem` - Individual option
- `SelectGroup` - Group of options
- `SelectLabel` - Group label

**Usage**:
```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### `Textarea`
**File**: `src/components/ui/textarea.tsx`

**Description**: Multi-line text input component.

**Usage**:
```tsx
import { Textarea } from '@/components/ui/textarea';

<Textarea 
  placeholder="Enter message"
  className="h-[200px]"
/>
```

### `Tabs`
**File**: `src/components/ui/tabs.tsx`

**Description**: Tab navigation component.

**Components**:
- `Tabs` - Root container
- `TabsList` - Tab button container
- `TabsTrigger` - Individual tab button
- `TabsContent` - Tab content panel

**Usage**:
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

### `Tooltip`
**File**: `src/components/ui/tooltip.tsx`

**Description**: Tooltip component for additional information.

**Components**:
- `TooltipProvider` - Context provider
- `Tooltip` - Root component
- `TooltipTrigger` - Element that triggers tooltip
- `TooltipContent` - Tooltip content

**Usage**:
```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

### `Sheet`
**File**: `src/components/ui/sheet.tsx`

**Description**: Slide-out panel component (used in mobile navigation).

**Components**:
- `Sheet` - Root component
- `SheetTrigger` - Element that opens sheet
- `SheetContent` - Sheet content panel
- `SheetClose` - Element that closes sheet
- `SheetTitle` - Sheet title

### `Sonner` (Toast)
**File**: `src/components/ui/sonner.tsx`

**Description**: Toast notification component.

**Usage**:
```tsx
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

// In layout
<Toaster richColors />

// In component
toast.success('Success message');
toast.error('Error message');
```

## Utilities

### `cn` Function
**File**: `src/lib/utils.ts`

**Description**: Utility function for merging Tailwind CSS classes.

**Parameters**:
```typescript
(...inputs: ClassValue[]) => string
```

**Usage**:
```tsx
import { cn } from '@/lib/utils';

const className = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);
```

### `seoHead` Function
**File**: `src/utils/seoHead.ts`

**Description**: Generates SEO metadata for pages.

**Parameters**:
```typescript
(props: Record<string, string>) => Metadata
```

**Default Values**:
- Title: "Quety"
- Description: "With 5 years of experience in web and mobile programming..."
- OpenGraph image: "/assets/image.png"

**Usage**:
```tsx
import { seoHead } from '@/utils/seoHead';

export const metadata = seoHead({
  title: "Contact",
  url: "/contact",
});
```

## Pages

### Home Page (`/`)
**File**: `src/app/page.tsx`

**Description**: Landing page with developer introduction, photo, and statistics.

**Components Used**:
- `Photo`
- `Stats`
- `ButtonDownload`

### Contact Page (`/contact`)
**File**: `src/app/contact/page.tsx`

**Description**: Contact form and information page.

**Features**:
- Contact form with validation
- Contact information display
- Phone, email, and address links

**Contact Information**:
- Phone: +8498 161 8988
- Email: quyetnxm04120@gmail.com
- Address: Ha Noi

### Services Page (`/services`)
**File**: `src/app/services/page.tsx`

**Description**: Displays available services with hover animations.

**Services**:
1. Web Development
2. Mobile Development
3. UI/UX Design
4. SEO Optimization

### Resume Page (`/resume`)
**File**: `src/app/resume/page.tsx`

**Description**: Tabbed interface showing experience, education, skills, and about information.

**Tabs**:
- **Experience**: Work history and positions
- **Education**: Academic background
- **Skills**: Technical skills with icons
- **About Me**: Personal information

### Work Page (`/work`)
**File**: `src/app/work/page.tsx`

**Description**: Portfolio showcase with project listings.

**Features**:
- 13 featured projects
- External links to live projects
- Technology stack listings
- Project descriptions

## Examples and Usage

### Complete Contact Form Implementation

```tsx
import { FormContact } from '@/components/FormContact';

export default function ContactPage() {
  return (
    <section className="container mx-auto py-20">
      <div className="flex flex-col lg:flex-row gap-[30px]">
        <div className="order-2 lg:order-none">
          <div className="flex flex-col gap-6 py-10 px-4 lg:px-10 bg-[#27272c] rounded-xl">
            <h3 className="text-3xl text-accent">Let's work together</h3>
            <p className="text-white/60">
              Contact form description...
            </p>
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Custom Button with Download Functionality

```tsx
import { ButtonDownload } from '@/components/client/ButtonDownload';

<ButtonDownload 
  className="border-accent border-1 text-accent hover:bg-accent transition-colors hover:text-black"
  text="Download CV"
/>
```

### Navigation Setup

```tsx
import { Header } from '@/components/Header';
import { PageTransition } from '@/components/PageTransition';
import { StairTransition } from '@/components/StairTransition';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
```

### Form Validation Schema

```typescript
import * as Yup from 'yup';

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid phone number')
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});
```

### Environment Variables

Required environment variables:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
NEXT_PUBLIC_SITE_URL=your_site_url
```

### Styling Classes

The application uses custom CSS classes for animations and styling:

```css
/* Custom text outline */
.text-outline {
  -webkit-text-stroke: 1px #c1c1c1;
  color: transparent;
}

/* Loading spinner */
.loader {
  /* Custom loader animation */
}
```

This documentation covers all public APIs, components, and their usage patterns. Each component is designed to be reusable and follows consistent patterns for props, styling, and functionality.