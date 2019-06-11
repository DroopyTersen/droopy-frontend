# Droopy Frontend

This project uses...

- TypeScript
- React
- @reach/router
- Parcel
- Netlify Hosting

## Setup

### Install & Setup Global Tools

```sh
npm install -g rimraf netlify-cli
```

Then log into netlify

```sh
netlify login
```

### Get the code

1. Clone the repo
2. Navgigate into the new folder
3. Delete all my GIT stuff and start over with your own GIT repo
4. Install dependencies

```sh
git clone https://github.com/droopytersen/droopy-frontend MY_NEW_APP
cd MY_NEW_APP
rimraf .git
git init
git commit -a -m "cloned from droopy-frontend"
npm install
```

### Update a couple files

1. Update `package.json` (name, description, etc...)
2. Update the page title in `index.html`

### Try it

```sh
npm run start
```

### Deploy it

- First it will create a production build
- If you haven't logged into `netlify-cli` yet, a browser window will open so you can authorize Netlify to deploy for you.
- If it is your first time deploying this project, the Netlify CLI will walk you through setting up a new site.

```sh
npm run deploy
```

_Here's some example output_

```sh
PS C:\gitwip\droopy\droopy-frontend> npm run deploy

> droopy-frontend@1.0.0 predeploy C:\gitwip\droopy\droopy-frontend
> npm run build


> droopy-frontend@1.0.0 prebuild C:\gitwip\droopy\droopy-frontend
> npm run clean && node tasks/build.js


> droopy-frontend@1.0.0 clean C:\gitwip\droopy\droopy-frontend
> rimraf .cache && rimraf dist


> droopy-frontend@1.0.0 build C:\gitwip\droopy\droopy-frontend
> parcel build index.html --detailed-report

√  Built in 6.83s.

dist\entry.62db8795.js.map                                                   441.75 KB     67ms

dist\entry.62db8795.js                                                       179.29 KB    6.14s
├── node_modules\react-dom\cjs\react-dom.production.min.js                   103.62 KB    3.00s
├── node_modules\@reach\router\es\index.js                                     8.91 KB    3.10s
├── node_modules\@emotion\stylis\dist\stylis.browser.esm.js                    8.17 KB    407ms
├── node_modules\react\cjs\react.production.min.js                              6.4 KB    878ms
├── node_modules\scheduler\cjs\scheduler.production.min.js                     4.67 KB    450ms
├── node_modules\@emotion\core\dist\core.browser.esm.js                        4.36 KB    893ms
├── node_modules\@emotion\is-prop-valid\dist\is-prop-valid.browser.esm.js      4.26 KB     65ms
├── src\components\appShell\Nav.tsx                                            2.97 KB    3.35s
├── node_modules\create-react-context\lib\implementation.js                    2.82 KB    676ms
├── node_modules\react-lifecycles-compat\react-lifecycles-compat.es.js         2.39 KB    880ms
└── + 38 more assets

dist\entry.4792711a.css.map                                                    1.04 KB      2ms
dist\entry.4792711a.css                                                          554 B    4.18s
dist\index.html                                                                  343 B    562ms
Bundle breakdown saved in report: C:\gitwip\droopy\droopy-frontend\dist\report.html

> droopy-frontend@1.0.0 deploy C:\gitwip\droopy\droopy-frontend
> netlify deploy --prod --dir=dist

Logging into your Netlify account...
Opening https://app.netlify.com/authorize?response_type=ticket&ticket=053b58d20e876c517035f943c46bb5ea

You are now logged into your Netlify account!

Run netlify status for account details
```
