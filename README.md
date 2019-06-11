# Droopy Frontend

The goal is to go **zero to public single page app in less than 60 seconds**

This project uses my current favorites...

- TypeScript
- React
- @reach/router
- Parcel
- Netlify Hosting
- Emotion CSS-in-JS

![Demo Usage](https://res.cloudinary.com/droopytersen/image/upload/v1560227965/docs/droopy-frontend.gif)

## Usage Instructions

Create a file, `createApp.ps1` in your code directory and run it everytime you start a project.

When its all done, you should have a new app hosted publically on Netlify!

_createApp.ps1_

```powershell
$appName = Read-Host "What is your app name (all lower no spaces)?"
git clone https://github.com/DroopyTersen/droopy-frontend $appName
cd $appName
Remove-Item -Force -Recurse .git
git init
git add -A
git commit -m "cloned from droopy-frontend"
code .
npm install
npm run deploy
```

Manually you could do the same things with these steps

1. Clone the repo, adding your app name to the end
2. Navgigate into the new folder
3. Delete all my GIT stuff and start over with your own GIT repo
4. Install dependencies
5. `npm run deploy`

### Don't forget to

1. Update `package.json` (name, description, etc...)
2. Update the page title in `index.html`

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
