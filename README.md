# ASM Mold Removal Blog

Next.js blog subdomain front end for ASM Mold Removal Inc.

## Files

- `app/page.tsx` - branded blog landing page.
- `app/[slug]/page.tsx` - clean single-post pages for subdomain routes.
- `app/api/blogs/route.ts` and `app/api/blogs/[slug]/route.ts` - server-side Uplift proxy endpoints.
- `components/` - reusable header, hero, trust strip, blog explorer, CTA, and footer components.
- `lib/blogs.ts` - Uplift fetching, fallback posts, and ASM asset constants.
- `app/globals.css` - ASM theme tokens and responsive layout.
- `BRAND_GUIDE.md` - the inferred brand rules used for the design.

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open:

```text
http://127.0.0.1:3010
```

## Deployment

Deploy this project to the blog subdomain root, for example `blog.asmmoldremoval.ca`.

The article routes are clean Next.js paths:

```text
https://blog.asmmoldremoval.ca/mold-mitigation-services
```

## Environment

Create the deployment environment variables from `.env.example`:

```bash
UPLIFT_TOKEN=your_uplift_token_here
NEXT_PUBLIC_SITE_URL=https://blog.asmmoldremoval.ca
```

`UPLIFT_TOKEN` is used only on the server. The browser calls the Next app, not Uplift directly.

## Verification

```bash
npm run typecheck
npm run build
```
