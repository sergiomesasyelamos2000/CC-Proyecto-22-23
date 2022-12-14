// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: {
    components: {
      login: 'login',
      logout: 'logout',
      not_found: 'not-found',
      users: 'users',
      users_details: 'user/:id',
      sign_up: 'sign-up',
      books: 'books',
      books_details: 'book/:id',
    },
    api: {
      base: 'api/v1/',
      login: 'login/',
      users: 'user/',
      books: 'book/',
    },
  },
  environment_api: {
    local: 'http://localhost:3000/',
  },
  encoder: {
    password: 'sistemas',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
