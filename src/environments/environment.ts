// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDYuWiNE3WF8qI7G5BZTis83m0LkCID6ts",
    authDomain: "practice-angular-app.firebaseapp.com",
    databaseURL: "https://practice-angular-app.firebaseio.com",
    projectId: "practice-angular-app",
    storageBucket: "",
    messagingSenderId: "534109303618"
  }
};
