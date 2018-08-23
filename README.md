# BoilerplateAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Configuration
The module uses [config](https://www.npmjs.com/package/config) for loading configuration entries. `NODE_CONFIG_ENV` can be used for specifying the loading realm for config.

- Create `local.json` for local config.
- Update `env.js` for loading values via env.

**Local Development**

In the `config` dir, create a file `local.json` to provide local configuration.

**Entries**

Only `public` entries are accessible via client. Entries marked with `REQUIRED` are essential for getting the app up and running. Each entry here is an object notation and is provided with short description.

- `public.apiEndpoint` `String` - URL for API endpoint.
- `public.sentryDSN` `String` - API key for [Sentry](https://sentry.io)
- `public.serverLogUrl` `String` - Any `ERROR` log will be `POST` to provided endpoint if provided.
- `public.production` `boolean` - Set it to `true` when in production.
- `public.intercomAppId` `String` - Workspace ID for [Intercom](https://www.intercom.com).
- `public.mixpanelToken` `String` - Token for [Mixpanel](https://mixpanel.com)
- `public.gaTrackingId` `String` - Tracking ID for [Google Analytics](https://analytics.google.com).
- `www.port` `String` `REQUIRED` - Port for listening incoming HTTP connection.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
