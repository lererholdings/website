# Lerer Holdings Pty Ltd - Website Setup Guide

## Quick Start

This is a Next.js project configured for deployment on Vercel.

### Prerequisites
- Node.js 16+ and npm installed

### Installation & Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Directory Structure

```
website/
├── pages/              # Next.js pages (index.js, _app.js, _document.js)
├── styles/             # CSS modules (globals.css, Home.module.css)
├── public/             # Static assets
├── package.json        # Project dependencies
├── next.config.js      # Next.js configuration
├── vercel.json         # Vercel deployment config
└── .eslintrc.json      # ESLint configuration
```

## Building & Deployment

### Build for production
```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New..." → "Project"
4. Select your repository
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"

That's it! Your site will be live on a Vercel URL.

## Files Created

- **package.json** - Project metadata and dependencies
- **next.config.js** - Next.js configuration
- **vercel.json** - Vercel deployment settings
- **.eslintrc.json** - Code quality linting
- **.gitignore** - Files to exclude from Git
- **pages/index.js** - Home page component
- **pages/_app.js** - Next.js app wrapper
- **pages/_document.js** - HTML document wrapper
- **styles/globals.css** - Global styles
- **styles/Home.module.css** - Home page styles

## Customization

Edit the following files to customize your site:

- **pages/index.js** - Change homepage content
- **styles/Home.module.css** - Update colors and layout
- **package.json** - Change company name or add dependencies

## Contact Email

Update the contact email in `pages/index.js` from `info@lererholdings.com.au` to your preferred email address.
