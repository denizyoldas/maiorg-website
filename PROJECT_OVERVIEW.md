# Mai Organizasyon Website Overview

## Main Idea

This project is a one-page promotional website for **Mai Organizasyon**, an event organization business based in Tuzla, Istanbul. The site presents the company as a wedding and event planning service that helps customers turn special occasions into well-planned, memorable experiences.

The core message is:

> Mai Organizasyon supports customers during important life moments by providing planning, decoration, photography, music, catering, and event setup services.

The current content is written mainly in Turkish and focuses on weddings, engagements, baby showers, birthdays, circumcisions, and corporate events.

## Technology Stack

- **Framework:** Next.js 13 with the App Router
- **Language:** TypeScript and React
- **Styling:** Tailwind CSS, global CSS utilities, and some styled-components usage
- **UI/Interaction Libraries:**
  - Framer Motion for gallery modal animation
  - Swiper for testimonial carousel
  - React Toastify for contact form feedback
  - React Icons for icons
- **Analytics:** Google Analytics configured through `site.config.ts`
- **Image Handling:** Next.js Image is used in some components; regular `<img>` tags are used in others

## Project Structure

The site is organized around a single main page:

- `app/page.tsx`: Main homepage composition
- `app/layout.tsx`: Root HTML layout, font loading, favicon, analytics script
- `components/layout/main-layout.tsx`: Shared layout wrapper with header, footer, WhatsApp button, and go-to-top button
- `components/header.tsx`: Top navigation
- `components/footer.tsx`: Footer and Instagram link
- `components/home/*`: Homepage sections
- `components/about/*`: Hero and team-related sections
- `components/UI/*`: Reusable UI primitives such as title, input, thumbnails
- `site.config.ts`: Site metadata, social links, contact data, Google Maps embed URL
- `public/images/*`: Main visual assets used by hero, about, service, and gallery sections

## Current Pages and Routes

### `/`

The only implemented route is the homepage. It is a single-page flow made from multiple sections.

The homepage renders these sections in order:

1. Header
2. Hero
3. About Us
4. Services
5. Gallery
6. Testimonials / References
7. Team
8. Contact Information
9. Contact Form and Google Map
10. Footer
11. Floating WhatsApp button
12. Go-to-top button

### Linked But Not Implemented Routes

The UI contains links to routes that do not currently exist in the `app` directory:

- `/services`
- `/gallery`

At the moment, these links would fall through to the custom `not-found` page unless those pages are added later.

## Site Sections

### Header

The header is positioned over the page and includes:

- Brand name: **Mai Organizasyon**
- Navigation links:
  - Anasayfa
  - Hakkımızda
  - Hizmetlerimiz
  - Galeri
  - Referanslar
  - İletişim

Most navigation links point to section anchors on the homepage.

### Hero

The hero section uses a wedding-themed background image and introduces the brand with the message:

- "en güzel anlarınız"
- "Mai Organizasyon"

It includes two call-to-action buttons:

- Hizmetlerimiz
- Daha Fazla

The hero communicates that the company aims to transform customers' dreams into reality.

### About Us

The about section explains the company's mission:

- Being present for customers during important life moments
- Filling those moments in a perfect way
- Turning dreams into reality

It includes two visual images from the local `public/images` folder.

### Services

The services section lists six service categories:

- Wedding planning
- Wedding decoration
- Wedding photography
- Wedding DJ
- Food service
- Engagement organization

Each service has an icon/image, title, and short description. The section also includes a "Daha Fazlası" link pointing to `/services`, but that route is not currently implemented.

### Gallery

The gallery section displays event images from `public/images`.

Features:

- Responsive image grid
- Hover overlay with image icon
- Click-to-open animated modal
- Framer Motion layout animation

The section includes a "Daha Fazla" link pointing to `/gallery`, but that route is not currently implemented.

### Testimonials / References

The testimonials section uses Swiper to show customer quotes.

Current testimonial names:

- Emre & Selin
- Mustafa & Gülşen
- Tunç

The section is labeled in Turkish as "Müşteriler ne diyor?".

### Team

The team section presents team members with avatar images, names, and roles.

Current roles include:

- Nedime
- Kameraman
- Garson

The avatar images are loaded from `i.pravatar.cc`, so this section currently depends on external placeholder images rather than real local staff photos.

### Contact Information

The contact information section displays:

- Address
- Phone number
- Email address

The values are managed from `site.config.ts`.

Current contact data:

- Address: Postane, Rauf Orbay Cd. No:136, 34940 Tuzla/İstanbul
- Phone: +90 534 348 93 48
- Email: info@maiorganizasyon.com

### Contact Form and Map

The contact form includes fields for:

- Full name
- Phone
- Email
- Message

Submitting the form currently only builds a local payload and shows a success toast. There is no backend integration, email delivery, database save, or API request.

The right side of the section embeds a Google Map using the map URL from `site.config.ts`.

### Footer

The footer includes:

- Dynamic copyright year
- Credit link to Deniz Aksu
- Instagram social link

### WhatsApp Button

A floating WhatsApp button appears when `whatsappShow` is enabled in `site.config.ts`.

It links directly to:

- `https://wa.me/+905343489348`

## Visual Assets

Main local assets are stored in `public/images`.

Important assets include:

- `hero-weeding-1.jpg`: Hero background
- `a1.webp`, `a2.jpg`: About section images
- `s1.webp` through `s6.webp`: Service images/icons
- `g1.webp` through `g5.jpg`: Gallery images
- `logo.webp`, `logo.ico`, `logo-text.png`: Brand-related assets

There is also a `public/mai organizasyon gorsel` folder with additional event photos that are not currently wired into the homepage.

## Configuration

The main configuration file is `site.config.ts`.

It contains:

- Site title and description
- Google Analytics ID
- Author information
- Social media usernames
- Contact details
- WhatsApp visibility flag
- Google Maps embed URL

## Current Content and Product Positioning

The project positions Mai Organizasyon as a local event planning and decoration provider. The strongest emphasis is on wedding-related services, but the metadata also mentions:

- Engagements
- Birthdays
- Baby showers
- Corporate organizations

The tone is warm, service-oriented, and focused on helping customers create beautiful memories.

## Notable Implementation Notes

- The project uses the Next.js App Router, but the default `README.md` still contains older create-next-app text that references the Pages Router.
- The contact form does not send data anywhere yet.
- The `/services` and `/gallery` links exist in the UI, but the pages are not implemented.
- Some team and testimonial images are placeholders or externally loaded.
- Some image references use regular `<img>` instead of Next.js `<Image>`.
- `yarn.lock` is currently modified in the working tree before this overview file was added.

