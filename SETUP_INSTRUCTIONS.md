# Complete Setup Instructions for Lerer Holdings Website

## Step 1: Create Directory Structure

Run these commands in your terminal from the `website` directory:

```bash
# Create directories
mkdir pages
mkdir styles
mkdir public
```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Create Files

I've already created these configuration files in your project root:
- `package.json` - Project dependencies
- `next.config.js` - Next.js configuration
- `vercel.json` - Vercel deployment config
- `.eslintrc.json` - Linting configuration
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation

Now you need to copy these page and style files:

### In the `pages/` directory:
- `index.js` - Homepage
- `_app.js` - App wrapper
- `_document.js` - Document wrapper

### In the `styles/` directory:
- `globals.css` - Global styles
- `Home.module.css` - Page styles

## Step 4: Run Locally

```bash
npm run dev
```

Visit http://localhost:3000

## Step 5: Deploy to Vercel

1. Initialize Git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Push to GitHub, GitLab, or Bitbucket

3. Go to https://vercel.com and connect your repository

4. Vercel will automatically detect Next.js and deploy

## Note

The directory creation tool has limitations, so please create the directories manually using the commands above. Once created, copy the file contents from the files I've provided into each location.
