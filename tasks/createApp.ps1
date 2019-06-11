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