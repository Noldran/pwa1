### React PWA App

Simple React PWA App to be deployed on github pages and used to test interaction of different Apps in Sisal.

## Steps executed

1. Create React Progressive Web App:


```
npx create-react-app my-app --template cra-template-pwa
```

2. Install GitHub Pages package as a dev-dependency

```
npm install gh-pages --save-dev
```

3. Add properties to `package.json` file.

The first property we need to add at the top level homepage second we will define this as a string and the value will be "http://{username}.github.io/{repo-name}" {username} is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :

```json
"homepage": "https://noldran.github.io/pwa1"
'''

Second in the existing scripts property we to need to add predeploy and deploy.

```json
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

4. Create a Github repository and initialize it and add it as a remote in your local git repository.

Now, create a remote GitHub repository with your app name and go back initialize this

```
git init
```

add it as remote

```
git remote add origin https://github.com/Noldran/pwa1.git
```

5. Now deploy it to GitHub Pages.

just run the following command :

```
npm run deploy
```