# Project Brew Coffee Shop Website Specification

## 1. Project Overview
- **Project Name**: Project Brew
- **Type**: Single Page Application (SPA) - Coffee Shop Website
- **Core Functionality**: A modern, responsive static website for a coffee shop and dairy business featuring navigation, home page with hero section and featured products, about page, contact page with form, and footer.
- **Target Users**: Coffee enthusiasts, dairy product customers, potential customers seeking information about the business

## 2. UI/UX Specification

### Layout Structure

#### Pages
1. **Home Page** - Hero section with CTA, featured products section
2. **About Page** - Business description with image
3. **Contact Page** - Contact form and business information

#### Page Sections
- **Navbar**: Fixed top, white background, logo + navigation links
- **Main Content**: Page-specific content
- **Footer**: Brown background, brand info + social links

#### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary Brown**: #5C3A21
- **Light Brown**: #C4A484
- **White**: #FFFFFF
- **Dark Brown (hover)**: #3E2723

#### Typography
- **Font Family**: Poppins (Google Font)
- **Headings**: 
  - H1: 48px, bold
  - H2: 36px, semibold
  - H3: 24px, medium
- **Body**: 16px, regular
- **Small**: 14px, regular

#### Spacing System
- Base unit: 8px
- Section padding: 80px vertical, 5% horizontal
- Card padding: 24px
- Component gaps: 16px - 32px

#### Visual Effects
- **Card hover**: translateY(-10px), increased shadow
- **Button hover**: scale(1.05), background color change
- **Image hover**: scale(1.1)
- **Link hover**: color change to light brown, underline animation
- **Page transitions**: fade-in animation on load
- **Smooth scrolling**: scroll-behavior: smooth

### Components

#### Navbar
- Fixed position at top
- White background with subtle shadow
- Logo (text): "Project Brew" in primary brown
- Navigation links: Home, About, Contact
- Hover effects: underline animation, color to light brown
- Smooth transition on all interactions

#### Hero Section (Home)
- Full viewport height
- Coffee background image with overlay
- Centered text content
- Main heading: "Project Brew"
- Subheading: "Coffee and Dairies Made with Passion"
- CTA Button: "Explore Menu"
- Button: Brown background, white text, hover to light brown with scale animation

#### Featured Section (Home)
- 3 product cards in a row (responsive to single column on mobile)
- Cards: Coffee, Milk Tea, Dairy Products
- Card design: White background, brown title, light brown accent
- Hover: lift upward, shadow increase, image zoom

#### About Page
- Split layout: image on one side, text on other (stacked on mobile)
- Coffee shop image with zoom hover effect
- Description text with brown headings
- White background throughout

#### Contact Page
- Two-column layout: form on one side, info on other
- Contact Form fields: Name, Email, Message
- Send Button: Brown background, white text, hover light brown with shadow
- Contact Info: Address, Phone, Email

#### Footer
- Brown background (#5C3A21)
- White text
- Brand name and tagline
- Social media icons
- Hover effects: light brown color, scale animation

## 3. Functionality Specification

### Core Features
1. **Routing**: React Router DOM for page navigation
2. **Responsive Design**: Mobile-first approach with breakpoints
3. **Smooth Animations**: CSS transitions and keyframe animations
4. **Form Handling**: Basic form with required fields
5. **Smooth Scrolling**: For anchor links

### User Interactions
- Click navigation links → navigate to respective pages
- Hover on cards → lift and shadow effect
- Hover on buttons → scale and color change
- Hover on images → zoom effect
- Submit contact form → alert confirmation (static site)
- Scroll → smooth scroll behavior

### Data Handling
- Static content only (no backend)
- Form submission shows alert (demo purposes)

### Edge Cases
- Empty form fields → HTML5 validation
- Page not found → redirect to home (if needed)

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Navbar is fixed at top with white background
- [ ] All navigation links work correctly
- [ ] Hero section displays full screen with background image
- [ ] Button has brown background and hover effect
- [ ] Featured cards display in row (3 columns on desktop)
- [ ] Cards have hover lift and shadow effect
- [ ] About page shows image and description
- [ ] Contact form has all required fields
- [ ] Footer has brown background with white text
- [ ] All pages are responsive
- [ ] Animations are smooth (0.3s transitions)

### Technical Requirements
- [ ] Built with React + Vite
- [ ] Uses React Router DOM for navigation
- [ ] Pure CSS (no Tailwind, no Bootstrap)
- [ ] Uses Poppins font from Google Fonts
- [ ] All colors match specified palette
- [ ] All hover effects implemented as specified
