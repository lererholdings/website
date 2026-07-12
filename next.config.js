/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Multi-zone rewrite: serves the sales-crm-tasks app (a separate Vercel
  // project) under this domain at /sales-tasks/*. beforeFiles so it always
  // wins over any local page/static file at that path, present or future.
  // The destination has no /sales-tasks suffix — Vercel strips the source
  // prefix when forwarding, so the target project receives requests exactly
  // as if it were at its own root (no changes needed on that project's own
  // routing). Scoped only to /sales-tasks — nothing else on this domain
  // (including any /api/* routes this site might add later) is touched.
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/sales-tasks/:path*',
          destination: 'https://sales-crm-tasks-lerers-projects.vercel.app/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig
