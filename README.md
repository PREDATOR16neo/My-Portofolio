# Naufal Terminal Portfolio

React + Vite portfolio with a terminal / cyber interface.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

This project already includes `netlify.toml` with:

- Build command: `npm run build`
- Publish directory: `dist`

Import the GitHub repository into Netlify and deploy.

## Contact form

The `SECURE_CHANNEL` form uses Netlify Forms. It submits:

- `name`
- `email`
- `message`

The React form submits without leaving the page and shows a terminal-style success/error status.

After the first successful deploy:

1. Open the Netlify project dashboard.
2. Open **Forms** and confirm `secure-contact` is detected.
3. Go to **Project configuration → Notifications → Emails and webhooks → Form submission notifications**.
4. Add the email address where you want new form submissions delivered.

The email field is included so Netlify can use the visitor's address as the Reply-To address.

## Edit links

Edit `src/data/portfolio.js`:

```js
export const links = {
  github: "https://github.com/PREDATOR16neo",
  linkedin: "https://www.linkedin.com/in/naufal-hanif-idn",
  whatsapp: "https://wa.me/6285397035348",
  cv: "/cv.pdf",
};
```

## Documentation photos

Put local photos in:

```text
public/documentation/
```

Then reference them from `src/data/portfolio.js`, for example:

```js
documentation: [
  "/documentation/experience-1.jpg",
  "/documentation/experience-2.jpg",
],
```
