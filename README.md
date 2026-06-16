# Tanyaradzwa Mapuwei Website

Eleventy + Decap CMS personal brand website.

## Local preview

```bash
npm install
npm run start
```

Open the local URL shown in the terminal, usually `http://localhost:8080`.

## Important links after deployment

- Main site: `/`
- Blog: `/blog/`
- Professional Portfolio: `/professional-portfolio/`
- Decap CMS admin: `/admin/`

## Decap CMS

After deploying to Netlify, enable Netlify Identity and Git Gateway. Then visit `/admin/` to edit:

- Blog Posts
- Diary Entries

## Professional portfolio

The professional portfolio is separated from the personal website navigation. It only shows:

- Overview
- Skills
- Diaries
- Contact

## CV reminder

Replace the CV link in `src/work.njk` once your CV PDF or hosted CV link is ready.


## Professional Portfolio link

The professional-only page is available at `/professional-portfolio/`. It is intentionally not shown in the main personal navigation. Use this link directly for LinkedIn/CV sharing.
