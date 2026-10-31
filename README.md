# Praneeth N | AI/ML Engineer Portfolio

Personal portfolio for Praneeth N, an AI/ML Engineer focused on agentic AI, LLM workflows, RAG pipelines, and production-grade backend systems.

## Highlights

- Responsive portfolio sections for About, Skills, Projects, Experience, and Contact.
- Interactive neural-network background built with Three.js and React Three Fiber.
- Smooth scrolling, section reveals, custom cursor feedback, and reduced-motion support.
- Project detail modals with technology badges, impact metrics, GitHub links, and demos.
- Contact form powered by React Hook Form and the Resend API.

## Tech Stack

- Next.js 15 with the App Router and TypeScript
- React 19
- Tailwind CSS 4
- Framer Motion
- Three.js and React Three Fiber
- Lenis smooth scrolling
- Lucide React icons

## Getting Started

### Requirements

- Node.js 20 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Configuration

The contact endpoint uses Resend. Create a `.env.local` file in the project root for production email delivery:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_destination_email
```

Local development can still run without these values, but contact submissions will not be delivered successfully.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run the configured lint command
```

## Project Structure

```text
src/
	app/                 App Router pages, global styles, and API routes
	components/
		animations/        Reusable reveal animations
		layout/             Navbar, footer, cursor, loading, and scroll UI
		sections/           Portfolio content sections
		three/              Three.js neural background
		ui/                 Shared buttons, badges, and visual effects
	hooks/               Client-side motion and scroll hooks
	lib/                 Site constants, utilities, and portfolio data
	types/               Shared TypeScript types
```

## Deployment

Build the application locally with:

```bash
npm run build
npm run start
```

The project can be deployed to any platform that supports Next.js, including Vercel. Add the Resend environment variables in the deployment provider before enabling the contact form.

## Author

**Praneeth N** - AI/ML Engineer, Hyderabad, India

- [GitHub](https://github.com/N-Praneeth-Reddy)
- [LinkedIn](https://www.linkedin.com/in/praneeth-reddy-936bb3262/)