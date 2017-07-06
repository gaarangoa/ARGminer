# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Setup

    npm install primeng --save
    npm install bootstrap@3

### Bootstrap requires a couple of steps to get it done:

- Open the file .angular-cli.json from the root of your project.
 
- Under the property apps the first item in that array is the default application.

- There is a property styles which allows external global styles to be applied to your application.

- Specify the path to bootstrap.min.css

It should look like the following when you are done:

    "styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
    ],

Note: When you make changes to .angular-cli.json you will need to re-start ng serve to pick up configuration changes.

