// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

//genero una constante que es la variable, de configuración de FIrebase
//que me provee él para mi app
export const firebaseConfig={
    apiKey: "AIzaSyDoJk0hiqGgUwyIXt4slQfc_J-quOxryQY",
    authDomain: "chatonline-a3da1.firebaseapp.com",
    databaseURL: "https://chatonline-a3da1.firebaseio.com",
    projectId: "chatonline-a3da1",
    storageBucket: "",
    messagingSenderId: "702395122412",
    appId: "1:702395122412:web:a4e175ae6c9ea3a9"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
