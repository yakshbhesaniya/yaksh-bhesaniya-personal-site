# Deployment Guide: Vercel

This guide will walk you through deploying your personal website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Your code pushed to a GitHub repository

## Step 1: Prepare Your Repository

Ensure your code is pushed to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

## Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration

## Step 3: Configure Environment Variables

Add the following environment variables in Vercel:

### Required:
- **Name**: `NEXT_PUBLIC_SITE_URL`
- **Value**: Your production URL (e.g., `https://yakshbhesaniya.com`)

### Optional (for higher GitHub API rate limits):
- **Name**: `GITHUB_TOKEN`
- **Value**: Your GitHub Personal Access Token
  - Create one at: GitHub Settings → Developer settings → Personal access tokens
  - Only needs `public_repo` scope

## Step 4: Deploy

1. Click **"Deploy"**
2. Wait for build to complete (~2-3 minutes)
3. Your site will be live at `your-project.vercel.app`

## Step 5: Custom Domain (Optional)

To use your custom domain:

1. Go to Project Settings → Domains
2. Add your domain (e.g., `yakshbhesaniya.com`)
3. Follow Vercel's DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` environment variable to your custom domain

### DNS Configuration Example:

For registrars like GoDaddy, Namecheap, or Cloudflare:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record (www):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Step 6: Verify Deployment

After deployment, verify:

1. **Site loads correctly** at your Vercel URL
2. **Blog posts** are fetching from Medium
3. **GitHub repos** are displaying
4. **Resume download** works
5. **All links** are functional

### Check SEO:

1. View page source and verify meta tags
2. Test Open Graph with [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
3. Check structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

## Step 7: Performance Verification

Run Lighthouse audit:

```bash
npx lighthouse https://your-domain.com --view
```

Target scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Continuous Deployment

Vercel automatically redeploys when you push to GitHub:

```bash
git add .
git commit -m "Update content"
git push
```

Changes will be live in ~2 minutes.

## Troubleshooting

### Build Fails

- Check Vercel build logs for errors
- Ensure all dependencies are in `package.json`
- Verify TypeScript has no errors: `npx tsc --noEmit`

### APIs Not Working

- Verify environment variables are set in Vercel
- Check API rate limits (GitHub: 60/hour without token, 5000/hour with token)
- Medium RSS feed may have delays

### Images Not Loading

- Verify image domains in `next.config.js`
- Check that images are in `public/` folder
- Ensure external images use proper URLs

## Performance Tips

1. **Enable Vercel Analytics** (optional)
   - Project Settings → Analytics → Enable
2. **Use Vercel Speed Insights**
   - Shows real user Core Web Vitals
3. **Monitor Build Times**
   - Optimize if builds take >2 minutes

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: support@vercel.com
- Personal Contact: yakshb.iitb@gmail.com

---

**Your production-grade website is now live! 🚀**
