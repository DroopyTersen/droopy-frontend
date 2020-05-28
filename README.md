# Droopy Frontend

The goal is to go **zero to public single page app in less than 60 seconds**

This project uses my current favorites...

- TypeScript
- React
- React Router 6 (alpha)
- Webpack
- Netlify Hosting

## Setup

1. Create a Repo from the Template
2. Update some of the files
3. `npm install`
4. Update the names
   1. Update `package.json` (name, description, etc...)
   2. Update the page title in `index.html`
   3. Update app title in `manifest.webmanifest`

### Developing

- To develop locally with hot-reloading run `npm run start`
- The `/static` folder contents gets copied into `/dist` at build. You might not even need it though.

### Deploy it

- First it will create a production build
- If you haven't logged into `netlify-cli` yet, a browser window will open so you can authorize Netlify to deploy for you.
- If it is your first time deploying this project, the Netlify CLI will walk you through setting up a new site.

```sh
npm run deploy
```
